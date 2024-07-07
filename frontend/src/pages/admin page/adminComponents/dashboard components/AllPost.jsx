import React from 'react'
import '../Dashboard.css'
import { useQuery } from "@tanstack/react-query";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from 'react-hot-toast'

const AllPost = ({post}) => {

    const { data: authAdmin } = useQuery({ queryKey: ["authAdmin"] });

    const postOwner = post.user;

    const queryClient = useQueryClient();

    const { mutate: deletePostAdmin } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch(`/api/posts/admin/${post._id}`, {
					method: "DELETE",
				});
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
			toast.success("Post deleted successfully");
			queryClient.invalidateQueries({ queryKey: ["posts"] });
		},
	});


    
	const handleDeletePost = () => {
		deletePostAdmin();
	};
  return (
    <div>
    <div className="items">
    <div className="item1">
      <h3 className="t-op-nextlvl w-7">{post.text}</h3>
      <h3 className="t-op-nextlvl w-7">{postOwner.username}</h3>
      <h3 className="t-op-nextlvl w-7">{post.likes.length}</h3>
      <button className="t-op-nextlvl label-tag bg-red-600 cursor-pointer" onClick={handleDeletePost}>Delete</button>
    </div>
</div>
</div>
  )
}

export default AllPost