import Snippet from "../../../components/Snippet";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import "../../base.scss"
import 'highlight.js/styles/vs2015.css'

export default function Fundamentals() {
    return (
        <div className={"container"}>
            <Header title={"Grid fundamentals"}/>
            <div className={"text"}>
                <p>
                    <b>CSS Grid Layout</b> es un sistema de diseño de dos dimensiones que llegó para solucionar los
                    problemas que habían al implementar interfaces web basadas en cuadrículas. Este diseño se basa en el
                    control de <b>filas</b> y <b>columnas</b> mediante las cuales se va dando forma a lo que se busca
                    implementar.
                </p>

                <p>
                    La primera propiedad que siempre se debe declarar en las reglas de
                    estilos <b>CSS</b> es <code>display:&nbsp;grid;</code>, la cual define al elemento que se aplica
                    como un contenedor y establece un formato de cuadrícula para sus contenidos.
                </p>

                <p>
                    Seguido a esto podemos definir las <b>filas</b> y/o <b>columnas</b>, esto es por medio de las reglas
                    de <code>grid&#8209;template&#8209;columns</code> y <code>grid&#8209;template&#8209;rows</code>
                    respectivamente.
                    Los valores de cada una de estas representan el tamaño de cada unidad que se declare separada por
                    espacios.
                </p>
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
