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

            {/* <div className="">
                <div>
                    <p className="text-2xl text-center mt-12">Our Best Team </p>
                    <br />
                    <p className="text-pink-400 font-bold text-3xl  text-center">Our Team of Professionals</p>
                </div>

                <div>
                    <img src="" alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2></h2>
                    <p></p>
                </div>

            </div> */}

            <div className="w-full h-80 mt-10" style={{ backgroundImage: 'url(https://i.ibb.co/yFSrhkn/thumbnail.jpg)' }}>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;