import "./App.css"

function Home() {
    return(
        <section className="home">
            <div className="center">
                <div className="form">
                    <div className="container_form">
                        <h3>
                            Prencha o formulário e incie a sua caminhada 
                            para virar um webmaster
                        </h3>
                        <form>
                            <p>Nome*</p>
                            <input type="text" id="name" name="nome"/>
                            <p>E-mail*</p>
                            <input type="text" id="email" name="email" />
                            <p>Telefone*</p>
                            <input type="text" id="telefone" name="telefone"/>
                            <p>* Campos Obrigatórios</p>
                            <input type="submit" value="ENVIAR" />

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home