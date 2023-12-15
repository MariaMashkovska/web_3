import { Button } from "../Button/Button";
import styles from "./Hero.module.scss";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <HeroImage />
            <div>
                <h1>BEST RESTAURANT</h1>
                <h2 className={styles.heroName}>Freddy Fazbear's Pizza 1993</h2>
                <p className={styles.about}>
                    <span>
                    Freddy Fazbear's Pizza is a family pizza restaurant that features 
                    different animatronic mascots. The pizzeria is reminiscent of Chuck E. Cheese's 
                    and SnowBiz Pizza Place. The main mascots include Freddy Fazbear, Bonnie, Chica, and 
                    Foxy (though he is currently broken and out of order).
                    </span>
                    <br />
                </p>
            </div>
        </div>
    );
};

