import styled from "@emotion/styled";
import { Toolbar, AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const StyleHeader = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const MenuIconn = styled(MenuIcon)`
  color: #000;
`;

const LogoImg = styled("img")({
  height: 70,
  margin: "auto",
  paddingRight: 70,
});

const Header = () => {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  return (
    <StyleHeader position="static">
      <Toolbar>
        <MenuIconn />
        <LogoImg src={url} alt="logo" />
      </Toolbar>
    </StyleHeader>
  );
};

export default Header;
