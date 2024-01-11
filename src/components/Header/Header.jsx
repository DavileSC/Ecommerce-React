import logo from '@/assets/images/logo.png'

export default function Header() {

    return (
        <>
            <header>
                <div className="wrap d-flex ">
                    <div>
                        <a href="../index.html"><img src={logo} alt="Logo" width="100%" /></a>
                    </div>
                    <div id="buscador">
                        <div className="input-grp">
                            <input type="search" id="buscador" placeholder="¿Qué necesitas?...." />
                        </div>
                        <div style={{display: "flex" ,gap: "50px"}}>
                            <button className="button_buscador btn btn-success" type="submit">Buscar</button>
                            <div style={{display: "flex"}} id="carrito">
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}