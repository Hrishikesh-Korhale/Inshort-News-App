import { MenuItem, Menu } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../constants/routes";

const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Menu
      id="menu-id"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
       <Link
        to={`${routePath.newstypes}?newstype=all`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>All</MenuItem>
      </Link>
      <Link
        to={`${routePath.newstypes}?newstype=business`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Business</MenuItem>
      </Link>
      <Link
        to={`${routePath.newstypes}?newstype=technology`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MenuItem onClick={handleClose}>Technology</MenuItem>
      </Link>
      </Menu>
  );
};

export default HeaderMenu;