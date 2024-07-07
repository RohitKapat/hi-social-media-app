import { useState } from "react";
import { Link } from "react-router-dom";
import Hi from "../../../components/logo/Hi.png"
// import XSvg from "../../../components/svgs/X";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { toast } from "react-hot-toast"

const LoginPage = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const queryClient = useQueryClient();

	const {
		mutate: loginMutation,
		isPending,
		isError,
		error,
	} = useMutation({
		mutationFn: async ({ username, password }) => {
			try {
				const res = await fetch("/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ username, password }),
				});

				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			toast.success("Login Successful")
			// refetch the authUser
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		loginMutation(formData);

	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// const isError = false;

	return (
		<div className='max-w-screen-xl mx-auto flex h-screen'>
			<div className='flex-1 flex-col hidden lg:flex items-center  justify-center pb-7'>
				<img src={Hi}alt="img" className='lg:w-full fill-white' ></img>
				<h1 className="text-3xl font-bold  text-sky-600">Socialise. Connect. </h1>
				
			</div>
			<div className='flex-1 flex flex-col justify-center items-center'>
				<form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
					
					<h1 className='text-6xl font-extrabold pb-8 text-sky-600'>{"Let's"} go.</h1>
					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdOutlineMail />
						<input
							type='text'
							className='grow'
							placeholder='username'
							name='username'
							onChange={handleInputChange}
							value={formData.username}
						/>
					</label>

					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdPassword />
						<input
							type='password'
							className='grow'
							placeholder='Password'
							name='password'
							onChange={handleInputChange}
							value={formData.password}
						/>
					</label>
					{/* <Link to='/'> */}
						<button className='btn rounded-full btn-primary text-white w-full'>{
							isPending ? "Loading..." : "Login"
						}</button>
					{/* </Link> */}
					{isError && <p className='text-red-500'>{error.message}</p>}
				</form>
				<div className='flex flex-col gap-2 mt-4'>
					<p className='text-sky-800 text-md'>{"Don't"} have an account?</p>
					<Link to='/signup'>
						<button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign up</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default LoginPage;