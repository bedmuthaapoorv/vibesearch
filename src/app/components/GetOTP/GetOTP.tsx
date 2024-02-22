import styles from './GetOTP.module.css'
import Utilities from '../Utilities/Utilities'

export default function GetOTP() {
    let utilities = new Utilities()
    return <div className={`${styles.getOTP}`}>
        <div className={`${styles.getOTP__title} vibeTitle`}>
            VIBE
        </div>
        <div className={`${styles.getOTP__wrapper}`}>
            <div className={`${styles.getOTP__mediumLabel} montserrat fontWeight700`}>
                Enter OTP
            </div>
            <div className={`${styles.getOTP__smallLabel} montserrat fontWeight400`}>
                Enter your OTP here
            </div>
            <div className={`${styles.getOTP__inputSquares} inter500`}>
                {utilities.InputSquare()}
                {utilities.InputSquare()}
                {utilities.InputSquare()}
                {utilities.InputSquare()}
            </div>
            <div className={`${styles.getOTP__nextButton} inter500 button blackButton`}>
                Next
            </div>
            <div className={`${styles.getOTP__tip} inter500`}>
                You can resend OTP After 60 sec
            </div>
            <div className={`${styles.getOTP__resend} inter500`}>
                Resend OTP
            </div>
        </div>

    </div>
}