import React from 'react'
import '../Dashboard.css'
import { useQuery } from "@tanstack/react-query";

import { useQueryClient} from "@tanstack/react-query";
// import { toast } from 'react-hot-toast'

const AllUser = ({user}) => {

    const { data: authAdmin } = useQuery({ queryKey: ["authAdmin"] });

    const queryClient = useQueryClient();

  return (
    <div>
    <div className="items">
    <div className="item1">
      <h3 className="t-op-nextlvl w-7">{user.fullName}</h3>
      <h3 className="t-op-nextlvl w-7">{user.username}</h3>
      <h3 className="t-op-nextlvl w-7">{user.followers.length}</h3>
      <h3 className="t-op-nextlvl w-7">{user.following.length}</h3>
      {/* <button className="t-op-nextlvl label-tag bg-red-600 cursor-pointer" onClick={handleDeletePost}>Delete</button> */}
    </div>
</div>
</div>
  )
}

export default AllUser