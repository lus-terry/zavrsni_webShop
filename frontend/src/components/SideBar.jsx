import {  NavLink } from "react-router-dom";



const SideBar = () => {

    return <nav id="side-bar">

  

   
        <div className="column_container">
            <NavLink className={({isActive}) => 
                isActive ? "link-active" : "link-inactive"
                } 
                to="/admin/summary"
            >
                Summary
            </NavLink>

            <NavLink className={({isActive}) => 
                isActive ? "link-active" : "link-inactive"
                } 
                to="/admin/products"
            >
                Products
            </NavLink>

        </div>
   
  

    
     </nav>;
}
 
export default SideBar;