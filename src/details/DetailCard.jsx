import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailCard = ({ event }) => {
    const { name, image, price, description, discount } = event


    const handleClick = () =>{
        toast('Booked Successfully ');
    }

    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div>
            <img className="w-full h-full shadow-xl" src={image} alt="Album" />
            </div>
            <div className="ml-28 mt-12">
            <h2 className="card-title mb-5 text-3xl text font-bold">{name}</h2>
                    <p className="text-xl mb-6 font-normal">{description}</p>
                    <div className="card-actions ">
                        <button className="p-4 rounded-lg  bg-pink-400 text-white font-medium">Discount:{discount}</button>
                        <button onClick={handleClick} className="p-4 rounded-lg  bg-pink-400 text-white font-medium">Book Now</button>
                    </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DetailCard;