import PropTypes from 'prop-types'

import IconText from "../header/icon-text/IconText"
import styles from './Index.module.scss'

function NavigationItem({ icon, text }) {
    return <div className={styles["navigation-item-container"]}>
        <IconText icon={icon} text={text} />
        <img src='/assets/images/Arrow---Down-2.svg' className={styles["arrow-down-container"]} />
    </div>
}

NavigationItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
}

export default NavigationItem
