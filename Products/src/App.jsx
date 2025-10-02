import './App.css';

import TopIsland from './components/TopIsland/TopIsland';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (<>
        <TopIsland />
        <Header />
        <main>
            <h2>New Product</h2>
            <form method="POST" action="">
                <div className="input-box">
                    <input id="brand" name="brand" className="input-text" type="text" placeholder="Brand" />
                </div>

                <div className="input-box">
                    <input id="product-name" name="product-name" className="input-text" type="text" placeholder="Name" />
                </div>

                <div className="input-box">
                    <input id="barcode" name="barcode" className="input-text" type="text" placeholder="Barcode" />
                </div>

                <div className="input-box">
                    <input id="quantity" name="quantity" className="input-number" type="number" placeholder="Quantity" />
                </div>

                <div className="input-box center-box">
                    <button type="submit">Create</button>
                </div>
            </form>
        </main>
        <Footer />
    </>);
}

export default App
