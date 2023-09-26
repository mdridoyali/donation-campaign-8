# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DonateCards = ({ filterCards }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    // Map over filterCards and set the item for each card
    setItem(filterCards);
  }, [filterCards]);

  return (
    <div className="cursor-pointer">
      {item.map((card) => (
        <Link to={`/card/${card.id}`} key={card.id}>
          <div style={{ backgroundColor: card.card_bg }} className="rounded-lg">
            <img className="w-full" src={card.image} alt={card.title} />
            <div className="p-4">
              <p
                style={{
                  backgroundColor: card.category_bg,
                  color: card.text_color,
                }}
                className="w-min px-3 rounded font-semibold"
              >
                {card.category}
              </p>
              <h2 style={{ color: card.text_color }} className="font-bold text-xl">
                {card.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DonateCards;




<DonateCards filterCards={filterCards} />









