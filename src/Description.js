import "./App.css";
import arrow from "./images/arrow.png"
function Description(){
    return(
        <section className="description_main">
            <div className="center">
            <h2>Lorem ipsum</h2>
                <div className="description">
                    <span>
                    Lorem consectetur adipiscing elit. Donec vel urna lacus. Sed nunc lacus, luctus vitae pellentesque quis, suscipit eu metus. Morbi mattis nunc a magna efficitur efficitur.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna lacus. Sed nunc lacus, luctus vitae pellentesque quis, suscipit eu metus. Morbi mattis nunc a magna efficitur efficitur.
                    </span>
                </div>
            <img src={arrow} alt=""/>
            </div>
        </section>
    )
}

export default Description