import "./App.css";
import icon from "./images/icon.png";
function Learn() {
    return(
        <section className="learn_main">
            <div className="center">
                <div className="learn_text">
                    <h1>Aprenda com quem está no mercado!</h1>
                </div>
                <div className="learn_boxes">
                    <div className="box_single">
                        <img src={icon} alt="" srcset="" />
                        <div className="box_text">
                            <h2>Loren ipsum</h2>
                            <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Voluptate nam,
                            veniam sapiente non aliquid repellat in ut. Neque, 
                            sapiente.
                            </span>
                        </div>
                    </div>
                    <div className="box_single">
                        <img src={icon} alt="" srcset="" />
                        <div className="box_text">
                            <h2>Loren ipsum</h2>
                            <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Voluptate nam,
                            veniam sapiente non aliquid repellat in ut. Neque, 
                            sapiente.
                            </span>
                        </div>
                    </div>
                    <div className="box_single">
                        <img src={icon} alt="" srcset="" />
                        <div className="box_text">
                            <h2>Loren ipsum</h2>
                            <span>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Voluptate nam,
                            veniam sapiente non aliquid repellat in ut. Neque, 
                            sapiente.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learn