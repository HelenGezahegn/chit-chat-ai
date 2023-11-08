import Dropdown from "./Dropdown";
import Background from "@/components/welcome/Background";

const NavBar = ({ username, avatar }) => {
  return (
    <>
      <Background />
      <div className="top-nav">
        <div className="top-nav-left">
          <img className="top-nav-logo" src="/logo.png" alt="logo" />
          <h1>ChitChat</h1>
        </div>
        <div className="top-nav-right">
          <Dropdown username={username} avatar={avatar} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
