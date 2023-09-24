import { Link } from "react-router-dom";

const DonateCards = ({ cards }) => {
  const { id, image, title, category, category_bg, card_bg, text_color } =
    cards || {};

  const handleClick = (id) => {};

  return (
    <div className="cursor-pointer " onClick={() => handleClick(id)}>
      <Link to={`/card/${id}`}>
        <div style={{ backgroundColor: card_bg }} className="rounded-lg ">
          <img className="w-full" src={image} alt={title} />
          <div className="p-4">
            <p style={{ backgroundColor: category_bg, color: text_color }} className="w-min px-3 rounded font-semibold">
              {category}
            </p>
            <h2 style={{ color: text_color }} className="font-bold text-xl">{title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonateCards;
