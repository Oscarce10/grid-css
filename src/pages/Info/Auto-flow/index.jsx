import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Snippet from "../../../components/Snippet";
import "../../base.scss"

export default function AutoFlow() {
    return (
        <div className={"container"}>
            <Header title={"Grid Auto Flow - Columns"}/>

            <p className="text">
                Podemos definir en qué orden se agregan nuevos items al grid. Si en forma de <code>column</code> o en
                forma de <code>row</code>.&nbsp;
                Por defecto estos son agregados en forma de <code>row</code>.&nbsp;
                Así que podemos cambiar esto usando <code>grid-auto-flow</code>
            </p>
            <div id="content">
                <div className="ex-1">
                    <Snippet title="Auto - flow - 1"
                             src="https://codepen.io/oscarce10/embed/VwpKMwq?height=265&theme-id=dark&default-tab=html,result"/>
                </div>
                <hr/>
                <p className="text">
                    Incluso se les puede asignar un valor por defecto a los items generados por el
                    navegador con <code>grid-auto-columns</code>
                </p>

                <div className="ex-2">
                    <Snippet title="Auto - flow - 2"
                             src="https://codepen.io/oscarce10/embed/VwpKMYq?height=265&theme-id=dark&default-tab=css,result"/>
                </div>
                <hr/>
                <Footer  prev={"/info/dev-tools"} next={"/info/sizing-tracks"}/>
            </div>
        </div>
            )
            }