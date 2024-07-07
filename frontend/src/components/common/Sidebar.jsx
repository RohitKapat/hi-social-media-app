// import XSvg from "../svgs/X";

import { MdHomeFilled } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Hi from '../../components/logo/Hi.png'
import { useMutation,useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Sidebar = () => {
	

	const queryClient = useQueryClient();

	const { mutate: logout } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch("/api/auth/logout", {
					method: "POST",
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
			toast.success("Logout Successful")
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
		onError: () => {
			toast.error("Logout failed");
		},
	});

	const { data: authUser } = useQuery({ queryKey: ["authUser"] });

	return (
		<div className='md:flex-[2_2_0] w-18 max-w-60 rounded-lg  bg-[#ECF2FD] shadow-md '>
			<div className='sticky top-0 left-0 h-screen flex flex-col  w-20 md:w-full '>
			<div className="px-8">
				<Link to='/' className='flex justify-center md:justify-start'>
				<img src={Hi}alt="img" className='lg:w-2/3 fill-white' ></img>
				</Link>
				<ul className='flex flex-col gap-3 mt-4'>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/'
							className='flex gap-3 items-center hover:bg-[#181818] hover:text-white transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<MdHomeFilled className='w-8 h-8' />
							<span className='text-lg hidden md:block'>Home</span>
						</Link>
					</li>
					<li className='flex justify-center md:justify-start'>
						<Link
							to='/notifications'
							className='flex gap-3 items-center hover:bg-[#181818] hover:text-white transition-all rounded-full duration-300 py-2 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<IoNotifications className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Notifications</span>
						</Link>
					</li>

					<li className='flex justify-center md:justify-start'>
						<Link
							to={`/profile/${authUser.username}`}
							// /${data?.username}
							className='flex gap-3 items-center hover:bg-[#181818] hover:text-white transition-all rounded-full duration-300 py-2 px-5 pl-2 pr-4 max-w-fit cursor-pointer'
						>
							<FaUser className='w-6 h-6' />
							<span className='text-lg hidden md:block'>Profile</span>
						</Link>
					</li>

				</ul>
				</div>
				{authUser && (
					<Link
						to={`/Login`}
						className='mt-auto mb-10 flex gap-2 items-start transition-all duration-300 hover:bg-[#181818] hover:text-white py-2 px-4 mx-5 rounded-full'
					>
						<div className='avatar hidden md:inline-flex'>
							<div className='w-8 rounded-full'>
								<img src={authUser.profileImg || "/avatar-placeholder.png"} />
							</div>
						</div>
						<div className='flex justify-between flex-1 mx-4 '>
							<div className='hidden md:block'>
								<span className='text-stone-800 font-bold text-sm w-20 truncate flex justify-start hover:text-white'>{authUser.fullName}</span>
								<span className='text-slate-500 text-sm flex justify-start'>@{authUser.username}</span>
							</div>
							<BiLogOut className='w-5 h-5 cursor-pointer' onClick={(e)=>{
									e.preventDefault();
									logout();

							}}/>
						</div>
					</Link>
				)}
			</div>
		</div>
	);
};
export default Sidebar;