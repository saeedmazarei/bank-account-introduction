import { useTranslation } from 'react-i18next'

import IconInBox from '../../../../shared/icon-in-box/IconInBox'
import IconText from '../../../../header/icon-text/IconText'
import SearchBar from '../../../../shared/searchBar/SearchBar'
import Button from '../../../../shared/button/Button'
import styles from './SearchCreateAccount.module.scss'

function SearchCreateAccount() {
    const { t } = useTranslation()
    return (
        <div className={styles['search-and-create-container']}>
            <div className={styles['search-filters-container']}>
                <SearchBar />
                <IconInBox icon={'Filter'} />
            </div>
            <div className={styles['create-delete-account-container']}>
            <IconInBox icon={'printer'} />
            <IconInBox icon={'exel'} />
            <IconInBox icon={'Delete'} />
            <Button>
                <IconText icon="plus.svg" text={t('createAccount.newAccount')} />
            </Button>
            </div>
        </div>
    )
}

export default SearchCreateAccount
