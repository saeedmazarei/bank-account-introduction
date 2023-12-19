import PropTypes from 'prop-types'

import styles from './IconText.module.scss'

function IconText({ icon, text }) {
    return (
        <div className={`${styles['icon-text-container']} flex ver-center`}>
            <div className={`${styles["icon-container"]} flex ver-center`}>{icon}</div>
            <span style={{ paddingRight: '10%' }}>{text}</span>
        </div>
    )
}

IconText.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
}

export default IconText
