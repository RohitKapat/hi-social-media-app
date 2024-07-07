/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import AllPost from './AllPost';
import { useQuery } from "@tanstack/react-query";

const EachPosts = () => {


    const POST_ENDPOINT = "/api/posts/allAdmin";

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
    <div>
    	      {posts?.length === 0 && <p className='text-center my-4'>No posts in this tab. Switch 👻</p>}
			{posts && (
				<div>
					{posts.map((post) => (
						<AllPost key={post._id} post={post} />
			
					))} 
				</div>
			)}
    </div>
  )
}

export default EachPosts