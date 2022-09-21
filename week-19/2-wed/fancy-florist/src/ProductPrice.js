export default function ProductPrice(props) {
    return (
        <div class="product-details">
            <div class="header">
                <h2>{props.name}</h2>
            </div>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <img src={props.image}></img>
            <p class="buy-btn">Buy Now</p>
        </div>
    );
};