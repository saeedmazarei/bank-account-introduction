import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nextProvider } from 'react-i18next'
import { ConfigProvider } from 'antd'

import i18n from './i18n/index.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <ConfigProvider direction="rtl">
                <App />
            </ConfigProvider>
        </I18nextProvider>
    </React.StrictMode>,
)
