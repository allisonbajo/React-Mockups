import './App.css';

import TopIsland from './components/TopIsland/TopIsland';
import Header from './components/Header/Header';
import Product from './components/Product';
import Footer from './components/Footer/Footer';

function App() {
    return (<>
        <TopIsland />
        <Header />
        <main>
            <Product title="New Product" />
        </main>
    </>);
}

export default App
