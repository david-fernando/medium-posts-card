import classnames from 'classnames';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Props } from '../interface/interface'
import Card from './Card'
import useFetch from '../hooks/useFetch';

import styles from '../style/Carousel.module.css'


function Carousel({ username, options = {} }: Props){

  const { dataMedium } = useFetch(`https://mediumpostapi.herokuapp.com/?usermedium=${username}`)

  const openInNewTab = (options.hasOwnProperty('openInNewTab'))? options.openInNewTab : true

  const nameTarget = (openInNewTab)? '_blank' : '_self'

  return (
    <div className={styles.container}>
      <button className={classnames(styles.carouselButton, styles.previousButton)} >
        <GrFormPrevious className={styles.iconButton} size={16} />
      </button>
      <span className={styles.content}>
        {
          dataMedium.map((item: any, index: number) => (
            <a href={item.link} key={index} target={nameTarget}>
              <Card userdata={item}  options={options} />
            </a>
          ))
        }
      </span>
      <button className={classnames(styles.carouselButton, styles.nextButton)} >
        <GrFormNext className={styles.iconButton} size={16} />
      </button>
    </div>
  )
}

export default Carousel