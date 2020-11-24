import Index from './pages/index'
import List from './pages/list'
import Play from './pages/play'
import {Switch, Route, Redirect} from 'react-router-dom'

function App (){
    return(
        <div className="mainCom">
            {/* <h1>这是主组件</h1> */}
            {/* <Home></Home> */}
            {/* <Father></Father> */}

            {/* 一级路由出口 */}
            <Switch>
                <Route path="/index" component={Index}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/play" component={Play}></Route>
                {/* 路由重定向 */}
                <Redirect to="/index"></Redirect>
            </Switch>
        </div>
    )
}

export default App