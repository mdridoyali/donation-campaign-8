import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cards } from "../Banner/Banner";

const DonateCards = ({ filterCards }) => {
  // const { id, image, title, category, category_bg, card_bg, text_color } =
  //   cards || {};
    // const [item , setItem] = useState([])

  // const card = useContext(Cards)

// console.log(filterCards)
console.log('filterCard' ,filterCards, typeof(filterCards), )

// const [item, setItem] = useState([]);

// useEffect(() => {
//   setItem(filterCards);
// }, [filterCards]);


// useEffect( ()=> {
//   const result = filterCards.map(card => setCards(card) )
// } , [])

  return (

    <div className="cursor-pointer " >

    <div className="w-11/12 mx-auto my-16 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {
        filterCards.map((cards, idx) => 
        <div key={idx} >
        <img className="w-full" src={cards.image}  />
          <div className="p-4">
            <p style={{ backgroundColor: cards.category_bg, color: cards.text_color }} className="w-min px-3 rounded font-semibold">
              {cards.category}
            </p>
            <h2 style={{ color: cards.text_color }} className="font-bold text-xl">{cards.title}</h2>
          </div>

        </div>)
      }
    </div>


      {/* <Link to={`/card/${id}`}>
        <div style={{ backgroundColor: card_bg }} className="rounded-lg ">
          <img className="w-full" src={image} alt={title} />
          <div className="p-4">
            <p style={{ backgroundColor: category_bg, color: text_color }} className="w-min px-3 rounded font-semibold">
              {category}
            </p>
            <h2 style={{ color: text_color }} className="font-bold text-xl">{title}</h2>
          </div>
        </div>
      </Link> */}
    </div>
  );
};

export default DonateCards;
