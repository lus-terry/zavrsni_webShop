import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SmallIcons from "../components/SmallIcons";

const NavBar = () => {
    return <nav id="nav-bar">



    <Link to="/"  >
          <Logo/>
    </Link>

    <div className="flex flex-col items-end space-y-2">
      <SmallIcons/>
      <div>
      <ul className="flex space-x-10 text-sm ">
                  <li>
                      <Link to="/aboutUs">ABOUT US</Link>
                  </li>
                  <li>
                      <Link to="/shop" >SHOP</Link>
                  </li>
                  <li>
                      <Link to="/visit" >VISIT</Link>
                  </li>
                  <li>
                      <Link to="/gallery" >GALLERY</Link>
                  </li>
                  <li>
                      <Link to="/contact" >CONTACT</Link>
                  </li>
              </ul>
      </div>

    </div>
  
  

    
     </nav>;
}
 
export default NavBar;