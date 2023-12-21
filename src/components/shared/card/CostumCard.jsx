import PropTypes from 'prop-types'

import styles from './CostumCard.module.scss'

function CostumCard({ children, style, className, onClick }) {
    return <div className={`${styles.card} ${className}`} style={style} onClick={onClick}>{children}</div>
}

CostumCard.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default CostumCard
