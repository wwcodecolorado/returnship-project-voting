// Import React Packages
import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => (
  <>
    <div className="col sideBar--container">
      <div className="sideBar--row">
        <div className="sideBar--col">
          <ul>
            <li>
              <NavLink className="sideBar--link" exact to="/admin">
                {/* <img
              src="../../../assets/icons/copy-archives1.svg"
              alt="Archives Icon"
              className="admin-header--icon"
              id="admin-header--archives-icon"
            /> */}
                <img
                  src="https://github.com/wwcodecolorado/returnship-project-voting/blob/kl-feature12-admin-panel-redesign/client/assets/icons/archives.png?raw=true"
                  alt="Archives Icon"
                  className="admin-header--icon"
                  id="admin-header--archives-icon"
                />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="sideBar--link" exact to="/admin">
                <img
                  src="https://github.com/wwcodecolorado/returnship-project-voting/blob/kl-feature12-admin-panel-redesign/client/assets/icons/user-icon.png?raw=true"
                  alt="User Icon"
                  className="admin-header--icon"
                />
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default SideBar;
