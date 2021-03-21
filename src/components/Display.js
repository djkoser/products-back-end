import React from 'react';
//products from app.js
export default function Display(props) {
  const { products } = props
  let display;
  if (products) {
    display = products.map((prod, ind) => {
      return (
        <figure key={ind}>
          <span>Product ID:{prod.product_id}</span>
          <br/>
          <img src={prod.image_url} alt={prod.description} width="200px" />
          <figcaption>{prod.name}
            <br />{prod.description}
            <br />{"$" + prod.price}
          </figcaption>
        </figure>
      )
    })
  }

  return (
    <section id="productDisplay">
      {display}
    </section>
  );
};