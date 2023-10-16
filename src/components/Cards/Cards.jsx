import Card from "../Card/Card";


const Cards = ({cards}) => {
    return (
        <div className="grid grid-cols-4 gap-5 container mx-auto py-20">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;