import './App.css'
import { useState } from 'react'
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Search from './Components/Search';
import ProductDetails from './Components/ProductDetails';
import products from './data/products.js';
function App() {
  const[cart,setCart]=useState([]);
  const[totalAmt,setAmt] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  function addToCart(product){
    setCart([...cart,product])
    setAmt(totalAmt+product.price);
  }
  function removeFromCart(index){
    const updatecart=cart.filter((_,i)=>i!=index );
    setCart(updatecart);
    setAmt(totalAmt-cart[index].price);
  }
  const totalAmount=cart.reduce((total,index)=>(total+index.price),0);
  return (
    <div>
      
      <Header cart={cart.length}/>
      <Search products={products} setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts} addToCart={addToCart} setSelectedProduct={setSelectedProduct}/>
      {selectedProduct && <ProductDetails product={selectedProduct} addToCart={addToCart} setSelectedProduct={setSelectedProduct} />}
      <Cart totalAmt={totalAmt} cart={cart} removeFromCart={removeFromCart}/>
    </div>
  )
}

export default App
