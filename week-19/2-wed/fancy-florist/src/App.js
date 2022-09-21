import logo from './logo.svg';
import './App.css';
import './ProductDisplay.css';
import ProductPrice from './ProductPrice';

function App() {
  return (
    <div>
      <div class="header">
        <h1>Fancy Florist</h1>
      </div>
      <div class="container">
        <ProductPrice
          name="Congratulations Bouquet"
          description="The perfect bouquet for a celebration such as a birthday or graduation."
          price={70}
          image="https://www.petalrepublic.com/wp-content/uploads/2022/04/Are-Flowers-an-Appropriate-Way-to-Say-Congratulations-1024x684.jpeg"
          sale="true" />
        <ProductPrice
          name="Apology Bouquet"
          description="You need something extra when you know you messed up."
          price={150}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKHwS77oOgSmVaoqBQLUW759_QsUaesn1Ig&usqp=CAU"
          sale="false" />
        <ProductPrice
          name="Wedding Bouquet"
          description="Beautiful collection of flowers to turn heads on your special day!"
          price={200}
          image="https://www.thespruce.com/thmb/XIkJOGOOXM5FBHLSQrrnn13kwME=/3861x2574/filters:fill(auto,1)/the-bride-s-beautifully-decorated-bouquet-of-white-roses-and-green-leaves-lies-on-a-brown-wooden-bench--wedding-theme--1153011819-7eb01a5a6fb74d2f81665b4f56371334.jpg"
          sale="false" />
      </div>
    </div>
  );
}

export default App;
