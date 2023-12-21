import { useState } from 'react'
import { useDisplayedData } from '../../../store'
import styles from './SearchBar.module.scss'
import CostumCard from '../card/CostumCard'

function SearchBar() {
    const [accountsHistory] = useState([])
    const { displayedData, setDisplayedData } = useDisplayedData()

    accountsHistory.push(displayedData)

    function searchHandler(searchInput) {
        if(searchInput.target.value === '') {
            setDisplayedData(accountsHistory[0])
            return
        }
        setDisplayedData(
            displayedData.filter((item) =>
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
