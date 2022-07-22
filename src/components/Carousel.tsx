import { useRef } from 'react';
import classnames from 'classnames';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { Props } from '../interface/interface'
import Card from './Card'
import useGetMedium from '../hooks/useGetMedium';
import useCarousel from '../hooks/useCarousel';
import useIsVisible from '../hooks/useIsVisible';
import useLastCard from '../hooks/useLastCard';
import useArray from '../hooks/useArray';

import styles from '../style/Carousel.module.css'

function Carousel({ username = '', dataMedium, options = {} }: Props){
  const ssr = options?.ssr || false
  const { array } = useArray()
  const data = useGetMedium(username, ssr)
  const medium = (array(data).isEmpty)? dataMedium?.dataMedium : data
  const { moveForward, moveBack, position } = useCarousel()
  const openInNewTab = (options.hasOwnProperty('openInNewTab'))? options.openInNewTab : true
  const nameTarget = (openInNewTab)? '_blank' : '_self'
  const cardContainer:any = useRef()
  const carouselContainer:any = useRef()
  const cardIsVisible:boolean = useIsVisible(carouselContainer, cardContainer)
  const { returnLastCard } = useLastCard()
  

  return (
      <div className={styles.container} ref={carouselContainer} >
      {
        (position > 0) && (
          <button onClick={() => moveBack()} className={classnames(styles.carouselButton, styles.previousButton)} >
            <GrFormPrevious className={styles.iconButton} size={24} />
          </button>
        )
      }
      <span className={styles.content} style={{right: `${position}rem`, transition: 'right 0.6s linear' }} >
          {
            medium.map((item: any, index: number) => (
              <a href={item.link} ref={returnLastCard(index, medium, cardContainer)} target={nameTarget} key={index} >
                <Card userdata={item} options={options} />
              </a>
            ))
          }
      </span>
      {
        (!cardIsVisible) && (
          <button onClick={() => moveForward(cardIsVisible)} className={classnames(styles.carouselButton, styles.nextButton)} >
            <GrFormNext className={styles.iconButton} size={24} />
          </button>
        )
      }
    </div>
  )
}

export default Carousel