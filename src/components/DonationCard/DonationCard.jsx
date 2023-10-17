import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({card}) => {
    const { id, image, title, category, card_background_color, category_background_color, text_color, donation_amount, donate_and_view_details_btn_bg_color } = card;
    return (
        <div>
            <div className="card card-side h-full rounded-md" style={{ backgroundColor: card_background_color }}>
                <figure><img className="h-full" src={image} alt="" /></figure>
                <div className="card-body items">
                    <p className="w-min p-1 rounded-md font-medium" style={{ backgroundColor: category_background_color, color: text_color }}>{category}</p>
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p style={{ color: text_color }}>${donation_amount}</p>
                    <div className="card-actions">
                        <Link to={`/details/${id}`} className="btn text-white" style={{ backgroundColor: donate_and_view_details_btn_bg_color}}>View Details
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

DonationCard.propTypes = {
    card: PropTypes.object
  };

export default DonationCard;