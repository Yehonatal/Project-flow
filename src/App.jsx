import "./App.css";
import Footer from "./component/Footer";
import Cards from "./component/Cards";

function App() {
    return (
        <div className="container">
            <Cards />
            <div>
                <p>In production ...</p>
                <h1>FLO</h1>
                <h1 className="stylish">STATE</h1>
            </div>
            <Footer />
        </div>
    );
}

export default App;
