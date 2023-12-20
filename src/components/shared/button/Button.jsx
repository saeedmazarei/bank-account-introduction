import PropTypes from 'prop-types'

import styles from './Button.module.scss'

function Button({ children, style, onClick, className, type }) {
    return (
        <button
            className={`${styles.button} ${className}`}
            style={{ backgroundColor: type === 'danger' && 'red', style }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
}

export default Button
