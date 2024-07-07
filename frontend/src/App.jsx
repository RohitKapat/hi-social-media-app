import './App.css'
import LoginPage from './pages/auth/login/LoginPage'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import SignUpPage from './pages/auth/signup/SignUpPage'
import ProfilePage from './pages/profile/ProfilePage'
import NotificationPage from './pages/notification/NotificationPage'
import AdminPage from './pages/admin page/AdminPage'
import AdminLogin from './pages/auth/login/AdminLogin'
import { Toaster } from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'


function App() {
 
  const { data: authUser } = useQuery({
		// we use queryKey to give a unique name to our query and refer to it later
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/me");
				const data = await res.json();
				if (data.error) return null;
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				console.log("authUser is here:", data);
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		retry: false,
	});

	const { data: authAdmin } = useQuery({
		// we use queryKey to give a unique name to our query and refer to it later
		queryKey: ["authAdmin"],
		queryFn: async () => {
			try {
				const res = await fetch("/api/auth/admin");
				const data = await res.json();
				if (data.error) return null;
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				console.log("authAdmin is here:", data);
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
		retry: false,
	});


  return (
    <>
    <div >
      <Routes>
		<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/login' />} />
				<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
				<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to='/' />} />
				<Route path='/notifications' element={authUser ? <NotificationPage /> : <Navigate to='/login' />} />
				<Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to='/login' />} />
				<Route path='/admin' element={authAdmin ? <AdminPage/> : <Navigate to='/adminLogin' />} />
				<Route path='/adminLogin' element={ !authAdmin ? <AdminLogin/> : <Navigate to='/admin' />} />
      
    </Routes>
    <Toaster />
   
  </div>
    </>
  )
}

export default App
