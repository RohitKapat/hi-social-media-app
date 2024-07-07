//Main.js

import React from 'react';
import './Dashboard.css';
import EachPosts from './dashboard components/EachPosts';
import EachUser from './dashboard components/EachUser';

const Main = () => {
  return (
    <div className="main">
      <div className="searchbar2">
        <input type="text" name="" id="" placeholder="Search" />
        <div className="searchbtn">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
            className="icn srchicn"
            alt="search-button"
          />
        </div>
      </div>

           {/* Delete module from here */}
      <div className="report-container mt-2">
        <div className="report-header">
          <h1 className="recent-Articles text-sky-600">Users</h1>
          <button className="view bg-sky-600">View All</button>
        </div>
{/* Delete module headings here */}
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">Fullname</h3>
            <h3 className="t-op">Username</h3>
            <h3 className="t-op">Followers</h3>
            <button className="t-op">Following</button>
          </div>


          <EachUser />

        </div>
      </div>

   
     {/* Delete module from here */}
      <div className="report-container">
        <div className="report-header">
          <h1 className="recent-Articles text-sky-600">Recent Posts</h1>
          <button className="view bg-sky-600">View All</button>
        </div>
{/* Delete module headings here */}
        <div className="report-body">
          <div className="report-topic-heading">
            <h3 className="t-op">Posts</h3>
            <h3 className="t-op">Username</h3>
            <h3 className="t-op">Likes</h3>
            <button className="t-op">Delete Posts</button>
          </div>

          <EachPosts/>

        </div>
      </div>
    </div>

  );

  
};

export default Main;
