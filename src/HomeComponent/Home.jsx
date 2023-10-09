import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

const Home = () => {

const event = useLoaderData();
console.log(event)

    return (
        <div>
            <div className="max-w-[1300px] mx-auto my-5">
            <Banner></Banner>
        </div>

        <p className="text-3xl text-center text-pink-400 font-bold">Our Services</p>


        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        <Footer></Footer>
        </div>
    );
};

export default Home;