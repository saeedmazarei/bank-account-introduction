import CostumCard from '../shared/card/CostumCard'
import styles from './Header.module.scss'
import IconText from './icon-text/IconText'

function Header() {
    return (
        <header className={styles['header-container']}>
            <CostumCard className={`${styles.card} flex space-between ver-center`}>
                <div className={`${styles['time-and-date-container']} flex space-between`}>
                    <IconText icon="Time-Circle.svg" text="ساعت ۱۳:۳۱" />
                    <IconText
                        icon="Calendar.svg"
                        text="پنجشنبه ۲۷ مرداد ۱۴۰۲"
                    />
                </div>
                <div className={`${styles['image-icons-filters-container']} flex ver-center`}>
                    <div className={`${styles['filters-container']} flex space-around ver-center`}>
                        <IconText
                            icon="chart.svg"
                            text="سالی مالی ۱۴۰۲"
                        />
                        <img src='/assets/images/Arrow---Down-2.svg' />
                    </div>
                    <div className={`${styles['header-icons-container']} flex space-between`}>
                        <div className={`${styles['icon-container']} flex ver-center`}>
                            <img src='/assets/images/geo.svg'
                                className="icon-color"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                        <div className={`${styles['icon-container']} flex ver-center`}>
                            <img src='/assets/images/notif.svg'
                                className="icon-color"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                    </div>
                    <div
                        className={`${styles['profile-picture-container']} flex hor-center ver-center`}
                    >
                        <img src="/assets/images/profile.jpeg" />
                    </div>
                </div>
            </CostumCard>
        </header>
    )
}

export default Header
