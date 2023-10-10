import { Link } from "react-router-dom";


const EventCard = ({ event }) => {

    const { name, image, price, short_description,id } = event

    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="h-60 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <p className="text-xl font-medium my-2">{price}</p>
                    <p className="text-xl font-normal mb-2">{short_description}</p>
                    <div className="">
                    <Link to={`/detail/${id}`}>
                    <button className="py-3 rounded-md text-lg w-full bg-pink-400 text-white mt-3">Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;