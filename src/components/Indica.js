import obiWanOG from "../images/obiWanOG.png";
import crownOG from "../images/crownOG.png";
import reserveShake from "../images/reserveShake.png";
import Header from "./Header";
import Nav from "./Nav";

function Indica() {
  const products = [
    {
      image: crownOG,
      name: "CROWN OG",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "RIVERSIDE ONLY",
      type: "INDICA",
    },
    {
      image: obiWanOG,
      name: "OBI WAN OG",
      price: [
        " 1G @ $15",
        " 2G @ $25",
        " 3G @ $35",
        " 4G @ $45",
        " 5G @ $55",
        " 8G @ $60",
        " 10G @ $70",
        " 14G @ $110",
        " 28G @ $200",
      ],
      location: "ONTARIO ONLY",
      type: "INDICA",
    },
    {
      image: reserveShake,
      name: "PRIVATE RESERVE SHAKE",
      price: [" 5G @ $25", " 10G @ $50"],
      location: "RANCHO/ONTARIO ONLY",
      type: "INDICA",
    },
  ];
  return (
    <>
      <header>
        <Header />
        <Nav />
      </header>
      <main className="container mx-auto relative ...">
        <div className="text-md text-left mt-10 mb-10 font-medium text-slate-400 w-1/6">
          <a href="/">Home</a>
          <a className="pl-1" href="/flower">
            / Flowers
          </a>
          <p className="inline pl-1">/ Indica</p>
        </div>
        <h1 className="text-2xl text-left mt-10 mb-10 font-bold text-slate-700 border-b-8 border-green-600 w-1/6">
          INDICA
        </h1>
        <p className="mt-10 font-medium px-2 py-2 text-slate-900 rounded-lg">
          Showing all {products.length} results
        </p>
        <div className="flex flex-wrap gap-9 mt-6 justify-start">
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
    </>
  );
}

export default Indica;
