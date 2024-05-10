// Reducer
// Reducer
// initialize our state to an empty productCart array and totalCost being zero
function cartReducer(state, action) {
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }
    // We use a switch statement to handle the two action types (addProduct and deleteProduct)
    switch (action.type) {
        case "addProduct":
            return {
                ...state,
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        case "deleteProduct":
            const updatedArray = state.productCart.filter(product =>
                product.productName !== action.productData.productName);
            return {
                ...state,
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }
        default:
            return state;
    }
}
export default cartReducer;