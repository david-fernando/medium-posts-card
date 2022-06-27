import { useRef } from 'react';
import classnames from 'classnames';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Props } from '../interface/interface'
import Card from './Card'
import useFetch from '../hooks/useFetch';
import useCarousel from '../hooks/useCarousel';
import useIsVisible from '../hooks/useIsVisible';
import useLastCard from '../hooks/useLastCard';

import styles from '../style/Carousel.module.css'

function Carousel({ username, options = {} }: Props){
  const { moveForward, moveBack, moveRight } = useCarousel()

  const { dataMedium } = useFetch(`https://mediumpostapi.herokuapp.com/?usermedium=${username}`)
  const openInNewTab = (options.hasOwnProperty('openInNewTab'))? options.openInNewTab : true
  const nameTarget = (openInNewTab)? '_blank' : '_self'
  const cardContainer:any = useRef()
  const carouselContainer:any = useRef()
  const cardIsVisible:boolean = useIsVisible(carouselContainer, cardContainer)
  const { returnLastCard } = useLastCard()

  return (
    <div className={styles.container} ref={carouselContainer} >
      {
        (moveRight > 0) && (
          <button onClick={() => moveBack()} className={classnames(styles.carouselButton, styles.previousButton)} >
            <GrFormPrevious className={styles.iconButton} size={16} />
          </button>
        )
      }
      <span className={styles.content} style={{right: `${moveRight}rem`, transition: 'right 0.6s linear' }} >
        {
          dataMedium.map((item: any, index: number) => (
            <a href={item.link} ref={returnLastCard(index, dataMedium, cardContainer)} target={nameTarget} key={index} >
              <Card userdata={item} options={options} />
            </a>
          ))
        }
      </span>
      {
        (!cardIsVisible) && (
          <button onClick={() => moveForward(cardIsVisible)} className={classnames(styles.carouselButton, styles.nextButton)} >
            <GrFormNext className={styles.iconButton} size={16} />
          </button>
        )
      }
    </div>
  )
}

export default Carousel