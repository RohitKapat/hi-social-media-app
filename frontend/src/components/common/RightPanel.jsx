import { Link } from "react-router-dom";
// import { USERS_FOR_RIGHT_PANEL } from "../../utils/dummy";
import { useQuery } from "@tanstack/react-query";
import useFollow from "../../hooks/useFollow";

const RightPanel = () => {
	// const isLoading = false;


	const { data: suggestedUsers, isLoading } = useQuery({
		queryKey: ["suggestedUsers"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/users/suggested");
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong!");
				}
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
	});

	const { follow, isPending } = useFollow()

	return (
		<div className='hidden lg:block my-0 mx-0 bg-[#ECF2FD] shadow-md'>
			<div className=' p-4 rounded-md sticky top-2 bg-[#ECF2FD]'>
				<p className='font-bold mb-5'>Who to follow</p>
				<div className='flex flex-col gap-4 '>
					{/* item */}
				
					
					{!isLoading &&
						suggestedUsers?.map((user) => (
							<Link
								to={`/profile/${user.username}`}
								className='flex items-center justify-between gap-4'
								key={user._id}
							>
								<div className='flex gap-2 items-center'>
									<div className='avatar'>
										<div className='w-8 rounded-full'>
										<img src={user.profileImg || "/avatar-placeholder.png"} />
										</div>
									</div>
									<div className='flex flex-col'>
										<span className='font-semibold tracking-tight truncate w-28 flex justify-start'>
											{user.fullName}
										</span>
										<span className='text-sm text-slate-500 flex justify-start'>@{user.username}</span>
									</div>
								</div>
								<div>
									<button
										className='btn bg-white text-black hover:bg-white hover:opacity-90 rounded-full btn-sm'
										onClick={(e) =>{
											e.preventDefault();
											follow(user._id);
										}}
									>
										{isPending ? "Following..." : "Follow"}
									</button>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};
export default RightPanel;