import "./App.css";
import logo from "./images/logo.png"
function Header(){
    return (
        <header>
            <div className="center">
                <img src={logo} alt="Logo Danki"/>
            </div>
        </header>
    )
}

export default Header