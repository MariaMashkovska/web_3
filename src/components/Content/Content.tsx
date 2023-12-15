import { ContentItem } from "./ContentItem"
import styles from "./Content.module.scss"
import { useState } from "react"

export const Content = () => {

    const [showMore, setShowMore] = useState(true);
    const [count, setCount] = useState(3);

    const imageURL = "https://i.ytimg.com/vi/txgv0nMZ46I/maxresdefault.jpg"

    const MOST_POPULAR_DEVICES = [
        {"label": "Freddy Fazbear's Pizza 1987", "content": "The pizzeria has more rooms than the location in the first game, including four Party Rooms, a Game Area, and a Prize Corner. The main animatronics from the previous location are also stored away in a Parts/Service room, used for spare parts for the new ones.", "image": "https://store-images.s-microsoft.com/image/apps.60385.13578174030071833.ced2a7cf-09b3-4d12-8621-229829d1aa41.66df75dd-fd3d-46de-8a85-5278023c30a2?q=90&w=480&h=270"},
        {"label": "Circus Baby's Pizza World", "content": "Circus Baby's Pizza World was a location created by William Afton after the closing of the first Freddy Fazbear’s Pizza (1983 or 1985). Circus Baby's is reminiscent of ShowBiz Pizza Place and Chuck E. Cheese's, in that Circus Baby's Pizza World provides entertainment via singing animatronic mascots. This place was made a competitor to Freddy Fazbear's Pizza.", "image": "https://i.redd.it/u46cas63p0s71.jpg"},
        {"label": "Fredbear's Family Diner", "content": "Fredbear's Family Diner is the very first pizzeria starring two animatronics: Fredbear and Spring Bonnie. There are also two more spare costumes in the pizzeria, this is Golden Freddy and the second Spring Bonnie costume.", "image": "https://preview.redd.it/r295ih4525k41.png?auto=webp&s=5b477535a71c8efd10e2eb37f78f723330cfda25"},
        {"label": "Fazbear’s Fright: The Horror Attraction", "content": "The game begins 30 years after the closure of Freddy Fazbear's Pizza, namely, in the fear attraction Fazbear's Fright: The Horror Attraction. In the story, William Afton, known as the Purple Guy, dismantled four animatronics of the classic line, which contained the souls of the dead them children.", "image": "https://i.ytimg.com/vi/Av5zGnNPqSo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_XgwgbXuAznhyRisQuAAm2N2dDg"},
        {"label": "Five Nights at Freddy’s 4", "content": "The game takes place in 1983. All nights, as it turns out, are the dreams of Michael Afton, the older brother of the late Crying Boy, between shifts at the pizzeria due to his fear of ordinary animatronics.", "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6100b008-eaff-432b-97fd-0d28a746e8ab/dfvtbp4-95e45643-f3df-4629-8365-68dbd9b847c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxMDBiMDA4LWVhZmYtNDMyYi05N2ZkLTBkMjhhNzQ2ZThhYlwvZGZ2dGJwNC05NWU0NTY0My1mM2RmLTQ2MjktODM2NS02OGRiZDliODQ3YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QJKVTqcF4JVGFr_wBIHAMdMUb7vyT4pdGfdtTXu04VQ"},
        {"label": "Freddy Fazbear’s Mega PizzaPlex", "content": "At Freddy Fazbear's Mega PizzaPlex, the animatronics Glamrock Freddy, Glamrock Chica, Montgomery the Alligator, and Roxanne the Wolf prepare to perform for the audience. During a performance, Freddie experiences a technical glitch and passes out.", "image": "https://blog.playstation.com/tachyon/2021/10/219c9651c58532f46a4434125448d67038d85ce8.jpg"},
    ]
    
    const showMoreButton = () => {
        setCount(count + 3);
        const newShowMore = count < 3;        
        setShowMore(newShowMore)
    }

    return (
        <section className={styles.content}>
            <span className={styles.heading}>Popular Restaurants</span>

            <div className={styles.items}> 
                { [...MOST_POPULAR_DEVICES.slice(0, count)].map( (item, i) => <ContentItem key={i} label={item.label} content={item.content} imageURL={item.image} />) }
                
            </div>

            <div className={styles.view_more}>
                { showMore
                    &&
                <button className={styles.view_more_button} name="view more button" onClick={showMoreButton}>View More</button>
                }
            </div>
        </section>
    )
}
