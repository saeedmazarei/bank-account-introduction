import { useTranslation } from 'react-i18next'

import styles from './Definition.module.scss'
import IconInBox from '../../../../shared/icon-in-box/IconInBox'
import Button from '../../../../shared/button/Button'
import IconText from '../../../../header/icon-text/IconText'

function Definition() {
    const { t } = useTranslation()
    return (
        <div className={styles['definition-and-video-tutorial']}>
            <div className={styles['definition-container']}>
                <h3 className="text-primary">{t('createAccount.bankAccountDefinition')}</h3>
                <span>{t('createAccount.testText')}</span>
            </div>
            <div className={styles['video-tutorial-container']}>
                <IconInBox icon="pdf" />
                <Button
                    style={{ color: '#667085', backgroundColor: '#FFFFFF', borderColor: '#EAECF0' }}
                >
                    <IconText icon="video.svg" text={t('createAccount.videoTutorial')} />
                </Button>
            </div>
        </div>
    )
}

export default Definition
