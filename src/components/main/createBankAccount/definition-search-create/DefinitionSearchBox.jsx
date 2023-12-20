import Definition from "./definition/Definition"
import SearchCreateAccount from "./search-create-account/SearchCreateAccount"

import styles from './DefinitionSearchBox.module.scss'

function DefinitionSearchBox() {
    return <div className={styles["definition-search-container"]}>
        <Definition />
        <SearchCreateAccount />
    </div>
}

export default DefinitionSearchBox
