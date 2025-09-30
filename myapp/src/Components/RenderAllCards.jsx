import Card from './Card';
//import Card from '../Card';

function RenderAllCards({cartDetails,setCartDetails,cardDetails,setCardDetails}) {
  return (
    <div className='grid grid-col-1 justify-items-center mt-10 lg:grid-cols-4 lg:gap-4'>
       {
        cardDetails.map((item,idx)=>(
            <Card key={idx} cartDetails={cartDetails} setCartDetails={setCartDetails} item={item} image={item.image} title={item.title} price={item.price} description={item.description} />
        ))
       }
    </div>
  )
}

export default RenderAllCards
