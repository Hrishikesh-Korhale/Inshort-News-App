import { MenuItem, Menu } from "@mui/material";
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
      <MenuItem onClick={handleClose}>All</MenuItem>
      <MenuItem onClick={handleClose}>Business</MenuItem>
      <MenuItem onClick={handleClose}>Technology</MenuItem>
    </Menu>
  );
};

export default HeaderMenu;