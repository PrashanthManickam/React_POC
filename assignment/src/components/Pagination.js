import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { connect } from "react-redux";

import { fetchProducts } from "../actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
}));

function BasicPagination(props) {
  const classes = useStyles();
  function getSelectedPage(pageNumber) {
    props.fetchProducts(pageNumber);
  }
  return (
    <div className={classes.root}>
      <Pagination
        count={8}
        size="large"
        onChange={(e, page) => getSelectedPage(page)}
      />
    </div>
  );
}

export default connect(null, { fetchProducts })(BasicPagination);
