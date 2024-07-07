//Header.js

import React from 'react';
import Hi from '../../../components/logo/Hi.png'
import "./Header.css";
const Header = () => {
    return (
        <header>
            <div className="logosec">
                <div className="logo">
                <img src={Hi}
                        height={100} width={100}
                    // className="icn menuicn"
                    id="menuicn"
                    alt="menu-icon" />
                </div>
               
            </div>

            {/* <div className="searchbar">
                <input type="text"
                    placeholder="Search" />
                <div className="searchbtn">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                        className="icn srchicn"
                        alt="search-icon" />
                </div>
            </div> */}

            <div className="message">
                {/* <div className="circle"></div> */}
                {/* <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                    className="icn"
                    alt="" /> */}
                <div className="dp">
                    <img src=
"https://static.vecteezy.com/system/resources/previews/020/429/953/non_2x/admin-icon-vector.jpg"
                        className="dpicn"
                        alt="dp" />
                </div>
            </div>

        </header>
    );
};

export default Header;
