import classnames from 'classnames';
import useArray from '../hooks/useArray';
import useBlankSpace from '../hooks/useBlankSpace';
import { CardProps } from '../interface/interface'

import styles from '../style/RectangularCard.module.css'

function RectangularCard({ userdata, options = {} }: CardProps){
  const { array } = useArray()

  const borderRadius = (options.hasOwnProperty('borderRadius'))? options.borderRadius : false
  const showDate = (options.hasOwnProperty('showDate'))? options.showDate : true
  const showTags = (options.hasOwnProperty('showTags'))? options.showTags : true
  const borderRadiusContainer = (borderRadius) && styles.borderRadiusContainer
  const borderRadiusThumbnail = (borderRadius) && styles.borderRadiusThumbnail
  const tagArray = (array(userdata.tags).isEmpty)? ['NoTags']: userdata.tags
  const { tags } = useBlankSpace(tagArray)
  
  return (
    <div className={classnames(styles.container, borderRadiusContainer)}>
      <span>
        <img
         className={classnames(styles.thumbnail, borderRadiusThumbnail)} 
         src={userdata.image}
         alt={userdata.title}
        />
      </span>
      <span className={styles.content}>
        <span className={styles.title}>{ userdata.title }</span>
        <p className={styles.description}>
          { userdata.description }
        </p>
        <span className={styles.details}>
        {
          (showDate) && (
            <p className={styles.date}>
              { userdata.date }
            </p>
          )
        }
        {
          (showTags) && (
            <p className={styles.tags}>
              { tags }
            </p>
          )
        }
        </span>
      </span>
    </div>
  )
}

export default RectangularCard