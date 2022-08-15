import { Props } from '../interface/interface'
import RectangularCard from './RectangularCard';
import useGetMedium from '../hooks/useGetMedium';

import styles from '../style/List.module.css'

function List({ username = '', dataMedium, options = {} }: Props){
  const ssr = options?.ssr || false
  const data = useGetMedium(username, ssr)
  const medium = (ssr)? dataMedium?.dataMedium : data
  const openInNewTab = (options.hasOwnProperty('openInNewTab'))? options.openInNewTab : true
  const nameTarget = (openInNewTab)? '_blank' : '_self'

  return (
      <div className={styles.container} >
      <span className={styles.content} >
          {
            medium.map((item: any, index: number) => (
              <a href={item.link} target={nameTarget} key={index} >
                <RectangularCard userdata={item} options={options} />
              </a>
            ))
          }
      </span>
    </div>
  )
}

export default List