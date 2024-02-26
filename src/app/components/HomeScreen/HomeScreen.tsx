import Box from "../Utilities/Box/Box";
import VibeLogo from "../Utilities/VibeLogo/VibeLogo";
import styles from "./HomeScreen.module.css"
import Components from "@/app/Components";
import Resources from "@/app/resources/resources";

export default function HomeScreen() {
    let components = new Components()
    let utilities = new components.Utilities()
    let resources = new Resources()
    return <div className={`${styles.homescreen}`}>
        <VibeLogo></VibeLogo>
        <div className={`${styles.homescreen__content}`}>
            <div className={`${styles.content__smallText} inter fontWeight500`}>
                Your personalized assistant for finding just the right vibe
            </div>
            <div className={`${styles.content__mediumText} inter fontWeight500`}>
                Start here for some quick inspiration
            </div>
            <div className={`${styles.content__suggestionBoxes}`}>
                <div className={`${styles.suggestionBoxes__row}`}>
                    {utilities.Box(resources.boxImage, 'Suggest me some good nike white colour shoes')}
                    {utilities.Box(resources.boxImage, 'Suggest me some good nike white colour shoes')}
                </div>
                <div className={`${styles.suggestionBoxes__row}`}>
                    {utilities.Box(resources.boxImage, 'Suggest me some good nike white colour shoes')}
                    {utilities.Box(resources.boxImage, 'Suggest me some good nike white colour shoes')}
                </div>
            </div>            
        </div>
        <utilities.SearchBox></utilities.SearchBox>
    </div>
}