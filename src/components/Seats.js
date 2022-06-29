import { useGlobalContext } from "../context"
import { Information } from "./Information"

export const Seats = () => {
  const { seatClickHandle} = useGlobalContext();
  return (
    <>
    <div className="seat-container" onClick={(e)=> seatClickHandle(e)}>
      <div className="row">
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
    </div>
    <Information/>
    </>
  )
}
