import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "@mui/material/Menu";
import { useTheme } from "@mui/material/styles"; // Import useTheme to access theme

const pages = ["Home", "About", "Service", "Blog", "Contact Us"];

function Navbar() {
  const [anchorElNav, setAnchorE1Nav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorE1Nav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorE1Nav(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo for big screens */}
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, color: theme.palette.secondary.main, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: theme.typography.fontFamily,
                fontWeight: theme.typography.fontWeightBold,
                letterSpacing: theme.typography.letterSpacing,
                color: theme.palette.secondary.main,
                textDecoration: "none",
              }}
            >
              COMPANY
            </Typography>

            {/* Logo for mobile screens */}
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, color: theme.palette.secondary.main, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: theme.typography.fontFamily,
                fontWeight: theme.typography.fontWeightBold,
                letterSpacing: theme.typography.letterSpacing,
                color: theme.palette.secondary.main,
                textDecoration: "none",
              }}
            >
              COMPANY
            </Typography>

            {/* Menu for big screens */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: theme.palette.secondary.main, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Menu button for mobile screens */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              {/* Menu for mobile view */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;