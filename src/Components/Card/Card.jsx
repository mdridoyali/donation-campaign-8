import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const Card = () => {
  const [showCard, setShowCard] = useState([]);

  const { id } = useParams();
  const cards = useLoaderData();
  console.log(showCard)

  const handleAddToDonate=()=>{
    const addToDonate = [];
    const donateItems = JSON.parse(localStorage.getItem('donation'));
    if(!donateItems){
      addToDonate.push(showCard);
      localStorage.setItem('donation', JSON.stringify(addToDonate) )
      swal("Good job!", "You added donation!", "success");
    }else{
      const isExits = donateItems.find((showCard) => showCard.id === id);
      if(!isExits){
        addToDonate.push(...donateItems, showCard);
        localStorage.setItem('donation', JSON.stringify(addToDonate));
        swal("Good job!", "You added donation!", "success");
      }
      else{
        swal("Don't Duplicate!", "Already added this item!", "error");
      }
    }
  }

  useEffect(() => {
    const findCard = cards.find((card) => card.id === id);
    setShowCard(findCard);

  }, [id, cards]);

  return (
    <div className="">
      <div className="w-11/12 mx-auto " >
      <div className="absolute inset-0 h-[90px] right-2 md:right-[10px] lg:right-[5px] top-[405px] w-[90vw] mx-auto rounded-b-md bg-black opacity-40"></div>
        <img className="w-[90vw] h-96 mt-10 rounded-xl " src={showCard.image}  />
        <button onClick={handleAddToDonate} style={{backgroundColor: showCard.text_color}} className=" bottom-16 left-6  relative px-2 py-1 text-lg font-semibold text-white rounded-md "> Donate ${showCard.price}</button>
        <h2 className="text-xl font-bold">{showCard.title}</h2>
        <p className="mb-10">{showCard.description}</p>
      </div>
    </div>
  );
};

export default Card;
