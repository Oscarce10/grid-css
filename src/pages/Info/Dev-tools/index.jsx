import Header from "../../../components/Header";
import {useState, useEffect} from "react"
import 'highlight.js/styles/vs2015.css'
import HTML from "../../../components/HTML";
import CSS from "../../../components/CSS";
import Footer from "../../../components/Footer";
import "./index.scss"

export default function DevTools() {
    const [code, setCode] = useState([])
    useEffect(() => {
        setCode(
            {
                html_ex1: document.getElementById("html_ex1"),
                css_ex1: document.getElementById("css_ex1").innerHTML,
            }
        )
    }, []);
    return (
        <div className={"container"}>
            <Header title={"Dev Tools"}/>
            <div className="text">
                Si abrimos la consola de <i>developer tools</i> usando el navegador de <a href="https://www.mozilla.org/es-ES/firefox/developer/" target="_blank" rel="noreferrer">
                Firefox Browser Developer Edition</a> e inspeccionamos el elemento a crear,
                podemos encontrar unos números denominados <b>tracks</b> que marcan el comienzo y el fin de cada <b>fila</b> y
                <b> columna</b>.
                <div className="img">
                    <img src="/images/tracks.png" alt="tracks css grid" />
                </div>
                <p className="text">
                    Adicionalmente, se crean varias líneas unas <b>continuas</b> y otras <b>punteadas</b>
                </p>
                <div className="text">
                    <ul>
                        <li>
                            La línea <b>cortada vertical</b> la entendemos como un <a href="https://www.smashingmagazine.com/2020/01/understanding-css-grid-lines/" target="_blank" rel="noreferrer">explicit
                            grid</a> que son definidas con las propiedades de&nbsp;
                            <code>grid&#8209;template&#8209;columns</code> y&nbsp;
                            <code>grid&#8209;template&#8209;rows</code>
                        </li>
                        <li>
                            Las líneas en <b>diagonal</b> se entienden como el <b>gap</b>
                        </li>
                        <li>
                            La línea punteada horizontal se entiende como <b>implicit grid</b> ya que no las declaramos propiamente
                            y son generadas por el browser
                        </li>
                        <li>
                            La línea <b>vertical sólida</b> se entiende como el comienzo y el final del grid.
                        </li>
                    </ul>
                    <div className="img">
                        <img src="/images/track-lines.png" alt="track lines" height="386" />
                    </div>

                    <p className="text">
                        Podemos definir el tamaño de las columnas o filas que se agregan de manera implícita por medio de <code>grid&#8209;auto&#8209;rows</code>&nbsp;
                        ó&nbsp;<code>grid&#8209;auto&#8209;columns</code>
                    </p>
                </div>
            </div>
            <div id="content">
                <div className="ex-1">
                    <div className="row">
                        <div className="col-md-4">
                            {code["html_ex1"] && <HTML code={code["html_ex1"]}/>}
                        </div>

                        <div className="col-md-4">
                            {code["css_ex1"] && <CSS code={code["css_ex1"]}/>}
                        </div>

                        <div className="col-md-4">
                            <h3>Resultado</h3>
                            <div id="html_ex1">
                                <div className="container-grid">
                                    <div className="item">1</div>
                                    <div className="item">2</div>
                                    <div className="item">3</div>
                                    <div className="item">4</div>
                                    <div className="item">5</div>
                                    <div className="item">6</div>
                                    <div className="item">7</div>
                                    <div className="item">8</div>
                                </div>
                            </div>
                        </div>
                        <style id="css_ex1" dangerouslySetInnerHTML={{
                            __html:
                            `.container-grid {
                            display: grid;
                            grid-template-columns: 150px auto;
                            gap: 20px;
                            grid-template-rows: 100px 175px;
                            grid-auto-rows: 50px 100px;
                        }

                            .item {
                            /* We center the contents of these 
                            items. You can also do this with 
                            flexbox too! */
                            display: grid;
                            justify-content: center;
                            align-items: center;
                            text-align: center;
                            background-color: #123456;
                            border: solid black 1px;
                            font-size: 24px;
                            font-weight: bold;
                            color: white;
                        }`
                        }}/>
                    </div>
                </div>
            </div>
            <hr/>
            <Footer next={"/info/auto-flow"} prev={"/info/fundamentals"}/>
        </div>
    )
}