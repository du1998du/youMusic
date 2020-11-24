import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'

import Search from '../views/search'
import Rank from '../views/rank'
import ReCommend from '../views/home'
// 引入css样式
import '../assets/css/index.css'

import logo from '../assets/img/hLogo.png'

class Index extends React.Component {
    render() {
        return (
            <div className="index">
                <div className="indexCont">
                    <div className="header">
                        <img src={logo} alt="" />
                        <div className="app">下载APP</div>
                    </div>
                    <div className="navBar">
                        <NavLink activeClassName='active' to="/index/recommend">
                            <div className="navTit">
                                <span>推荐音乐</span>
                                <em className="border"></em>
                            </div>
                        </NavLink>
                        <NavLink activeClassName="active" to="/index/rank">
                            <div className="navTit">
                                <span>热歌榜</span>
                                <em className="border"></em>
                            </div>
                        </NavLink>
                        <NavLink activeClassName="active" to="/index/search">
                            <div className="navTit">
                                <span>搜索</span>
                                <em className="border"></em>
                            </div>
                        </NavLink>
                    </div>
                </div>

                <Switch>
                    <Route path="/index/recommend" component={ReCommend} activeClassName="active"></Route>
                    <Route path="/index/rank" component={Rank} activeClassName="active"></Route>
                    <Route path="/index/search" component={Search} activeClassName="active"></Route>
                    <Redirect to="/index/recommend"></Redirect>
                </Switch>
            </div>
        )
    }
}

export default Index
