import PropTypes from 'prop-types'
import { Popconfirm } from 'antd'
import { useTranslation } from 'react-i18next'

import { useDisplayedData } from '../../../../store'

function ActionBox({ id }) {
    const { displayedData, setDisplayedData } = useDisplayedData()
    const { t } = useTranslation()

    const deleteRowHandler = () => {
        let newData = [...displayedData]
        newData = newData.filter((item) => item.id !== id)
        setDisplayedData(newData)
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
