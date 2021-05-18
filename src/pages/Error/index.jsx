import {Link} from "react-router-dom"
import "./index.scss"
export default function Error() {
    return (
        <div className="err404">
            <div>
                <div className="not-found">OOPS!</div>
                <div className="not-found">404 - PAGE NOT FOUND</div>
                <div className="return"> <Link to={"/"}>BACK TO HOME</Link></div>
            </div>
        </div>
    )
}