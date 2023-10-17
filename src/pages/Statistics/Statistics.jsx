import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {

    const [totalDonationAmount, setTotalDonationAmount] = useState(0);
    const [yourDonationAmount, setYourDonationAmount] = useState(0);
    const AllDonations = useLoaderData();

    useEffect(() => {
        const totalDonation = AllDonations?.reduce((previousValue, currentValue) => previousValue + currentValue.donation_amount, 0);
        setTotalDonationAmount(totalDonation);
    }, [AllDonations]);

    useEffect(() => {
        const yourTotalDonation = JSON.parse(localStorage.getItem('donations'))?.reduce((previousValue, currentValue) => previousValue + currentValue.donation_amount, 0) || 0;
        setYourDonationAmount(yourTotalDonation);
        console.log(yourTotalDonation);
    }, [])

    const yourDonationInPercentage = yourDonationAmount / (totalDonationAmount / 100);
    const totalDonationInPercentage = 100 - yourDonationInPercentage;

    return (
        <div className="h-screen flex flex-col justify-center items-center ">
            <div className="bg-[#FF444A] h-20 w-2/4 mx-auto rounded-md flex ">

                {
                    yourDonationAmount > 0 && <div className="flex justify-center items-center rounded-md text-white font-medium" style={{ backgroundColor: '#00C49F', width: `${yourDonationInPercentage}%` }}>{yourDonationInPercentage.toFixed(1)}%</div>
                }

                {
                    yourDonationInPercentage < 100 && <p className="m-auto text-white font-medium">{totalDonationInPercentage.toFixed(1)}%</p>
                }

            </div>

            <div className="flex mt-14 gap-12 font-medium">
                <div className="flex justify-center items-center gap-4">
                    <p>Your Donation</p>
                    <p className="w-16 h-3 bg-[#00C49F] rounded-sm"></p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <p>Total Donation</p>
                    <p className="w-16 h-3 bg-[#FF444A] rounded-sm"></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;