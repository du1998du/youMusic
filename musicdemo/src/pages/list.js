import React from 'react'
import '../assets/css/list.css'

import imgUrl from '../assets/img/8.jpg'
import imgUrl1 from '../assets/img/9.jpg'

class List extends React.Component{
    render(){
        return(
            <div className="list">
                <div className="listHeader">
                    <div className="headerBg"></div>
                    <div className="headerWrap">
                        <div className="headerLeft">
                            <img src={imgUrl} alt="" />
                            <div className="songMenu">歌单</div>
                            <div className="count">22.4万</div>
                        </div>
                        <div className="headerRight">
                            <h2>我对你又何止是执迷不悟</h2>
                            <div className="auth">
                                <img src={imgUrl1} alt="" />忌仞
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list">
                    
                </div>
            </div>
        )
    }
}

export default List
