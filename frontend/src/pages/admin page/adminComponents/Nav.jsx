//Nav.js

import { Link } from 'react-router-dom';
import "./Nav.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Nav = () => {

    const queryClient = useQueryClient();

	const { mutate: logout } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch("/api/auth/adminLogout", {
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
			queryClient.invalidateQueries({ queryKey: ["authAdmin"] });
		},
		onError: () => {
			toast.error("Logout failed");
		},
	});

    // const { data: authAdmin } = useQuery({ queryKey: ["authAdmin"] });

    return (
        <div className="navcontainer">
            <nav className="nav">
                <div className="nav-upper-options">
                    <div className="nav-option option1 bg-sky-600">
                        <img
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                            className="nav-img"
                            alt="dashboard"
                        />
                        <h3>Dashboard</h3>
                    </div>

                   <Link to='/adminLogin'>    
                    <div className="nav-option logout" onClick={(e)=>{
									e.preventDefault();
									logout();

							}}>
                        <img
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                            className="nav-img"
                            alt="logout"
                        />
                        <h3>Logout</h3>
                    </div>
                    </Link> 
                </div>
            </nav>
        </div>
    );
};

export default Nav;
