import styled from "@emotion/styled";
import { Toolbar, AppBar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const StyleHeader = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const MenuIconn = styled(MenuIcon)`
  color: #000;
  cursor: pointer;
`;

const LogoImg = styled("img")({
  height: 70,
  margin: "auto",
  paddingRight: 70,
});


const Header = () => {
  const url ="https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  const [open, setOpen] = useState(null);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <StyleHeader>
      <Toolbar>
      <Box onClick={handleClick}>
        <MenuIconn />
      </Box>
        <LogoImg src={url} alt="logo" />  
        <HeaderMenu open={open} handleClose={handleClose} />
      </Toolbar>
    </StyleHeader>
  );
};

export default Header;
