import { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import { Props } from '../interface/interface'
import Card from './Card'

import styles from '../style/Carousel.module.css'

function Carousel({ username, options }: Props){
  const [ dataMedium, setDataMedium ] : Array<any> = useState([])

  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get(`https://mediumpostapi.herokuapp.com/?usermedium=${username}`)
  
      const data = response.data.dataMedium

      setDataMedium(data)
    }
    
    fetchData()
  }, [username])

  return (
    <div className={styles.container}>
      <span className={styles.content}>
        {
          dataMedium.map((item: any, index: number) => (
            <Fragment key={index}>
              <Card userdata={item}  options={options} />
            </Fragment>
          ))
        }
      </span>
    </div>
  )
}

export default Carousel