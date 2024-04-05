import logo from '../assets/logo.jpg'3
import 

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button>Cart (0)</button>
            </nav>
        </header>
    )
}

export default Header