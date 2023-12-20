import { Table } from 'antd'
import { useTranslation } from 'react-i18next'
import ActionBox from './ActionBox'
import { useAccountsData, useSelectedRow } from '../../../../store'

function DataTable() {
    const { allAccountsData } = useAccountsData()
    const { selectedRow, setSelectedRow } = useSelectedRow()
    const { t } = useTranslation()

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRow(newSelectedRowKeys)
    }

    const rowSelection = {
        selectedRow,
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
                    selectedRow(newSelectedRowKeys)
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
                    selectedRow(newSelectedRowKeys)
                },
            },
        ],
    }
    const columns = [
        {
            title: t('createAccount.accountTitle'),
            width: 150,
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
            render: (record) => <ActionBox id={record.id} />,
        },
    ]
    return (
        <Table
            columns={columns}
            dataSource={allAccountsData}
            rowKey="id"
            rowSelection={rowSelection}
            scroll={{ x: 1380 }}
            style={{ width: '1100px', marginTop: '2%' }}
        />
    )
}

export default DataTable
