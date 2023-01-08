import './CartWidget.css';
import carrito from '../cartWidget/carrito-de-compras.png'
// import '../navbar/NavBar.js'

function CartWidget(props) {
    return (
        <a href=''><img src={carrito} class='carrito' {...props.cantidad}/></a>
    );
}

export default CartWidget;