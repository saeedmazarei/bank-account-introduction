import PropTypes from 'prop-types'

import Card from '../card/Card'
import styles from './IconInBox.module.scss'

function IconInBox({ icon, onClick, style, text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Card className={styles['icon-container']} onClick={onClick} style={style}>
                <img src={`/assets/images/${icon}.svg`} />
            </Card>
            {text && <span style={{fontFamily: 'IRANYekan'}}>{text}</span>}
        </div>
    )
}

IconInBox.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    text: PropTypes.string
}

export default IconInBox
