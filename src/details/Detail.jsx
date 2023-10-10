import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";


const Detail = () => {

    const [event, setEvent] = useState({})


const {id} = useParams()
const events = useLoaderData();

useEffect(() => {

const findCard = events.find(event=>event.id === parseInt(id))

setEvent(findCard)

}, [id, events])


    return (
        <div>
            <DetailCard event={event} ></DetailCard>
        </div>
    );
};

export default Detail;