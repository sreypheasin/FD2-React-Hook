import { useEffect, useState } from "react";
import "./App.css";
import ButtonComponent from "./Components/common/buttons/ButtonComponent";
import ProductCard from "./Components/common/cards/ProductCard";
import { NavbarComponent } from "./Components/navbar/NavbarComponent";
import ProductLoadingCard from "./Components/common/cards/ProductLoadingCard";

function App() {
  const [products, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loading = [1, 2, 3, 4, 5, 6, 7, 8];

  // fetch product
  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
        setLoading(false);
      });
  }, []);

  console.log("products", products);
  return (
    <>
      <main className="flex justify-center items-center flex-col">
        <section>
          <h1 className="text-center text-2xl font-bold m-5 text-blue-900">
            This is Product section!!
          </h1>
          {isLoading && (
            <div className="grid grid-cols-4 gap-5">
              {loading.map((load, index) => (
                <ProductLoadingCard key={index} />
              ))}
            </div>
          )}
          {!isLoading && (
            <div className="grid grid-cols-4 gap-5">
              {products.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={product.title}
                    image={product.images}
                    price={product.price}
                  />
                );
              })}
            </div>
          )}
        </section>
        {/* <section>
        <h1 className="text-2xl mb-4 text-blue-600">{count}</h1>
        <ButtonComponent onClick={handleCount} title={"Count"} />
        <ButtonComponent
          onClick={() => setChange(change + 1)}
          title={"Change"}
        />
      </section> */}
        {/* <section className="mt-5">
        <form action="#">
          <label className="mr-5" htmlFor="password">
            Enter password
          </label>
          <input type="password" onChange={handlePassword} />
          <p className="text-red-700">{error.message}</p>
        </form>
      </section> */}
      </main>
    </>
  );
}

export default App;
