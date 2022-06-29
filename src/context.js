import React, { useContext, useEffect, useState } from "react";
import { movies } from "./helper/data";
export const MovieContext = React.createContext();

export const MovieProvider= ({children}) => {
    const [movie, setMovie] = useState(movies[0]); // initial movie
    const [value, setValue] = useState(); // to update select html elements value
    const [selectedSeats,setSelectedSeats] = useState(0);  // total amount of selected seats
    const [amount, setAmount] = useState(0); // single ticket value for the movie
    const [time,setTime] = useState('');

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleString())
        },1000);
    })

    const handleChange=(e)=>{
        const movieName = e.target.value.slice(0,e.target.value.indexOf('$')-1);  // to get the name of the movie 
        movies.map((movie)=> movie.name === movieName && setMovie(movie) ) // to catch the correct movie
        setAmount(movie.price);  // to update the ticket price after changing movie
        document.querySelectorAll('.selected').forEach((item)=>{
            item.classList.remove('selected')
        })  // to delete all selected class after changing movie
        setSelectedSeats(0)  //reset amount of selectedseats to zero
    }

    const seatClickHandle = (e) =>{
        if(e.target.classList.contains('occupied')){
           alert('this seat is occupied')  // to give an alert if seat is already occupied
        }
        else if(e.target.classList.contains('selected')){
            setSelectedSeats((prev)=> prev - 1);    // decrease amount of selected seats
            e.target.classList.remove('selected'); // to make the seat unselected
        }
        else if(e.target.classList.contains('seat')){
            setSelectedSeats((prev)=> prev + 1); // increase amount of selected seats
            e.target.classList.add('selected');  // to make the seat selected(to change its color)
            setAmount(movie.price); // to update the ticket price after click
        }
        
    }



  return (
    <MovieContext.Provider value={{movie, value, amount, selectedSeats, time, handleChange, seatClickHandle}}>
        {children}                      {/* sending states to childrens*/ }
    </MovieContext.Provider>
  )
};

export const useGlobalContext = () => {  
    return useContext(MovieContext);     
};
