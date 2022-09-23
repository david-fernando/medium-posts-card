import { LabelProps } from '../interface/interface'

import styles from '../style/Label.module.css'

function Label({text = 'Medium Articles', children}: LabelProps){
    return (
        <div className={styles.container}>
            <span className={styles.title}>{ text }</span>
            {
                children
            }
        </div>
    )
}

export default Label