import { Link } from "react-router-dom"
import "./index.scss"
export default function Footer({prev, next}) {
    return (
        <div className="links">
            <p className="link link1"> <Link to="/">Inicio</Link> </p>
            {prev && <p className={"link link2"}> <Link to={prev}>Anterior ⏪</Link> </p>}
            {next && <p className={"link link3"}> <Link to={next}>Siguiente ⏩</Link> </p>}
            <p className={"hide"}> <Link to="/">Ir al ejemplo</Link> </p>
        </div>
    )
}