import classnames from 'classnames';

import styles from '../style/Card.module.css'

type Props = {
  options?: {
    borderRadius?: boolean
    showTags?: boolean
    showDate?: boolean
  }
}

function Card({ options = {} }: Props){

  const borderRadius = (options.hasOwnProperty('borderRadius'))? options.borderRadius : true

  const borderRadiusContainer = (borderRadius) && styles.borderRadiusContainer
  const borderRadiusThumbnail = (borderRadius) && styles.borderRadiusThumbnail
  const imageUrl = 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'
  
  return (
    <div className={classnames(styles.container, borderRadiusContainer)}>
      <span>
        <img
         className={classnames(styles.thumbnail, borderRadiusThumbnail)} 
         src={imageUrl}
         alt="Título do artigo"
        />
      </span>
      <span className={styles.content}>
        <span className={styles.title}>Título do artigo</span>
        <p className={styles.description}>
          Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro.
        </p>
        {
          (options.showDate) && (
            <p className={styles.date}>
              12.06.2022
            </p>
          )
        }
        {
          (options.showTags) && (
            <p className={styles.tags}>
              dark-mode js-tutorial javascript
            </p>
          )
        }
      </span>
    </div>
  )
}

export default Card