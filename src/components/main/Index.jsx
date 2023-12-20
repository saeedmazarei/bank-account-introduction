import DefinitionAccount from './createBankAccount/Index'
import Routing from './createBankAccount/routing/Routing'

import styles from './Index.module.scss'

function Index() {
    return (
        <div className={`${styles['main-container']} flex hor-center`}>
            <Routing />
            <DefinitionAccount />
        </div>
    )
}

export default Index
