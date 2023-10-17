import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    const handleSeeAll = () => {

        setSeeAll(!seeAll)

    }

    useEffect(() => {

        const storedDonations = JSON.parse(localStorage.getItem('donations'));

        setDonations(storedDonations)

    }, [])

    return (
        <div className="my-16" >
            <div className="grid grid-cols-2 gap-5 py-1">
                {

                    !seeAll ? donations?.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>) : donations.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
            {
                donations?.length > 4 && seeAll === false && <button className="btn bg-green-700 text-white mx-auto block my-16" onClick={handleSeeAll}>See All</button>
            }

        </div>
    );
};

export default Donation;