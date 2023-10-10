import { useLoaderData } from "react-router-dom";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import EventCard from "./eventCard/EventCard";

const Home = () => {

    const event = useLoaderData();
    console.log(event)

    return (
        <div>
            <div className="max-w-[1300px] mx-auto my-5">
                <Banner></Banner>
            </div>

            <p className="text-3xl text-center text-pink-400 font-bold mt-24">Our Services</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
                {
                    event.map(events => <EventCard key={events.id} event={events}></EventCard>)
                }
            </div>

            <div className="">
                     <p className="text-3xl text-center mt-10">What We <span className="text-pink-400 font-bold ">Provide</span> </p>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;