import React from "react";
import './homepage.scss'

const SideBar = () => {
  return (
    <div>
      <nav id="sidebar" >
      <img
        className="img-fluid"
        src="../assets/android-chrome-192x192.png"
        alt="LOGO"
      />
      <div className="sidebar-header">
        <h4>Code Academy</h4>
      </div>
      <ul className="list-unstyled components">
        {/* <p className="text-abc text-center">Welcome</p> */}
        <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li> <li>
            <input type="checkbox" />
            <span>zaman</span>
        </li>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet suscipit commodi hic nam accusantium excepturi ex porro dignissimos cum, deserunt quidem ea eligendi dicta provident fuga. Deleniti, quidem accusantium!</p>
      </ul>
      
    </nav>
    </div>
  );
};

export default SideBar;
