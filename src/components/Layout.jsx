import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Index from './navBar/Index'

function Layout() {
    return (
        <>
            <Index />
            <div className="header-and-main-container flex">
                <Header />
                <main>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </>
    )
}

export default Layout
