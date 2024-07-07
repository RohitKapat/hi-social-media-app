
import Posts from "../../components/common/Posts";
import CreatePost from "./CreatePost";
import Sidebar from "../../components/common/Sidebar";
import RightPanel from "../../components/common/RightPanel";


const HomePage = () => {
	

	return (
		<><div className="flex justify-evenly ">
            <Sidebar />
			<div className='flex-[4_4_0]  min-h-screen bg-slate-50'>
				{/* Header */}
				<div className='flex w-full'>
				
				</div>

				{/*  CREATE POST INPUT */}
				
				<CreatePost />
					
				{/* POSTS */}
					
				<Posts />
				
			</div>
            <RightPanel />
            </div>
		</>
	);
};
export default HomePage;