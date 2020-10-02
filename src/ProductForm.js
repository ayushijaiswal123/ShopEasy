import React from "react";

class ProductForm extends React.Component {
  render() {
    return (
      <form>
        <h3>Enter a new product</h3>
        <p>
          <label>
            Name
            <br />
            <input type="text" name="name" style={{ borderRadius: "10%" }} />
          </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input
              type="text"
              name="category"
              style={{ borderRadius: "10%" }}
            />
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input type="text" name="price" style={{ borderRadius: "10%" }} />
          </label>
        </p>
        <p>
          <label>
            <input
              type="checkbox"
              name="stocked"
              style={{ borderRadius: "10%" }}
            />
            &nbsp;In stock?
          </label>
        </p>
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default ProductForm;
