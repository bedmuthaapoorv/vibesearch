import styles from './Box.module.css'
export default function Box(image:any, text:string) {
    return (
        <div className={`${styles.box}`}>
            <img className={`${styles.box__boxImage}`} src={image.src}>
            </img>
            <div className={`${styles.box__boxText} inter fontWeight500`}>
                {text}
            </div>
        </div>
    )
}