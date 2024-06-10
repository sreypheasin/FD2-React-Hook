import { useEffect, useState } from "react";
import "./App.css";
import ButtonComponent from "./Components/common/buttons/ButtonComponent";
import ProductCard from "./Components/common/cards/ProductCard";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(0);
  const [password, setPassword] = useState("");
  const [products, setProduct] = useState([]);
  const [error, setError] = useState({
    name: "",
    message: ""
  });

  // handle count update
  const handleCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  // UseEffect
  // useEffect(() => {
  //   console.log("UseEffect Called!!");
  //   if (password.length < 5 && password.length > 0) {
  //     setError({
  //       name: "Password Error",
  //       message: "Password must be greater than 5 characters"
  //     });
  //   } else {
  //     setError({
  //       name: "",
  //       message: ""
  //     });
  //   }
  // }, [password]);

  // handle change on input password field
  const handlePassword = (e) => {
    // console.log("Events", e.target.value);
    setPassword(e.target.value);
  };
  // console.log(count);

  // fetch product
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      });
  }, []);

  console.log("products", products);
  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <section>
        <h1>This is Product section!!</h1>
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
  );
}

export default App;
