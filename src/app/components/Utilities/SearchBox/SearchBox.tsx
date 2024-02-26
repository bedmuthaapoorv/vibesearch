import styles from './SearchBox.module.css'
import Resources from '@/app/resources/resources'
export default function SearchBox() {
    let resources=new Resources()
    return (
        <div className={`${styles.searchBox}`}>
            <div className={`${styles.searchBox__search}`} contentEditable>

            </div>
            <img className={`${styles.searchBox__cameraImage}`} src={resources.Camera.src}>

            </img>
            <img className={`${styles.searchBox__go}`} src={resources.sendButton.src}>

            </img>
        </div>
    )
}