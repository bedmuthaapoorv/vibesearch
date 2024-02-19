import styles from './SignUp.module.css'
import Components from '@/app/Components'
import { Carousel } from 'antd'

export default function SignUp() {
    let components = new Components();
    let utilities = new components.Utilities();


    return <div className={`${styles.signup}`}>
        <div className={`${styles.signup__logo} vibeTitle`}>
            VIBE
        </div>

        <div className={`${styles.signup__form}`}>
            <div className={`${styles.signup__title}`}>
                <div className={`${styles.title__content} montserrat fontWeight600`}>Create an Account</div>
            </div>
            <Carousel arrows={true} dots={true} style={{ maxWidth: '80vw', height: '30vh' }}>
                <div>
                    {utilities.formElement({ label: 'Name', placeholder: 'Your name here', isPassword: false })}
                    {utilities.formElement({ label: 'Email', placeholder: 'name@domain.com', isPassword: false })}                </div>
                <div>
                    {utilities.formElement({ label: 'Password', isPassword: true })}
                    {utilities.formElement({ label: 'Confirm Password', isPassword: true })}                </div>
            </Carousel>
        </div>
        <div className={`${styles.signup__signup} inter500 button`}>
            Next
        </div>
        <div className={`${styles.signup__login} inter500`}>
            Don't have an account? Log In
        </div>
    </div>
}