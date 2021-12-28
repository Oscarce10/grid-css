import {Switch, Route} from "react-router-dom";
import Home from '../pages/Home'
import InfoRoutes from "./info";
import Error from "../pages/Error";

export default function Routes(){
    return (
        <Switch>
            <Route path="/info" component={InfoRoutes}/>
            <Route exact path="/" component={Home}/>
            <Route path="*" component={Error}/>
        </Switch>
    )
}