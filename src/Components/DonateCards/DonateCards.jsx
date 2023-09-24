import { Link } from "react-router-dom";

const DonateCards = ({ cards }) => {
  const { id, image, title, category, category_bg, card_bg, text_color } =
    cards || {};

  const handleClick = (id) => {

  };

  return (
    <div className="cursor-pointer " onClick={() => handleClick(id)}>
     <Link to={`/card/${id}`} >
     <div  >
        <img className="" src={image} alt={title} />
        <p >
          {category}
        </p>
        <h2 >{title}</h2>
      </div>
     </Link>
    </div>
  );
};

export default DonateCards;
