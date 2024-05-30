import "./App.css";

import Home from "./pages/home";
import { LocationProvider } from "./contexts/LocationsContext";

function App() {
    return (
        <LocationProvider>
            <div className="App">
                <Home />
            </div>
        </LocationProvider>
    );
}

export default App;
