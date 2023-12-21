import { useState } from 'react'

import PropTypes from 'prop-types'
import { Form, Select, Button } from 'antd'
import { useTranslation } from 'react-i18next'

import { useDisplayedData } from '../../../../../../store'
import styles from './FiltersModal.module.scss'

function FiltersModal({ setIsModalOpen }) {
    const [accountsHistory] = useState([])
    const { displayedData, setDisplayedData } = useDisplayedData()
    const { t } = useTranslation()

    accountsHistory.push(displayedData)

    const cancelHandler = () => setIsModalOpen(false)

    function deleteFilterHandler() {
        setDisplayedData(accountsHistory[0])
        setIsModalOpen(false)
    }

    function filterHandler(value) {
        setDisplayedData(
            displayedData.filter((item) => {
                return (
                    item.gateStatus === value.gateStatus &&
                    item.cardReaderStatus === value.cardReaderStatus
                )
            }),
        )
        setIsModalOpen(false)
    }

    return (
        <div className={styles['modal-container']}>
            <Form
                layout="vertical"
                onFinish={filterHandler}
                initialValues={{
                    cardReaderStatus: 'متصل',
                    gateStatus: 'متصل',
                }}
            >
                <div className={styles['filters-container']}>
                    <Form.Item
                        label={t('createAccount.cardReaderStatus')}
                        name="cardReaderStatus"
                        style={{ width: '100%' }}
                    >
                        <Select
                            options={[
                                {
                                    value: 'متصل',
                                    label: 'متصل',
                                },
                                {
                                    value: 'غیر متصل',
                                    label: 'غیر متصل',
                                },
                            ]}
                            style={{ fontFamily: 'IRANYekan' }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={t('createAccount.gateStatus')}
                        name="gateStatus"
                        style={{ width: '100%' }}
                    >
                        <Select
                            options={[
                                {
                                    value: 'متصل',
                                    label: 'متصل',
                                },
                                {
                                    value: 'غیر متصل',
                                    label: 'غیر متصل',
                                },
                            ]}
                            style={{ fontFamily: 'IRANYekan' }}
                        />
                    </Form.Item>
                    <span onClick={deleteFilterHandler} className={styles.span}>{t('createAccount.deleteAllFilters')}</span>
                </div>
                <div className={styles['button-container']}>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: '154px', fontFamily: 'IRANYekan' }}
                        >
                            {t('base.confirm')}
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button style={{ width: '154px', fontFamily: 'IRANYekan' }} onClick={cancelHandler}>
                            {t('base.cancel')}
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

FiltersModal.propTypes = {
    setIsModalOpen: PropTypes.func,
}

export default FiltersModal
