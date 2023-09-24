import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
  const [showCard, setShowCard] = useState([]);

  const { id } = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards.find((card) => card.id === id);
    setShowCard(findCard);
    console.log(findCard);
  }, [id, cards]);

  return (
    <div className="flex justify-center items-center h-[60vh]  ">
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center  " >
        <img className="w-[30vw] mt-10 " src={showCard.image}  />
        <button className="btn"> Donate ${showCard.price}</button>
        <p className="">{showCard.description}</p>
      </div>
    </div>
  );
};

export default Card;
