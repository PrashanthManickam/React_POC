import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import Pagination from "./Pagination";
import SearchComponent from "./SearchComponent";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (this.props.wmProd.length < 1) {
      return <Loading />;
    }
    const renderList = this.props.wmProd.map((wmProd) => {
      return (
        <div
          className="column"
          style={{ paddingBottom: "4rem" }}
          key={wmProd.productId}
        >
          <Link to={`products/detail/${wmProd.productId}`}>
            <ProductCard
              productName={wmProd.productName}
              productId={wmProd.productId}
              longDescription={wmProd.longDescription}
              shortDescription={wmProd.shortDescription}
              reviewCount={wmProd.reviewCount}
              reviewRating={wmProd.reviewRating}
              price={wmProd.price}
              productImage="https://images.indianexpress.com/2019/10/Mi-TV_BIG_LEAD.jpg"
            />
          </Link>
        </div>
      );
    });

    return (
      <div className="details-main-div">
        <div className="search-bar-div">
          <SearchComponent
          // helperFunction={this.helperFunction}
          />
        </div>

        <div className="ui relaxed four column grid">
          <div className="row">{renderList}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  let wmProd = state.productResponse;
  wmProd = Object.values(wmProd);
  return { wmProd };
};
export default connect(mapStateToProps, {
  fetchProducts,
})(ProductList);
