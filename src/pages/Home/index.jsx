import {Link} from "react-router-dom";
import './index.scss'
export default function Home() {
    return (
        <div id="home" className={"container"}>
                <h1>Grid CSS</h1>
                <div className="text"> <span>Tomado del curso gratuito en inglés </span>
                    <a href="https://cssgrid.io/" target="_blank" rel="noreferrer">CSS Grid</a>
                </div>
                <hr />

            <div className="text">Ir a 💩:
                <ul id="lista">
                    <li>
                        <Link to={"/info/fundamentals"}>Grid fundamentals</Link>
                    </li>
                    <li>
                        <Link to={"/info/dev-tools"}>Dev Tools</Link>
                    </li>
                    <li>
                        <Link to={"/info/auto-flow"}>Grid Auto flow - Columns</Link>
                    </li>

                    <li>
                        <Link to={"/info/sizing-tracks"}>Sizing Tracks</Link>
                    </li>

                    <li>
                        <Link to={"/info/repeat-function"}>Repeat Function</Link>
                    </li>

                    <li>
                        <Link to={"/info/span"}>Span</Link>
                    </li>


                </ul>
            </div>
        </div>
    )
}