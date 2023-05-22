import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useProSidebar } from "react-pro-sidebar";
import {
  Person,
  Settings,
  Money,
  Logout,
  NotificationsOutlined,
  LanguageOutlined,
} from "@mui/icons-material";

const AppHeader = () => {
  // useProSidebar hook
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  const [anchorEl, setAnychorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnychorEl(event.currentTarget);
  };

  const handleMenuClose = (event: any) => {
    setAnychorEl(null);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton
          onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
          color="secondary"
        >
          <MenuIcon />
        </IconButton>
        <Box
          component={"img"}
          sx={styles.appLogo}
          src="/assets/logo_round.png"
        />

        <Box sx={{ flexGrow: 1 }} />

        <IconButton title="Settings" color="secondary">
          <NotificationsOutlined />
        </IconButton>
        <IconButton title="Sign Out" color="secondary">
          <LanguageOutlined />
        </IconButton>
        <IconButton
          title="Sign Out"
          color="inherit"
          aria-controls="menu"
          onClick={handleMenuOpen}
        >
          <Avatar
            src="/assets/samit.jpg"
            alt="Avatar"
            sx={{ width: 28, height: 29 }}
          />
        </IconButton>

        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} sx={{ px: "30px" }}>
            <Person sx={{ fontSize: "16px", mr: "20px" }} />Profile
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ px: "30px" }}>
            <Settings sx={{ fontSize: "16px", mr: "20px" }} />Settings
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ px: "30px" }}>
            <Money sx={{ fontSize: "16px", mr: "20px" }} />Billing
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ px: "30px" }}>
            <Logout sx={{ fontSize: "16px", mr: "20px" }} />Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  appBar: {
    bgcolor: "teal",
  },
  appLogo: {
    borderRadius: 2,
    width: 40,
    marginLeft: 2,
    cursor: "pointer",
  },
};

export default AppHeader;
