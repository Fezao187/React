export default function Product(props) {
    const { item, product, onAdd, onRemove } = props;
    return (
        <div className="cart">
            <img
                className="small"
                src={product.image}
                alt={product.name}
            />
            <h3>{product.name}</h3>
            <div>R{product.price}</div>
            <div>
                {item ? (<div>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>
                    <span className="p-1">{item.qty}</span>
                    <button onClick={() => onAdd(item)} className="add">
                        +
                    </button>
                </div>
                ) : (
                    <button onClick={() => onAdd(product)}>Add to cart</button>
                )}

            </div>
        </div>
    )
}