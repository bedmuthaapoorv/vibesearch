import Resources from "@/app/resources/resources"
import styles from './GetStarted.module.css' 

export default function GetStarted() {
    let resources=new Resources()
    return <div className={`${styles.getStarted}`}>
        <div className={`${styles.getStarted__title} vibeTitle`}>
            VIBE
        </div>
        <div className={`${styles.getStarted__image}`}>
            <img src={resources.getStartedImage.src} alt="getStarted image"></img>
        </div>
        <div className={`${styles.getStarted__buttonsFlex}`}>
            <div className={`${styles.getStarted__loginButton} inter500 fontSize14 button ${styles.getStartedbuttons}`}>
                Login
            </div>
            <div className={`${styles.getStarted__getStartedButton} inter500 fontSize14 button ${styles.getStartedbuttons}`}>
                Sign Up
            </div>
        </div>
        <div className={`${styles.getStarted__termsAndConditions} inter500`}>
            <div className={`${styles.termsAndConditions__content}`}>
                By using Vibe, you accept our Terms of Service & Privacy Policy
            </div>
        </div>
    </div>
}