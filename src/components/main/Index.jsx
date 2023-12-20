import Routing from "./createBankAccount/routing/Routing"
import DataTable from "./createBankAccount/table/DataTable"

import styles from './Index.module.scss'

function Index() {
    return <div className={`${styles['main-container']} flex hor-center`}>
        <Routing />
        <DataTable />
        </div>
}

export default Index
