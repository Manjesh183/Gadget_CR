import React from 'react'
import { ProductCard } from './components/ProductCard';
import "./Home.css";
import "./components/ProductCard.css";
import { useTitle } from './hooks/useTitle';


export const Home = () => {
  useTitle("Home");
  const Products = [
    {
      id: 1,
      name: "Laptop",
      image: "/Images/lap.jpeg",
      price:10
    },
    {
      id: 2,
      name: "Smartphone",
      image: "/Images/p3.jpeg",
      price:20
    },
    {
      id: 3,
      name: "Tablet",
      image: "/Images/tab.jpeg",
      price:30
    },
    {
      id: 4,
      name: "Smartwatch",
      image: "/Images/watch.jpeg",
      price:40
    }
  ];
  return (
    <div>
      <section className="myProd">
      {Products.map(product => (
      <ProductCard  key={product.id} product={product} />
      ))}
      </section>
    </div>
  )
}
