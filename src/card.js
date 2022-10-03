function Card({product,addToCart}) {
    
    return <div className='col-lg-4 border  p-3'>
        <div className='row'>
            <div className='col-lg-12'>
                <img className="image_fluid" src={product.img}></img>
            </div>
            <div className='col-lg-12'>
                <h3>{product.name}</h3>
                <h6>Price Rs.{product.price}</h6>
                <button onClick={()=>{
                     addToCart(product)
                }} className='btn  btn-primary'>
                    Add to cart
 
                </button>
            </div>
        </div>
    </div>
}
export default Card