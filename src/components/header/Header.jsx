import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoTabletPortraitOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { CiCalendarDate } from 'react-icons/ci'
import { AiOutlineLineChart } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

import Card from '../shared/card/Card'
import styles from './Header.module.scss'
import IconText from './icon-text/IconText'

function Header() {
    return (
        <header className={styles['header-container']}>
            <Card className={`${styles.card} flex space-between ver-center`}>
                <div className={`${styles['time-and-date-container']} flex space-between`}>
                    <IconText
                        icon={
                            <GoClock
                                className="icon-color"
                                style={{ height: '100%', width: '100%' }}
                            />
                        }
                        text="ساعت ۱۳:۳۱"
                    />
                    <IconText
                        icon={
                            <CiCalendarDate
                                className="icon-color"
                                style={{ height: '100%', width: '100%' }}
                            />
                        }
                        text="پنجشنبه ۲۷ مرداد ۱۴۰۲"
                    />
                </div>
                <div
                    className={`${styles['image-icons-filters-container']} flex ver-center`}
                >
                    <div className={`${styles['filters-container']} flex space-around ver-center`}>
                        <IconText
                            icon={
                                <AiOutlineLineChart
                                    className="icon-color"
                                    style={{ height: '100%', width: '100%' }}
                                />
                            }
                            text="سالی مالی ۱۴۰۲"
                        />
                        <IoIosArrowDown />
                    </div>
                    <div className={`${styles['header-icons-container']} flex space-between`}>
                        <div className={`${styles['icon-container']} flex ver-center`}>
                            <IoTabletPortraitOutline
                                className="icon-color"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                        <div className={`${styles['icon-container']} flex ver-center`}>
                            <IoIosNotificationsOutline
                                className="icon-color"
                                style={{ height: '100%', width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className={`${styles['profile-picture-container']} flex hor-center ver-center`}>
                        <img src='/assets/images/profile.jpeg' />
                    </div>
                </div>
            </Card>
        </header>
    )
}

export default Header
