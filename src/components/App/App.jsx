import { Card } from "../Card/Card";
import { ImageCard } from "../ImageCard/ImageCard";


export function App(props) {
    return(
        <div>
        {<ImageCard />}
        {<Card/>}
        </div>      
    )
}