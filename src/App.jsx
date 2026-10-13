import './App.css';
import ProductCard from './ProductCard';

function App() {
  const products = [
    {
      id: 1,
      title: 'Трансформер',
      price: 50000,
      imageUrl: ''
    },
    {
      id: 2,
      title: 'Смартформер',
      price: 85000,
      imageUrl: ''
    },
    {
      id: 3,
      title: 'Деревня-Формер',
      price: 5000,
      imageUrl: ''
    }
  ];

  return (
      <div className="app-container">
        <h1>Магазин техники</h1>
        <div className="products-grid">
          {products.map((product) => (
              <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
              />
          ))}
        </div>
      </div>
  );
}

export default App;