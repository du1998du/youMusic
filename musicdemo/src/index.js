// 导入核心库 和dom库
import React from 'react'
import ReactDOM from 'react-dom'

// history 模式
// import { BrowserRouter } from 'react-router-dom'

// hash 模式
import { HashRouter } from 'react-router-dom'

// 引入组件
import App from './App'

// 引入 rem.js
import './assets/js/remScale'
// 引入重置样式表
import './assets/css/reset.css'

ReactDOM.render(
    // <BrowserRouter>
    <HashRouter>
        <React.StrictMode>
            <App></App>
        </React.StrictMode>
    </HashRouter>

    // </BrowserRouter>
    ,
    document.getElementById('root')
)