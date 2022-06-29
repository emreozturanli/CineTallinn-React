import { useGlobalContext } from "../context";

export const Information = () => {
  const {movie,amount,selectedSeats} = useGlobalContext();
  return (
    <div className="information">  {/* if atleast one seat selected than we type something else just type select seats*/}
        {selectedSeats ? <p>{selectedSeats} seats for <span style={{color: "tomato"}}>{movie.name}</span>  selected. Total amount is <span style={{color: "tomato"}}>${amount*selectedSeats}</span> </p> : <p>Select seats</p> }  
    </div>
  )
}
