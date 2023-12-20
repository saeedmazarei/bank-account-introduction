import PropTypes from 'prop-types'

import Card from '../card/Card'
import styles from './IconInBox.module.scss'

function IconInBox({ icon, onClick }) {
    return (
        <Card className={styles['icon-container']} onClick={onClick}>
            <img src={`/assets/images/${icon}.svg`} />
        </Card>
    )
}

IconInBox.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
}

export default IconInBox
