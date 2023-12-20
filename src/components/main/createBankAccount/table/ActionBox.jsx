import PropTypes from 'prop-types'
import { Popconfirm } from 'antd'
import { useTranslation } from 'react-i18next'

import { useAccountsData } from '../../../../store'

function ActionBox({ id }) {
    const { allAccountsData, setAllAccountsData } = useAccountsData()
    const { t } = useTranslation()

    const deleteRowHandler = () => {
        let newData = [...allAccountsData]
        newData = newData.filter((item) => item.id !== id)
        setAllAccountsData(newData)
    }

    return (
        <div className="flex space-around ver-center">
            <img src="/assets/images/Resize.svg" />
            <img src="/assets/images/Edit.svg" />
            <Popconfirm
                title={t('base.deleteAccounts')}
                description={t('base.areYouSureForDelete')}
                onConfirm={deleteRowHandler}
                okText={t('base.yes')}
                cancelText={t('base.no')}
            >
                <img src="/assets/images/Delete.svg" />
            </Popconfirm>
        </div>
    )
}

ActionBox.propTypes = {
    id: PropTypes.number,
}

export default ActionBox
