import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import theme from "../theme";
const drawerWidth = 240;
const navItems = ["CREATE PREP", "RESULT"];
const navNavigate = ["/create", "/result"];

const useStyles = makeStyles({
  mainHeader: {
    color: "rgb(12, 51, 52, 1)",
  },
});
function NavBar(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "#a9d5de" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: theme.typography.fontFamily }}
        onClick={() => {
          navigate("/");
        }}
      >
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(navNavigate[index]);
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontFamily: theme.typography.fontFamily,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className={classes.mainHeader}
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "0px 1492px 0px 120px",
        px: {
          xs: 2,
          sm: 3,
          md: 5,
          lg: 10,
          xl: 15,
        },
      }}
    >
      <CssBaseline />
      <AppBar
        color="primary"
        component="nav"
        theme={theme}
        maxWidth="xl"
        style={{
          borderRadius: "0 0 100px 100px",
          height: "75px",
          display: "flex",
          justifyContent: "center",
        }}
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 5,
            lg: 10,
            xl: 15,
          },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              color: "inherit",
            }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="create">
              <Button sx={{ color: "#a9d5de", fontSize: "15px" }}>
                Create Prep
              </Button>
            </Link>
            <Link to="result">
              <Button sx={{ color: "#a9d5de", fontSize: "15px" }}>
                Result
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#0a3c4a",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;
