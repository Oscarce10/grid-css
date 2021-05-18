import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Snippet from "../../../components/Snippet";

export default function Span() {
    return (
        <div className={"container"}>
            <Header title={"Sizing tracks with Span"}/>
            <p className="text">
                Podemos usar <code>grid-column: span #</code> para combinar items especificando el número de espacios a
                usar.
            </p>
            <div className="text"><b>Antes</b></div>

            <Snippet title="Span - 1"
                     src="https://codepen.io/oscarce10/embed/OJpRxGW?height=265&theme-id=dark&default-tab=html,result"/>

            <div className="text"><b>Después</b></div>

            <Snippet title="Span - 2"
                     src="https://codepen.io/oscarce10/embed/ExWgwBM?height=265&theme-id=dark&default-tab=html,result"/>

            <p className="text">
                Como se ve, el item 9 ahora ocupa dos espacios pero desplazó todas las casillas una unidad a la derecha
            </p>

            <hr/>

            <div className="text"><b>Otro caso</b></div>

            <Snippet title="Span - 3"
                     src="https://codepen.io/oscarce10/embed/QWpKOLa?height=265&theme-id=dark&default-tab=html,result"/>

            <hr/>
            <p className="text"><b>Incluso con filas usando <code>grid-row: span #</code></b></p>

            <Snippet title="Span - 4"
                     src="https://codepen.io/oscarce10/embed/NWpRwWa?height=265&theme-id=dark&default-tab=html,result"/>

            <hr/>
            <Footer prev={"./repeat-function"}/>
        </div>

    )
}