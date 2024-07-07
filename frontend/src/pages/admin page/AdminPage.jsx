import Header from './adminComponents/Header';
import Dashboard from './adminComponents/Dashboard';
import Nav from './adminComponents/Nav';

const AdminPage = () => {
  return (
    <div className='h-screen '>
       <Header />
      <div className="main-container">
      <Nav />
      <Dashboard />
      </div>
   </div>
  );
};

export default AdminPage;
