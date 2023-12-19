import { lazy } from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
const Home = lazy(() => import('./pages/Home'))
import PathConstants from './routes/pathConstants'
const BankAccountDefinition = lazy(() => import('./pages/BankAccountDefinition'))
const Page404 = lazy(() => import('./components/Page404'))
import './App.css'

function App() {
    const router = createBrowserRouter([
        {
            // parent route component
            element: <Layout />,
            // your custom routing error component
            errorElement: <Page404 />,
            // child route components
            children: [
                {
                    path: PathConstants.HOME,
                    element: <Home />,
                },
                // other pages....
                {
                    path: PathConstants.BANKACCOUNTDEINITION,
                    element: <BankAccountDefinition />,
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default App
