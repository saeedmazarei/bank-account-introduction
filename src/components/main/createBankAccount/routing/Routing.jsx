import styles from './Routing.module.scss'

function Routing() {

    return (
        <div className={styles['directories-container']} style={{marginTop: '2%'}}>
            <img src={`/assets/images/dashboard.svg`} className='icon-color' />
            <img src='/assets/images/Arrow---Left-2.svg' style={{ color: '#D0D5DE', marginRight: '2%' }} />
            <span style={{marginRight: '2%', color: '#485367'}}>خزانه داری</span>
            <img src='/assets/images/Arrow---Left-2.svg' style={{ color: '#D0D5DE', marginRight: '2%' }} />
            <span style={{marginRight: '2%', color: '#004EEB'}}>تعریف حساب بانکی</span>
        </div>
    )
}

export default Routing
