import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "material-ui-search-bar";
import { fetchFilteredProduct } from "../actions";
import { fetchProducts } from "../actions";

class SearchComponent extends Component {
  state = { query: "" };
  handleSearch = (value) => {
    this.setState({
      query: value.trim(),
    });
    this.props.fetchFilteredProduct(this.state.query.toLowerCase());
  };

  cancelSearch = () =>{
    this.setState({
      query:""
    })
    this.props.fetchProducts();
  }
  render() {
    console.log(this.state.query, "query");
    return (
      <SearchBar
        onChange={(value) => this.handleSearch(value)}
        value={this.state.query}
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
        onCancelSearch={()=>this.cancelSearch()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  let filteredArray = state.productResponse.filteredData;
  return { product: filteredArray };
};

export default connect(mapStateToProps, { fetchFilteredProduct,fetchProducts })(
  SearchComponent
);
