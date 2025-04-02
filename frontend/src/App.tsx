import {Route, Router} from "@solidjs/router";
import Home from "./pages/Home.tsx";

const App = () => {
    return  (
        <Router>
            <Route path="/" component={Home} />
        </Router>
    )
}

export default App