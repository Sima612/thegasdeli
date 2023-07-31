import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import BannerSlider from "./BannerSlider";

function Home() {
  const products = [];

  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <BannerSlider />
      <main className="container mx-auto relative ...">
        <div>
          <h1 className="text-xl text-center mt-6 font-bold px-3 py-2 text-slate-700 border-b-8 border-amber-400 w-64 mx-auto">
            NEWEST PRODUCTS
          </h1>
        </div>
        <div className="flex flex-wrap gap-9 mt-6 justify-start w-full">
          {products.map((product) => {
            return (
              <div className="flex flex-wrap">
                <div className="w-72 m-0 font-medium text-center px-2 py-2 text-slate-900 rounded-lg">
                  <img
                    className="w-64 h-64 mx-auto"
                    src={product.image}
                    alt="pictures"
                  />

                  <p>
                    <i class="fa-solid fa-cannabis fa-lg"></i> {product.name}
                  </p>
                  <p>{product.price}</p>
                  <p>
                    <strong>[{product.location}]</strong>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
