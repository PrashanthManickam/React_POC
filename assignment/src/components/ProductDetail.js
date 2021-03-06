import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../actions";
import "./styles.css";
import Button from '@material-ui/core/Button';

class ProductDetail extends React.Component {
  render() {
    const {
      productId,
      shortDescription,
      price,
      reviewRating,
      reviewCount,
      productName,
      inStock,
    } = this.props.product;
    return (
      <div className="details-main-div">
        <div className="">
          <img
            alt="image"
            width="500"
            height="333"
            src={"https://images.indianexpress.com/2019/10/Mi-TV_BIG_LEAD.jpg"}
          />
          <div className="">
            <a className="header">{productName}</a>
            <ul>
              <li>Produce ID ={productId}</li>
              <li>ShortDescription ={shortDescription}</li>
              <li>Price = {price}</li>
              <li>ReviewRating = {reviewRating}</li>
              <li>ReviewCount ={reviewCount}</li>
              <li> Availability: {inStock ? "Available" : "Unavailable"}</li>
            </ul>
          </div>
          <Button variant="contained" color="primary" component="span"
           onClick={() => this.props.history.push("/")}>
          Navigate Back
        </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let pId = ownProps.match.params.productId;
  let productResponse = state.productResponse;
  let product = productResponse[pId];
  return {
    product,
  };
};

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);
