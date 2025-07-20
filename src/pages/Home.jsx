import { useEffect, useState } from "react";
import { getProducts } from "../data/api/getProducts";
import ProductCard from "../components/ProductCard";
import Jumbotron from "../components/Jumbotron";
import Modal from "../components/Modal";
import NewsletterPopup from "../components/NewsletterPopup";
import Categories from "../components/Categories";
import FreeDelivery from "../components/FreeDelivery";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <Jumbotron products={products} />
      <Categories />
      <FreeDelivery />
      <h1 className="text-4xl font-bold text-center mb-4">Featured products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onMoreInfo={setModalProduct}
          />
        ))}
      </div>
      <NewsletterPopup />
      <Modal product={modalProduct} onClose={() => setModalProduct(null)} />
    </div>
  );
};

export default Home;
