import './Header.css'
import Navbar from '../Navbar/Navbar'

function Header() {
    return (
        <header className='content header'>
            <h1 className='title_nav'> <a href="./index.html"></a>Cocoa</h1>
            <div className='hamburger'>
                <div className='_layer -top'></div>
                <div className='_layer -mid'></div>
                <div className='_layer -bottom'></div>
            </div>
            <Navbar />

        </header>
    );
}

export default Header;