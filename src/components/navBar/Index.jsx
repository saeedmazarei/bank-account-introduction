import { useTranslation } from 'react-i18next'

import Card from '../shared/card/Card'
import styles from './Index.module.scss'
import NavigationItem from './NavigationItem'

function Index() {
    const { t } = useTranslation()
    return (
        <nav className={styles['navigation-bar']}>
            <Card className={`${styles.card} flex space-between`}>
                <div className={`${styles['logo-and-nav-bar-container']}`}>
                    <div className="logo-website-name-container">
                        <div className='flex ver-center'>
                            <div className='flex ver-center'>
                                <img src={'/assets/images/main-logo.png'} className="icon-color" />
                            </div>
                            <span style={{ paddingRight: '5%', fontSize: '24px', fontWeight: '700' }}>{t('createAccount.samina')}</span>
                        </div>
                    </div>
                    <div className={styles["apple-logo-and-name-container"]}>
                        <img src="/assets/images/apple.png" />
                        <span>اپل</span>
                        <img src="/assets/images/Bank-card-swap.svg" />
                    </div>
                    <NavigationItem icon="dashboard.svg" text={t('createAccount.dashboard')} />
                    <NavigationItem icon="2users.svg" text={t('createAccount.accountParty')} />
                    <NavigationItem
                        icon="Delivery-Box.svg"
                        text={t('createAccount.goodsAndServices')}
                    />
                    <NavigationItem icon="Home.svg" text={t('createAccount.inventory')} />
                    <NavigationItem icon="Buy.svg" text={t('createAccount.sale')} />
                    <NavigationItem icon="Coins.svg" text={t('createAccount.treasury')} />
                    {/* <NavigationItem  icon="Calculate.svg" text={t('createAccount.bankAccountDefinition')} /> */}
                    <NavigationItem icon="Calculate.svg" text={t('createAccount.accounting')} />
                    <NavigationItem icon="Setting.svg" text={t('createAccount.setting')} />
                </div>
                <div className={`${styles['help-and-support-container']}`}></div>
            </Card>
        </nav>
    )
}

export default Index
