/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import AllUser from './AllUser';
import { useQuery } from "@tanstack/react-query";

const EachUser = () => {


    const POST_ENDPOINT = "/api/users/allUser";

    const {
		data: users,
		
	} = useQuery({
		queryKey: ["users"],
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
    	      {users?.length === 0 && <p className='text-center my-4'>No user in this tab. Switch 👻</p>}
			{users && (
				<div>
					{users.map((user) => (
						<AllUser key={user._id} user={user} />
			
					))} 
				</div>
			)}
    </div>
  )
}

export default EachUser