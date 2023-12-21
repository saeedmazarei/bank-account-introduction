import { Popconfirm, Modal } from 'antd'
import { useTranslation } from 'react-i18next'

import { useAccountsData, useSelectedRow } from '../../../../../store'
import IconInBox from '../../../../shared/icon-in-box/IconInBox'
import IconText from '../../../../header/icon-text/IconText'
import SearchBar from '../../../../shared/searchBar/SearchBar'
import Button from '../../../../shared/button/Button'
import styles from './SearchCreateAccount.module.scss'
import { useState } from 'react'
import FiltersModal from './modal/FiltersModal'

function SearchCreateAccount() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { allAccountsData, setAllAccountsData } = useAccountsData()
    const { selectedRow } = useSelectedRow()
    const { t } = useTranslation()

    const deleteRowTableHandler = () => {
        let newData = [...allAccountsData]
        newData = newData.filter((item) => !selectedRow.includes(item.id))
        setAllAccountsData(newData)
    }

    const modalHandler = () => setIsModalOpen(true)

    const handleCancel = () => setIsModalOpen(false)

    return (
        <>
            <Modal
                title={<IconInBox icon="Filter" text={t('createAccount.filters')} />}
                open={isModalOpen}
                onOk={handleCancel}
                onCancel={handleCancel}
                footer={null}
                width={368}
            >
                <FiltersModal setIsModalOpen={setIsModalOpen} />
            </Modal>
            <div className={styles['search-and-create-container']}>
                <div className={styles['search-filters-container']}>
                    <SearchBar />
                    <IconInBox icon={'Filter'} onClick={modalHandler} />
                </div>
                <div className={styles['create-delete-account-container']}>
                    <IconInBox icon={'printer'} />
                    <IconInBox icon={'exel'} />
                    <Popconfirm
                        title={t('base.deleteAccounts')}
                        description={t('base.areYouSureForDelete')}
                        onConfirm={deleteRowTableHandler}
                        okText={t('base.yes')}
                        cancelText={t('base.no')}
                    >
                        <IconInBox
                            icon={'Delete'}
                            style={{ backgroundColor: selectedRow.length > 0 && 'red' }}
                        />
                    </Popconfirm>
                    <Button>
                        <IconText icon="plus.svg" text={t('createAccount.newAccount')} />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default SearchCreateAccount
