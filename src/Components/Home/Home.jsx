
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import DonateCards from '../DonateCards/DonateCards';

const Home = () => {
    const donateCards = useLoaderData();
    // console.log(donateCards)

    return (
        <div>
            <Banner></Banner>
         <div className="w-11/12 mx-auto my-16 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
         {/* {
                donateCards.map((cards, idx) => <DonateCards key={idx} cards={cards} ></DonateCards> )
            } */}
         </div>
        </div>
    );
};

export default Home;