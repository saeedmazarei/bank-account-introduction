import Card from '../card/Card'
import styles from './SearchBar.module.scss'

function SearchBar() {
    return (
        <Card className={styles.card}>
                <img src="/assets/images/Search.svg" />
                <input type="text" />
        </Card>
    )
}

export default SearchBar
