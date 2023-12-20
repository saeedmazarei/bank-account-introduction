import PropTypes from 'prop-types'

import Card from '../card/Card'
import styles from './IconInBox.module.scss'

function IconInBox({ icon }) {
    return (
        <Card className={styles['icon-container']}>
            <img src={`/assets/images/${icon}.svg`} />
        </Card>
    )
}

IconInBox.propTypes = {
    icon: PropTypes.string,
}

export default IconInBox
