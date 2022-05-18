import './Navbar.css'


import shopping_cart from '../../utils/img/shoppingCart.svg'


function Navbar() {
    return (
        <nav>
            <ul>
                <li className='links active'><a href="../../../index.html">Inicio</a></li>
                <li className='links'><a href="homebakery.html">Información</a></li>
                <li className='links'><a href="galery.html" >Galería</a></li>
                <li className='links'><a href="desserts.html" >Postres</a></li>
                <li className='links'><a href="cakes.html">Tortas</a></li>
                <li className='links'><a href="cookies.html" >Galletas</a></li>
                <li className='cart'><a href="../shoppingCart.html"><img src={shopping_cart} alt="" /></a></li>
            </ul>
            <label id="icon">
                <i className='fa-solid fa-bars'></i>
            </label>
        </nav>
    );
}



export default Navbar;