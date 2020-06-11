import React, { Component } from "react";
import Product from "./Product";
import Title from "./Text";
import { ProductConsumer } from "../context";
export default class ProductList extends Component {
  render() {
    
    return (
      <React.Fragment>
         <div className="container">
          <div className="py-5">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                   // console.log(value.products)
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  }
                  )
                }}
                 </ProductConsumer>
              </div>
            </div>
          </div>
       </React.Fragment>
    );
  }
}

