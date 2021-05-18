import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Snippet from "../../../components/Snippet";

export default function SizingTracks() {
    return (
        <div className={"container"}>
            <Header title={"Sizing Tracks"}/>

            <p className="text">
                <b>Unidad de medida <code>fr</code></b>.&nbsp;
                Corresponde a una medida de espacio libre en la cual como su nombre lo indica, asigna a un item el
                tamaño libre que resta del grid.
                En este caso, lo restante corresponde al espacio que resta hasta llegar al borde.
            </p>

            <div id="content">
                <div className="ex-1">
                    <Snippet title="Sizing Tracks - 1"
                             src="https://codepen.io/oscarce10/embed/JjWRrEm?height=265&theme-id=dark&default-tab=css,result"/>
                </div>
                <hr/>
                <div className="ex-2">
                    <Snippet title="Sizing Tracks - 2"
                             src="https://codepen.io/oscarce10/embed/gOmwGRb?height=265&theme-id=dark&default-tab=css,result"/>
                </div>
                <hr/>
                <div className="ex-3">
                    <Snippet title="sizing-tracks - 3"
                             src="https://codepen.io/oscarce10/embed/dyvpVRL?height=265&theme-id=dark&default-tab=css,result"/>
                </div>
            </div>
            <hr/>
            <p className="text"><a
                href="https://www.rawkblog.com/2018/03/css-grid-understanding-grid-gap-and-fr-vs-auto-units/" target="_blank" rel="noreferrer">
                <code>fr</code>&nbsp;
                vs.&nbsp;
                <code>auto</code> units</a></p>
            <p className="text"><code>Auto</code> asigna el valor máximo de una columna o fila y lo asigna as las
                restantes de su fila o columna dependiendo el caso <br/>
            </p>
            <div className="ex-4">
                <Snippet title="sizing-tracks - 4"
                         src="https://codepen.io/oscarce10/embed/yLMazPz?height=265&theme-id=dark&default-tab=css,result"/>
            </div>
            <hr/>
            <Footer  prev={"/info/auto-flow"} next={"/info/repeat-function"}/>
        </div>
    )
}