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

    // const 
    console.log('ok')
  }

  useEffect(() => {
    const findCard = cards.find((card) => card.id === id);
    setShowCard(findCard);

  }, [id, cards]);

  return (
    <div className="flex justify-center items-center h-[60vh]  ">
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center space-y-2 " >
        <img className="w-[30vw] mt-10 rounded-xl " src={showCard.image}  />
        <button onClick={handleAddToDonate} style={{backgroundColor: showCard.text_color}} className="px-2 py-1 text-lg font-semibold text-white rounded-md "> Donate ${showCard.price}</button>
        <h2 className="text-xl font-bold">{showCard.title}</h2>
        <p className="">{showCard.description}</p>
      </div>
    </div>
  );
};

export default Card;
