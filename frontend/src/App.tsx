import {Route, Router} from "@solidjs/router";
import Home from "./pages/Home.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import LeoPortfolio from "./pages/LeoPortfolio.tsx";
import NathanPortfolio from "./pages/NathanPortfolio.tsx";

const App = () => {
    return  (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/portfolios" component={Portfolio} />
            <Route path="/portfolios/leo" component={LeoPortfolio} />
            <Route path="/portfolios/nathan" component={NathanPortfolio} />
        </Router>
    )
}

export default App