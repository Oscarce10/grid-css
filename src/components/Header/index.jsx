import {Link} from "react-router-dom";
import "./index.scss"
import {useEffect} from "react";
export default function Header({title}) {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    }, [title]);
    return (
        <div className="inicio">
            <h2>{title}</h2>
            <div id={"home-icon"} style={{float: "right", clear: "right"}}>
                <Link to={"/"}><i className="fas fa-home fa-3x"></i> </Link>
            </div>
            <hr className={"header-hr"}/>
        </div>


    )
}