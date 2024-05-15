// Import React from react app
import React from 'react';
import Product from './Product';
function Products() {
    // Declare an array of products
    const getProducts = () => {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, idrutrum ligula purus sit amet mauris. ",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, idrutrum ligula purus sit amet mauris. ",
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, idrutrum ligula purus sit amet mauris. ",
                rating: 5,
                numOfReviews: 2
            }];
    }
    const products = getProducts()
    const listProducts = products.map((product) =>
        <Product key={product.productName} data={product} />
    );
    return (
        // we specify the JSX that will be inserted into the DOM as HTML
        <div>
            <h1>Products</h1>
            {/* If the length > 0 then show the products */}
            {listProducts.length > 0 ? (
                <ul>{listProducts}</ul>
            ) : (
                // If the length is == to 0, show "No products to display"
                <ul>No Products to display</ul>
            )}
            
        </div>
    );
}
// Export the product component
export default Products;