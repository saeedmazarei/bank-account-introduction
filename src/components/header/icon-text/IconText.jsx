import PropTypes from 'prop-types'

import styles from './IconText.module.scss'

function IconText({ icon, text, onClick }) {
    return (
        <div className={`${styles['icon-text-container']} flex ver-center hor-center`} onClick={onClick}>
            <div className={`${styles['icon-container']} flex ver-center`}>
                <img src={`/assets/images/${icon}`} className='icon-color' />
            </div>
            <span>{text}</span>
        </div>
    )
}

IconText.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default IconText
