import React from "react";
import axios from 'axios';
// import Prod from "./ProductsData.json";
import "../page_styles/Products.css";

class Products extends React.Component {
  state = {
    Products: [],
    nameFilter: '',
    priceFilterMin: null,
    priceFilterMax: null
  };
  componentDidMount() {
    axios
    .get("/api/products/")
    .then((response) => {
      console.log(response)
        this.setState({
          Products: response.data
        })
    })
    .catch(err => {
      /// display error banner or something?
    });
  }
  updateNameFilter(name) {
    this.setState({nameFilter: name})
  }
  updatePriceFilter(min, max) {
    this.setState({priceFilterMin: min, priceFilterMax: max})
  }

  render() {

    let productsToList = [...this.state.Products]
    // filtering on productsToList

    return (
      <div>
        <section id="showcase">
          <div className="container_main">
            <h1>Get Your Instruments Here!</h1>
          </div>
        </section>

        <br />

        <div className="card">
          <div className="row">
            <div className="cards" className="col-sm-12">
              <div className="row">
                {productsToList.map((product, index) => {
                  return (
                    <div className="col-sm-4 col-sm-4" 
                       key={`product-card-${product.product_id}`}>
                      <div className=" card aSeries">
                        <div className="name">{product.product_type}</div>
                        <div className="photoBg" style={{ backgroundImage: `url(${product.image})` }}></div>
                        <div className="description">{product.description_type}</div>
                        <div className="price">${product.item_price}</div>
                        <div className="btn-group">
                          <input
                            className="btn btn-primary"
                            type="submit"
                            value="Buy"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
