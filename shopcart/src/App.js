import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 0,
        },
        {
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 0,
        },
        {
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 0,
        },
        {
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 0,
        },
      ],
    };
  }

  getTotalItems = () => {
    return this.state.products.reduce((sum, product) => sum + product.value, 0);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="bg-info">
          <div className="container">
            <div className="row py-5 mb-4">
              <h1 className="col-md-6 mb-4">Shop to React</h1>
              <div className="col-md-6 text-end mb-4">
                <FontAwesomeIcon icon={faShoppingCart} /> {this.getTotalItems()}{" "}
                items
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {this.state.products.map((product) => (
            <div key={product.id}>
              <div>
                {product.desc}
                <br></br>
                <div className="d-flex align-items-center">
                  <img
                    src={product.image}
                    alt={product.desc}
                    className="me-3"
                    style={{ width: "100px" }}
                  />

                  <div className="d-flex align-items-center">
                    <input
                      type="number"
                      min="0"
                      value={product.value}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        this.setState((prevState) => ({
                          products: prevState.products.map((p) =>
                            p.desc === product.desc ? { ...p, value } : p
                          ),
                        }));
                      }}
                      className="form-control me-2"
                      style={{ width: "60px" }}
                    />
                    <span>quantity</span>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
