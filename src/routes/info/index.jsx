import {Switch, Route} from "react-router-dom";
import Fundamentals from "../../pages/Info/Fundamentals";
import DevTools from "../../pages/Info/Dev-tools";
import AutoFlow from "../../pages/Info/Auto-flow";
import SizingTracks from "../../pages/Info/Sizing-tracks";
import RepeatFunction from "../../pages/Info/Repeat-function";
import Span from "../../pages/Info/Span";
import Error from "../../pages/Error";
export default function InfoRoutes() {
    return (
        <Switch>
            <Route exact path="/info/fundamentals" component={Fundamentals}/>
            <Route exact path="/info/dev-tools" component={DevTools}/>
            <Route exact path="/info/auto-flow" component={AutoFlow}/>
            <Route exact path="/info/sizing-tracks" component={SizingTracks}/>
            <Route exact path="/info/repeat-function" component={RepeatFunction}/>
            <Route exact path="/info/span" component={Span}/>
            <Route path="*">
                <Error />
            </Route>
        </Switch>
    )
}