import './Product.css';


function Product({ title }) {
    return (<>
        <h2>{title}</h2>
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

            <div className="input-box left-justified">
                <input id="quantity" name="quantity" className="input-number" type="number" placeholder="Quantity" />
            </div>

            <div className="input-box center-box">
                <button type="submit">Create</button>
            </div>
        </form>
    </>);
}


export default Product;
