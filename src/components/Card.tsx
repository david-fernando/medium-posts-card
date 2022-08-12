import classnames from 'classnames';
import useArray from '../hooks/useArray';
import useBlankSpace from '../hooks/useBlankSpace';
import { CardProps } from '../interface/interface'

import styles from '../style/Card.module.css'

function Card({ userdata, options = {} }: CardProps){
  const { array } = useArray()

  const borderRadius = (options.hasOwnProperty('borderRadius'))? options.borderRadius : true
  const borderRadiusContainer = (borderRadius) && styles.borderRadiusContainer
  const borderRadiusThumbnail = (borderRadius) && styles.borderRadiusThumbnail
  const mediumUrl = userdata.image.split('.clientViewed')[0]
  const mediumUrlBlocked = 'https://medium.com/_/stat?event=post'
  const placeholderUrl = 'https://placehold.jp/bdbdc2/ffffff/250x250.png?text=No%20image'
  const tagArray = (array(userdata.tags).isEmpty)? ['NoTags']: userdata.tags
  const { tags } = useBlankSpace(tagArray)
  const imageUrl = (mediumUrl === mediumUrlBlocked)? placeholderUrl : userdata.image
  
  return (
    <div className={classnames(styles.container, borderRadiusContainer)}>
      <span>
        <img
         className={classnames(styles.thumbnail, borderRadiusThumbnail)} 
         src={imageUrl}
         alt={userdata.title}
        />
      </span>
      <span className={styles.content}>
        <span className={styles.title}>{ userdata.title }</span>
        <p className={styles.description}>
          { userdata.description }
        </p>
        {
          (options.showDate) && (
            <p className={styles.date}>
              { userdata.date }
            </p>
          )
        }
        {
          (options.showTags) && (
            <p className={styles.tags}>
              { tags }
            </p>
          )
        }
      </span>
    </div>
  )
}

export default Card