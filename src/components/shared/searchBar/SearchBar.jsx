import { useState } from 'react'
import { useAccountsData } from '../../../store'
import styles from './SearchBar.module.scss'
import CostumCard from '../card/CostumCard'

function SearchBar() {
    const [accountsHistory] = useState([])
    const { allAccountsData, setAllAccountsData } = useAccountsData()

    accountsHistory.push(allAccountsData)

    function searchHandler(searchInput) {
        if(searchInput.target.value === '') {
            setAllAccountsData(accountsHistory[0])
            return
        }
        setAllAccountsData(
            allAccountsData.filter((item) =>
                Object.values(item).some(
                    (value) =>
                        typeof value === 'string' && value.includes(searchInput.target.value),
                ),
            ),
        )
    }
    return (
        <CostumCard className={styles.card}>
            <img src="/assets/images/Search.svg" />
            <input type="text" onChange={searchHandler} />
        </CostumCard>
    )
}

export default SearchBar
