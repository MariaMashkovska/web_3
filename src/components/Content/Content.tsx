import React from 'react';
import styles from './Content.module.scss';
import { ContentItem } from './ContentItem';

const contentData = [
  {
    label: "Freddy Fazbear's Pizza 1987",
    content: "The pizzeria has more rooms than the location in the first game, including four Party Rooms, a Game Area, and a Prize Corner. The main animatronics from the previous location are also stored away in a Parts/Service room, used for spare parts for the new ones.",
    imageURL: "https://steamuserimages-a.akamaihd.net/ugc/29609215875912254/5E370FFD30F1B520D4A7F9A7FF0078491EA886CC/?imw=1024&imh=768&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
  },
  {
    label: "Circus Baby's Pizza World",
    content: "Circus Baby's Pizza World was a location created by William Afton after the closing of the first Freddy Fazbear’s Pizza (1983 or 1985). Circus Baby's is reminiscent of ShowBiz Pizza Place and Chuck E. Cheese's, in that Circus Baby's Pizza World provides entertainment via singing animatronic mascots. This place was made a competitor to Freddy Fazbear's Pizza.",
    imageURL: "https://images3.alphacoders.com/952/952626.png"
  },
  {
    label: "Fredbear's Family Diner",
    content: "Fredbear's Family Diner is the very first pizzeria starring two animatronics: Fredbear and Spring Bonnie. There are also two more spare costumes in the pizzeria, this is Golden Freddy and the second Spring Bonnie costume. It also served as the beginning of Nightmare Springbonnie.",
    imageURL: "https://steamuserimages-a.akamaihd.net/ugc/442827985588647802/A3CABF23FA280A14E9599403942361B3D21A5A0C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
  }
];

export const Content = () => {
  return (
    <section className={styles.section}>
      <span className={styles.heading}>Popular Restaurants</span>

      <div className={styles.content}>
        {contentData.map((item, index) => (
          <ContentItem
            key={index}
            label={item.label}
            content={item.content}
            imageURL={item.imageURL}
          />
        ))}
      </div>

      <div className={styles.viewMore}>
        <button className={styles.viewMoreButton} name="viewMore">
          View More
        </button>
      </div>
    </section>
  );
};

export default Content;
