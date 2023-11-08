import "./style.css";
import { useState } from "react";
import { Menu, MenuItem } from "./Menu.jsx";

const menu = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15
    }
  },

  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05
    }
  }
};

const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 }
  },

  transition: { opacity: { duration: 0.2 } }
};

const Avatar = ({ username, avatar }) => {
  return (
    <>
      <img
        src={avatar}
        alt="avatar"
        style={{ width: "30px", height: "auto", borderRadius: "1rem" }}
      />
      <p>{username}</p>
    </>
  );
};

export default function Dropdown({ username, avatar }) {
  const [open, setOpen] = useState(false);
  const handleLogout = () => {};

  const hrefs = {
    viewDocs: () =>
      window.open("https://github.com/HelenGezahegn/chit-chat-ai", "_blank"),
    reportBug: () =>
      window.open(
        "https://github.com/HelenGezahegn/chit-chat-ai/issues",
        "_blank"
      ),
    logout: handleLogout
  };
  return (
    <Menu
      label={<Avatar avatar={avatar} username={username} />}
      open={open}
      setOpen={setOpen}
      animate={open ? "open" : "closed"}
      initial="closed"
      exit="closed"
      variants={menu}
    >
      <MenuItem {...item} onClick={hrefs.logout}>
        Logout
      </MenuItem>
      <MenuItem onClick={hrefs.viewDocs} {...item}>
        View docs
      </MenuItem>
      <MenuItem {...item} onClick={hrefs.reportBug}>
        Report a bug
      </MenuItem>
    </Menu>
  );
}
