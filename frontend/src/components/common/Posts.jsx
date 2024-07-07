import Post from "./Post";
// import { POSTS } from "../../utils/dummy";
import { useQuery } from "@tanstack/react-query";
// import { useEffect } from "react";


const Posts = ({feedType, username}) => {

	const getPostEndpoint = () => {
		switch (feedType) {
			case "forYou":
				return "/api/posts/all";
			
			case "posts":
				return `/api/posts/user/${username}`;
			
			default:
				return "/api/posts/all";
		}
	};

	const POST_ENDPOINT = getPostEndpoint();

	const {
		data: posts,
		
	} = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			try {
				const res = await fetch(POST_ENDPOINT);
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}

				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});

	return (
		<>
			{posts?.length === 0 && <p className='text-center my-4'>No posts in this tab. Switch 👻</p>}
			{posts && (
				<div>
					{posts.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			)}
		</>
	);
};
export default Posts;