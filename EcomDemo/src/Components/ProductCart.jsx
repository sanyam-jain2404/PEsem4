export default function ProductCard({product,addToCart, setSelectedProduct})
{
    return(
    <div className="card" onClick={() => setSelectedProduct(product)}>
        <img src={product.Image} alt={product.name}/>
        <h4>{product.name}</h4>
    </div>);
}