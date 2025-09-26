import { ImageCard } from "../ImageCard/ImageCard";


export function App() {
    const servData = [
        {img:'https://img.icons8.com/?size=100&id=0mRGdD9mF99z&format=png&color=000000', title:'title text', text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
    {title:'title text', text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"}]
    return(
        <div>
            {servData.map((item, index) => (
                <ImageCard key={index} {...item}/>
            ))}
        </div>      
    )
}