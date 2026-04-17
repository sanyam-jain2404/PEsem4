export default function ProductDetails({ product, addToCart, setSelectedProduct }) {
    return (
        <div className="product-details-modal">
            <div className="modal-content">
                <button className="close-btn" onClick={() => setSelectedProduct(null)}>×</button>
                <img src={product.Image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: ₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
}