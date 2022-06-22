import { useRef } from 'react';
import classnames from 'classnames';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { useIsVisible } from 'react-is-visible'
import { Props } from '../interface/interface'
import Card from './Card'
import useFetch from '../hooks/useFetch';
import useCarousel from '../hooks/useCarousel';

import styles from '../style/Carousel.module.css'

function Carousel({ username, options = {} }: Props){
  const { moveForward, moveBack, moveRight } = useCarousel()

  const { dataMedium } = useFetch(`https://mediumpostapi.herokuapp.com/?usermedium=${username}`)
  const openInNewTab = (options.hasOwnProperty('openInNewTab'))? options.openInNewTab : true
  const nameTarget = (openInNewTab)? '_blank' : '_self'
  const cardContainer = useRef()
  const cardIsVisible = useIsVisible(cardContainer)

  return (
    <div className={styles.container}>
      <button onClick={() => moveBack()} className={classnames(styles.carouselButton, styles.previousButton)} >
        <GrFormPrevious className={styles.iconButton} size={16} />
      </button>
      <span className={styles.content} style={{right: `${moveRight}rem`, transition: 'right 0.6s linear' }} >
        {
          dataMedium.map((item: any, index: number) => (
            <a href={item.link} target={nameTarget} key={index} >
              <Card userdata={item} options={options} />
            </a>
          ))
        }
        <span ref={cardContainer} style={{width:'0rem', height: '0rem'}}></span>
      </span>
      <button onClick={() => moveForward(cardIsVisible)} className={classnames(styles.carouselButton, styles.nextButton)} >
        <GrFormNext className={styles.iconButton} size={16} />
      </button>
    </div>
  )
}

export default Carousel