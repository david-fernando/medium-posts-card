import '../style/index.css'
import styles from '../style/Card.module.css'

function Card({ borderRadius = true }){
  return (
    <div className={`${styles.container} ${(borderRadius) && styles.borderRadiusContainer}`}>
      <span>
        <img
         className={`${styles.thumbnail} ${(borderRadius) && styles.borderRadiusThumbnail}`} 
         src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
         alt="Título do artigo"
        />
      </span>
      <span className={styles.content}>
        <h3>Título do artigo</h3>
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