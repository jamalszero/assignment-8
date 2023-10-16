import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const CardDetails = () => {
    const [card, setCard] = useState({});

    const {id} = useParams();
    const cards = useLoaderData();
    console.log(cards);

    useEffect(() => {
        setCard(cards?.find(item => item.id == id))
    }, [id])

    return (
        <div>
            {
                card.title
            }
        </div>
    );
};

export default CardDetails;