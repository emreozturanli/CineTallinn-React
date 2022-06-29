import { useGlobalContext } from "../context"
export const Header = () => {
  const {time} = useGlobalContext();
  return (
    <header>
        <h1>CineTallinn</h1>
        <p>{time}</p>
    </header>
  )
}
