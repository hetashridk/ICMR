import "./Navbar.css";
import ICMRLogo from "../../assets/ICMR_Logo.png";
import PUIcon from "../../assets/PU_Icon.png";
import secondLogo from "../../assets/secondLogo.png";
import thirdLogo from "../../assets/thirdLogo.png";
import fourthLogo from "../../assets/fourthLogo.png";
import fifthLogo from "../../assets/fifthLogo.png";
import { useUserInfo } from "../../contexts/User";
import { Link, NavLink, useNavigate } from "react-router-dom";
const VITE_SERVER = import.meta.env.VITE_SERVER;
import axios from "axios";
import { useRef, useState } from "react";
import FillFormMenu from "./FillFormMenu";

export default function Navbar() {
  const navigate = useNavigate();

  const [menuState, setMenuState] = useState(false);

  const handleClick = () => {
    setMenuState(!menuState);
  };

  const { user, loggedIn } = useUserInfo();

  const handleLogOut = async () => {
    localStorage.removeItem("token");
    try {
      const response = await axios.get(`${VITE_SERVER}/logout`);
      console.log(response);
      //   navigate("/sign-in");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        id="navigation"
        style={
          loggedIn
            ? { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }
            : { boxShadow: "none" }
        }
        className="navbar"
      >
        <div className="ICMRLogo  nav-img">
          <Link to="/">
            <img src={ICMRLogo}></img>
          </Link>
        </div>

        <div className="secondLogo nav-img">
          <img src={secondLogo}></img>
        </div>

        <div className="secondLogo nav-img">
          <img src={thirdLogo}></img>
        </div>

        <div className="secondLogo nav-img">
          <img src={fourthLogo}></img>
        </div>

        <div className="secondLogo nav-img">
          <img src={fifthLogo}></img>
        </div>

        <div className={"PUIcon nav-img"}>
          <img src={PUIcon} className="ICMRIcon"></img>
        </div>
      </div>
      {loggedIn && (
        <>
          <div id="nav-buttons" className="buttons-grid" data-aos="fade-down">
            <div className="nav-btn">
              <button id="but">
                <p>Aim</p>
              </button>
              <button>
                <p>Objective</p>
              </button>
              <button>
                <p>Outcome</p>
              </button>
              <button>
                <p>Methodology</p>
              </button>
              <button>
                <p>Facilities</p>
              </button>
              <button>
                <p>Workflow</p>
              </button>
              <button onClick={handleClick}>
                <p>Data Collection</p>
              </button>
            </div>
            <div>
              <button className="logout" onClick={handleLogOut}>
                <p>Logout</p>
              </button>
            </div>
          </div>

          <FillFormMenu menuState={menuState} setMenuState={setMenuState} />
        </>
      )}
      {/* <button onClick={handleLogOut}>logout</button> */}
    </>
  );
}
