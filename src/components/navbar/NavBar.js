import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = (props) => {
    return (
    <header className='navbar'>
        <ul>
            <li><a href="">inicio</a></li>
            <li><a href="">categorias</a></li>
            <li><a href="">contacto</a></li>
        </ul>
        <CartWidget cantidad="5"/>
    </header>
    )
}

export default NavBar