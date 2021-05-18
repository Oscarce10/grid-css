import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Snippet from "../../../components/Snippet";

export default function RepeatFunction() {
    return (
        <div className={"container"}>
            <Header title={"Repeat function"}/>
            <p className="text">Un <code>repeat()</code> sirve para indicar que elementos vamos a colocar y el tamaño
                que tendrán
                al ocupar una columna o una fila dependiendo del caso. Ó lo que sería, reemplazar algo como
                esto <code>grid&#8209;template&#8209;columns:&nbsp;100px&nbsp;100px&nbsp;100px&nbsp;100px</code>.
                Por esto <code>grid&#8209;template&#8209;columns:&nbsp;repeat(5,&nbsp;100px);</code>
            </p>

            <div id="content">
                <div className="ex-1">
                    <Snippet title="repeat-function - 1"
                             src="https://codepen.io/oscarce10/embed/YzZGrLK?height=265&theme-id=dark&default-tab=html,result"/>
                </div>

                <hr />

                    <p className="text">En este caso, vemos que todos los elementos de la columna 1 ocupan un espacio de
                        100px
                        en la segunda columna se reparten 2 elementos. Un elemento ocupa <code>1fr</code> mientras que
                        el otro ocupa un
                        tamaño
                        automático y esto se repite una vez mas. En la tercera columna, los elementos ocupan 200px y en
                        la ultima
                        columna
                        un elemento ocupa <code>5fr</code> y esto se repite dos veces.
                    </p>

                <div className="ex-2">
                    <Snippet title="repeat-function - 2"
                             src="https://codepen.io/oscarce10/embed/rNyMGKK?height=265&theme-id=dark&default-tab=html,result"/>
                </div>
            </div>
            <hr/>
            <Footer  next={"./span"} prev={"./sizing-tracks"}/>
        </div>
    )
}