import { Form, Select, Button } from 'antd'
import { useTranslation } from 'react-i18next'

import styles from './FiltersModal.module.scss'

function FiltersModal() {
    const { t } = useTranslation()
    function filterHandler(value) {
        console.log(value)
    }
    return (
        <div className={styles['modal-container']}>
            <Form
                layout="vertical"
                onFinish={filterHandler}
                initialValues={{
                    cardReaderStatus: 'فعال',
                    gateStatus: 'فعال',
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
                                    value: 'فعال',
                                    label: 'فعال',
                                },
                                {
                                    value: 'غیرفعال',
                                    label: 'غیرفعال',
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
                                    value: 'فعال',
                                    label: 'فعال',
                                },
                                {
                                    value: 'غیرفعال',
                                    label: 'غیرفعال',
                                },
                            ]}
                            style={{ fontFamily: 'IRANYekan' }}
                        />
                    </Form.Item>
                    <span className={styles.span}>{t('createAccount.deleteAllFilters')}</span>
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
                        <Button style={{ width: '154px', fontFamily: 'IRANYekan' }}>
                            {t('base.cancel')}
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default FiltersModal
