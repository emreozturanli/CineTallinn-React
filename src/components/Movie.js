import { movies } from "../helper/data";
import { useGlobalContext } from "../context";

export const Movie = () => {
    const {movie,value, handleChange} = useGlobalContext()
  return (
    <>    
    <div className="movie-select">
        <label htmlFor="movies">Select a movie : </label>
        <select onChange={(e)=>handleChange(e)} name="movies" value={value} id="movies">
            {
               movies.map(({name,price},index)=>{
                    return <option key={index}>{name} ${price}</option> // creating oprtions for select html element
                })
            }
        </select>
    </div>
    <ul className="seat-info">
        <li>
            <div className="seat static-seat"></div>
            <span className="info">N/A</span>
        </li>
        <li>
            <div className="seat static-selected" ></div>
            <span className="info">Selected</span>
        </li>
        <li>
            <div className="seat occupied"></div>
            <span className="info">Occupied</span>
        </li>
    </ul>
    <div className="img-container">
        <img src={movie.image} alt="poster" />
    </div>
    </>
)
}
