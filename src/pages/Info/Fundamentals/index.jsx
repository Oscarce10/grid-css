import Snippet from "../../../components/Snippet";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import "../../base.scss"
import {useState, useEffect} from "react"
import 'highlight.js/styles/vs2015.css'

export default function Fundamentals() {
    const [code, setCode] = useState([])
    useEffect(() => {
        setCode(
            {
            }
        )
    }, []);

    return (
        <div className={"container"}>
            <Header title={"Grid fundamentals"}/>
            <div className={"text"}>
                La idea es poder generar una especie de cuadrícula con <b>filas</b> y <b>columnas</b>
                indicadas en las reglas de estilos por medio de <code>grid&#8209;template&#8209;columns</code> y <code>grid&#8209;template&#8209;rows</code>.
                <br />Para ello debe iniciarse siempre con <code>display:grid;</code> <br />
                    También podemos usar <code>gap</code> para denotar los espacios que existirán entre cada ítem de la cuadrilla.
            </div>
            <div id="content">
                <div className="ex-1">
                    <Snippet title="grid-css"
                             src="https://codepen.io/oscarce10/embed/mdWEQZL?height=265&theme-id=dark&default-tab=css,result"/>
                </div>
                <hr/>
                <div className="ex-2">
                    <Snippet title="Fundamentals - 2"
                             src="https://codepen.io/oscarce10/embed/OJpXrpq?height=265&theme-id=dark&default-tab=css,result"/>
                </div>
                <hr/>
                <div className="ex-3">
                    <Snippet title="Fundamentals - 3"
                             src="https://codepen.io/oscarce10/embed/ZEeOVyp?height=265&theme-id=dark&default-tab=html,result"/>
                </div>
            </div>
            <hr/>
            <Footer next={"/info/dev-tools"}/>
        </div>
    )
}
