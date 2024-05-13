// Import React from react app
import React from 'react';
function Products() {
    // Declare an array of products
    const products = ["Learning React", "Pro React", "Beginning React"];
    const listProducts = products.map((product) =>
        <li key={product.toString()}>{product}</li>
    );
    return (
        // we specify the JSX that will be inserted into the DOM as HTML
        <div>
            <h1>Products</h1>
            {/* Include the entire list in ul elem */}
            <ul>{listProducts}</ul>
        </div>
    );
}
// Export the product component
export default Products;