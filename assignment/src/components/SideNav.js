import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./SideNav.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SearchComponent from "./SearchComponent";
import rating from "./Rating";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import { fetchInStockProduct } from "../actions";
import { connect } from "react-redux";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import "antd/dist/antd.css";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { InputNumber } from "antd";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  button: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  textField: {
    width: "24ch",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
}));
function onChange(value) {
  console.log("changed", value);
}
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState("{<Rating defaultValue={5} />}");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //toggle
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleToggleChange = (event, props) => {
    props.fetchInStockProduct();
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ textAlign: "center" }}>
            WALMART
          </Typography>
          <div className="search-bar-div">
            <SearchComponent />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className="container">
        <List>
          <FormControl component="fieldset">
            <FormLabel component="legend">Rating</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="{<Rating defaultValue={5} />}"
                control={<StyledRadio />}
                label={<Rating defaultValue={5} />}
              ></FormControlLabel>
              <FormControlLabel
                value="{<Rating defaultValue={4} />}"
                control={<StyledRadio />}
                label={<Rating defaultValue={4} />}
              ></FormControlLabel>
              <FormControlLabel
                value="{<Rating defaultValue={3} />}"
                control={<StyledRadio />}
                label={<Rating defaultValue={3} />}
              ></FormControlLabel>
              <FormControlLabel
                value="{<Rating defaultValue={2} />}"
                control={<StyledRadio />}
                label={<Rating defaultValue={2} />}
              ></FormControlLabel>
              <FormControlLabel
                value="{<Rating defaultValue={1} />}"
                control={<StyledRadio />}
                label={<Rating defaultValue={1} />}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </List>
        </div>
        <Divider />
        <div className="container">
        <List>
          <FormGroup>
            <h4>stock</h4>
            <FormControlLabel
              control={<Switch />}
              label="Available"
              onChange={() => handleToggleChange}
            />
          </FormGroup>
        </List>
       </div>
        <Divider />
        <div className="container">
        <br />
        <br />
        <TextField
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">REVIEW COUNT</InputAdornment>
            ),
          }}
        />
        <br />
        <br />
        </div>
        <Divider />
        <div className="container">
        <br />
        <h4>Min price</h4>
        <InputNumber
          size="medium"
          min={0}
          max={600}
          defaultValue={0}
          onChange={onChange}
        />
        <h4>Max price</h4>
        <InputNumber
          size="medium"
          min={0}
          max={600}
          defaultValue={1}
          onChange={onChange}
        />
        <br />
        <br />
        </div>
        <Divider />
        <div className={classes.button}>
          <Button variant="contained" startIcon={<DoneIcon />}></Button>
          <Button variant="contained" startIcon={<ClearIcon />}></Button>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

export default connect(null, { fetchInStockProduct })(PersistentDrawerLeft);
