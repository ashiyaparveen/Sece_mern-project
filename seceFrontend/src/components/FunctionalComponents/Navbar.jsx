import { useState } from "react";
import { Link} from "react-router-dom";
import "../../css/Navbar.css";

const Navbar = ({ setIsLoggedIn }) => {
  const [memodropDown, setmDropdown] = useState(false);
  const [hookdropDown, sethDropdown] = useState(false);

  const togglemDropdown = () => {
    setmDropdown((prevState) => !prevState);
  };
  const togglehDropdown = () => {
    sethDropdown((prevState) => !prevState);
  };
  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
  };

  return (
    <header>
      <nav>
        <ol>
          <li><Link to="/home" className="link">Home</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><Link to="/gallery" className="link">Gallery</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
          <li
            className="dropdown"
            onMouseEnter={togglemDropdown}
            onMouseLeave={togglemDropdown}
          >
            <span className="link">Memoization</span>
            {memodropDown && (
              <ul className="dropdown-box">
                <li><Link to="/memo" className="link">Memo</Link></li>
                <li><Link to="/lazy" className="link">Lazy</Link></li>
                <li><Link to="/hoc" className="link">HoC</Link></li>
              </ul>
            )}
            </li>
          
          <li
            className="dropdown"
            onMouseEnter={togglehDropdown}
            onMouseLeave={togglehDropdown}
          >
            <span className="link">Hooks</span>
            {hookdropDown && (
              <ul className="dropdown-box">
                <li><Link to="/reactlm" className="link">lifecycle</Link></li>
                <li><Link to="/fun-in-class" className="link">callFun</Link></li>
                <li><Link to="/usestate" className="link">useState</Link></li>
                <li><Link to="/useeffect" className="link">useEffect</Link></li>
                <li><Link to="/useapi" className="link">useAPI</Link></li>
                <li><Link to="/usered" className="link">useReducer</Link></li>
                <li><Link to="/useimg" className="link">useAPIimg</Link></li>
                <li><Link to="/useref" className="link">useRef</Link></li>
                <li><Link to="/usememo" className="link">useMemo</Link></li>
                <li><Link to="/usecall" className="link">useCall</Link></li>
                <li><Link to="/usecon" className="link">useContext</Link></li>
                <li><Link to="/uselocal" className="link">useLocal</Link></li>
                <li><Link to="/cushook" className="link">CustomHook</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/" className="link" onClick={handleLogout}>Logout</Link></li>
        </ol>
      </nav>
    </header>
  );
};

export default Navbar;
