import PropTypes from 'prop-types'

import styles from './Card.module.scss'

function Card({ children, style, className, onClick }) {
    return <div className={`${styles.card} ${className}`} style={style} onClick={onClick}>{children}</div>
}

Card.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Card
