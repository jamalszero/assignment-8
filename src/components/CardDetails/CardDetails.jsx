import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from 'sweetalert';

const CardDetails = () => {
    const [card, setCard] = useState({});
    const { id } = useParams();
    const cards = useLoaderData();

    useEffect(() => {
        setCard(cards?.find(item => item.id == id));
    }, [cards, id]);

    const addToLocalStorage = (card) => {
        const donationsArray = [];
        const storedData = JSON.parse(localStorage.getItem('donations'));
        if (!storedData) {
            donationsArray.push(card);
            localStorage.setItem('donations', JSON.stringify(donationsArray))
            swal("Added!", "", "success");
        } else {

            const isExist = storedData.find(item => item.id == card.id);
            if (!isExist) {
                donationsArray.push(...storedData, card);
                localStorage.setItem('donations', JSON.stringify(donationsArray))
                swal("Added!", "", "success");
            } else {
                swal("Duplicate Not Allowed!", "", "error");
            }
        }
    }

    return (
        <div className="py-24">
            <div className="relative">
                <img className="w-screen" src={card.image} alt="" />
                <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    backgroundColor: 'rgba(13, 1, 7, 0.72)',
                    width: '100%',
                    margin: '0 auto',
                    padding: '20px 0 20px 0'
                }}>
                    <button onClick={() => addToLocalStorage(card)} style={{ backgroundColor: card.donate_and_view_details_btn_bg_color, padding: '8px 12px 8px 12px', color: 'white', marginLeft: '15px', borderRadius: '5px' }}>Donate ${card.donation_amount}</button>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-2xl font-bold mb-4">{card.title}</h1>
                <p>{card.description}</p>
            </div>
        </div>
    );
};

export default CardDetails;