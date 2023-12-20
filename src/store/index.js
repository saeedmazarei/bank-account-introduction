import { create } from 'zustand'

const data = [
    {
        id: 1,
        title: 'بانک ملی شعبه مرکزی شهر تهران به آدرس جردن خیابان گاندی',
        accountCode: '۲۲۲۲',
        accountNumber: '۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲',
        shebaNumber: 'IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۲۳',
        cardNumber: '۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶',
        gateStatus: 'متصل',
        cardReaderStatus: 'غیر متصل',
    },
    {
        id: 2,
        title: 'بانک ملی شعبه مرکزی شهر تهران به آدرس جردن خیابان گاندی',
        accountCode: '۲۲۲۲',
        accountNumber: '۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲',
        shebaNumber: 'IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۴۸۵',
        cardNumber: '۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶',
        gateStatus: 'متصل',
        cardReaderStatus: 'غیر متصل',
    },
    {
        id: 3,
        title: 'بانک ملی شعبه مرکزی شهر تهران به آدرس جردن خیابان گاندی',
        accountCode: '۲۲۲۲',
        accountNumber: '۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲۲',
        shebaNumber: 'IR-۹۸-۰۱۷-۰۰۰۰-۰۰۰۱-۲۳۳۴',
        cardNumber: '۶۰۳۷-۹۹۸۷-۵۵۴۴-۳۳۶۶',
        gateStatus: 'متصل',
        cardReaderStatus: 'غیر متصل',
    },
]

export const useAccountsData = create((set) => ({
    allAccountsData: data,
    setAllAccountsData: (newArray) => set({ allAccountsData: newArray }),
}))

// Slice for array of numbers
export const useSelectedRow = create((set) => ({
    selectedRow: [],
    setSelectedRow: (numArray) => set({ selectedRow: numArray }),
}))