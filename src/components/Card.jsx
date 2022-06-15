import classnames from 'classnames/bind';

import styles from '../style/Card.module.css'

const classBind = classnames.bind(styles)

function Card({ borderRadius = true, showTags = false, showDate = false }){
  const borderRadiusContainer = (borderRadius) && styles.borderRadiusContainer
  const borderRadiusThumbnail = (borderRadius) && styles.borderRadiusThumbnail
  const imageUrl = 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ'
  
  return (
    <div className={classBind(styles.container, borderRadiusContainer)}>
      <span>
        <img
         className={classBind(styles.thumbnail, borderRadiusThumbnail)} 
         src={imageUrl}
         alt="Título do artigo"
        />
      </span>
      <span className={classBind(styles.content)}>
        <span className={classBind(styles.title)}>Título do artigo</span>
        <p className={classBind(styles.description)}>
          Um pequeno tutorial de como fazer dark theme com HTML, CSS e JavaScript puro.
        </p>
        {
          (showDate) && (
            <p className={classBind(styles.date)}>
              12.06.2022
            </p>
          )
        }
        {
          (showTags) && (
            <p className={classBind(styles.tags)}>
              dark-mode js-tutorial javascript
            </p>
          )
        }
      </span>
    </div>
  )
}

export default Card