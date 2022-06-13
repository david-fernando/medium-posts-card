import '../style/index.css'
import styles from '../style/Card.module.css'

function Card({ borderRadius = true }){

  const borderRadiusContainer = (borderRadius) && styles.borderRadiusContainer
  const borderRadiusThumbnail = (borderRadius) && styles.borderRadiusThumbnail
  const imageUrl = 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'
  
  return (
    <div className={`${styles.container} ${borderRadiusContainer}`}>
      <span>
        <img
         className={`${styles.thumbnail} ${borderRadiusThumbnail}`} 
         src={imageUrl}
         alt="Título do artigo"
        />
      </span>
      <span className={styles.content}>
        <span className={styles.title}>Título do artigo</span>
        <p>
        is simply dummy text of the printing and typesetting industry.
        </p>
        <p>
          12.06.2022
        </p>
        <p>
          dark-mode js-tutorial javascript
        </p>
      </span>
    </div>
  )
}

export default Card