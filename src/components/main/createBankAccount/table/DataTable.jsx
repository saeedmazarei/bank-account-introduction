import { useState } from 'react'

import { Table } from 'antd'
import { useTranslation } from 'react-i18next'
import ActionBox from './ActionBox'

const data = [
    {
        key: '1',
        title: 'بانک ملی شعبه مرکزی شهر تهران به آدرس جردن خیابان گاندی',
        accountCode: '۲۲۲۲',
        accountNumber: '۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲',
        shebaNumber: 'IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۲۳',
        cardNumber: '۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶',
        gateStatus: 'متصل',
        cardReaderStatus: 'غیر متصل',
    },
    {
        key: '2',
        title: 'بانک ملی شعبه مرکزی شهر تهران به آدرس جردن خیابان گاندی',
        accountCode: '۲۲۲۲',
        accountNumber: '۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲',
        shebaNumber: 'IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۴۸۵',
        cardNumber: '۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶',
        gateStatus: 'متصل',
        cardReaderStatus: 'غیر متصل',
    },
    {
        key: '3',
        title: 'بانک ملی شعبه مرکزی شهر تهران به آدرس جردن خیابان گاندی',
        accountCode: '۲۲۲۲',
        accountNumber: '۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲',
        shebaNumber: 'IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۳۴',
        cardNumber: '۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶',
        gateStatus: 'متصل',
        cardReaderStatus: 'غیر متصل',
    },
]

function DataTable() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const { t } = useTranslation()

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys)
        setSelectedRowKeys(newSelectedRowKeys)
    }
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = []
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false
                        }
                        return true
                    })
                    setSelectedRowKeys(newSelectedRowKeys)
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = []
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true
                        }
                        return false
                    })
                    setSelectedRowKeys(newSelectedRowKeys)
                },
            },
        ],
    }
    const columns = [
        {
            title: t('createAccount.accountTitle'),
            width: 130,
            dataIndex: 'title',
            fixed: 'left',
            render: (text) => (text.length > 20 ? `${text.substring(0, 20)}...` : text),
        },
        {
            title: t('createAccount.accountCode'),
            dataIndex: 'accountCode',
            width: 90,
            sorter: true,
        },
        {
            title: t('createAccount.accountNumber'),
            dataIndex: 'accountNumber',
            width: 160,
        },
        {
            title: t('createAccount.shebaNumber'),
            dataIndex: 'shebaNumber',
            width: 190,
        },
        {
            title: t('createAccount.cardNumber'),
            dataIndex: 'cardNumber',
            width: 170,
        },
        {
            title: t('createAccount.gateStatus'),
            dataIndex: 'gateStatus',
            width: 100,
        },
        {
            title: t('createAccount.cardReaderStatus'),
            dataIndex: 'cardReaderStatus',
            width: 120,
        },
        {
            title: 'Action',
            fixed: 'right',
            width: 120,
            render: () => <ActionBox />,
        },
    ]
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="key"
            rowSelection={rowSelection}
            scroll={{ x: 1180 }}
            style={{ width: '1100px' }}
        />
    )
}

export default DataTable
