import { useTranslation } from 'react-i18next'

import styles from './Index.module.scss'
import NavigationItem from './NavigationItem'
import CostumCard from '../shared/card/CostumCard'
import IconText from '../header/icon-text/IconText'

function Index() {
    const { t } = useTranslation()
    return (
        <nav className={styles['navigation-bar']}>
            <CostumCard className={`${styles.card} flex space-between`}>
                <div className={`${styles['logo-and-nav-bar-container']}`}>
                    <div className="logo-website-name-container">
                        <div className="flex ver-center">
                            <div className="flex ver-center">
                                <img src={'/assets/images/main-logo.png'} className="icon-color" />
                            </div>
                            <span
                                style={{ paddingRight: '5%', fontSize: '24px', fontWeight: '700' }}
                            >
                                {t('createAccount.samina')}
                            </span>
                        </div>
                    </div>
                    <div className={styles['apple-logo-and-name-container']}>
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
                    <div className={styles["sub-menu-container"]}>
                        <span className={styles.first}>{t('createAccount.bankAccountDefinition')}</span>
                        <span>{t('createAccount.optionTwo')}</span>
                        <span>{t('createAccount.optionThree')}</span>
                    </div>
                    <NavigationItem icon="Calculate.svg" text={t('createAccount.accounting')} />
                    <NavigationItem icon="Setting.svg" text={t('createAccount.setting')} />
                </div>
                <div className={`${styles['help-and-support-container']}`}>
                    <div className="help-container">
                        <IconText icon="question.svg" text={t('home.help')} />
                    </div>
                    <div className={styles["support-container"]}>
                        <IconText icon="messages.svg" text={t('home.suppourt')} />
                        <span className={styles.version}>{t('home.version')}</span>
                    </div>
                </div>
            </CostumCard>
        </nav>
    )
}

export default Index
