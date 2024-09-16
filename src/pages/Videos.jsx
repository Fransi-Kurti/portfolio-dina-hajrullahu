import Cart from "../components/Cart"
import classes from './Videos.module.css';
import { videosData } from "../assets/Videos/VideosData";


export default function Videos() {
    return <>
    <div className={classes.videos}>
    {videosData.map((video) => (
            <Cart key={video.id}
              title={video.title}
              description={video.description}
              image={video.image}
              link ={video.link}
            />
        ))}

    
    </div>
  </>
}