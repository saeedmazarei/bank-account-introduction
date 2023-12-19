import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Index from './navBar/Index'

function Layout() {
    return (
        <>
            <Index />
            <Header />
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout
