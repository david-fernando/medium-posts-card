import { useRef, useState } from 'react';
import classnames from 'classnames';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { useIsVisible } from 'react-is-visible'
import { Props } from '../interface/interface'
import Card from './Card'
import useFetch from '../hooks/useFetch';

import styles from '../style/Carousel.module.css'


function Carousel({ username, options = {} }: Props){
  const [ moveRight, setMoveRight ] = useState(0)

  const { dataMedium } = useFetch(`https://mediumpostapi.herokuapp.com/?usermedium=${username}`)
  const openInNewTab = (options.hasOwnProperty('openInNewTab'))? options.openInNewTab : true
  const nameTarget = (openInNewTab)? '_blank' : '_self'
  const cardContainer = useRef()
  const cardIsVisible = useIsVisible(cardContainer)

  function moveForward() {
    if(!cardIsVisible){
      setMoveRight(moveRight + 21)
    }
  }

  function moveBack() {
    if(moveRight > 0){
      setMoveRight(moveRight - 21)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => moveBack()} className={classnames(styles.carouselButton, styles.previousButton)} >
        <GrFormPrevious className={styles.iconButton} size={16} />
      </button>
      <span className={styles.content} style={{right: `${moveRight}rem`}} >
        {
          dataMedium.map((item: any, index: number) => (
            <a href={item.link} target={nameTarget} key={index} >
              <Card userdata={item} options={options} />
            </a>
          ))
        }
        <span ref={cardContainer} style={{width:'0rem', height: '0rem'}}></span>
      </span>
      <button onClick={() => moveForward()} className={classnames(styles.carouselButton, styles.nextButton)} >
        <GrFormNext className={styles.iconButton} size={16} />
      </button>
    </div>
  )
}

export default Carousel