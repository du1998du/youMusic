import React from 'react'

import '../../assets/css/rank.css'

class Rank extends React.Component {
    constructor(){
        super()
        this.state={
            songList: [
                {
                    id: 1,
                    name: '失眠飞行',
                    info: '(原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)',
                    singer: '一条小团团OvO-失眠飞行'
                },
                {
                    id: 2,
                    name: 'Never(狼殿下战爱版预告宣传曲)',
                    singer: '卢苑仪-Never(狼殿下战爱版预告宣传曲)'
                },
                {
                    id: 3,
                    name: '天性使燃',
                    singer: 'Higher Brothers-天性使燃'
                },
                {
                    id: 4,
                    name: '地球上最无聊的下午',
                    singer: '黄鸿升-地球上最无聊的下午'
                },
                {
                    id: 5,
                    name: 'Hey Boy',
                    singer: 'Sia-Hey Boy'
                },
                {
                    id: 6,
                    name: 'NO关心（日记版）',
                    singer: '汪睿-NO关心'
                },
                {
                    id: 7,
                    name: '森林巴士',
                    singer: '傲七爷-森林巴士'
                },
                {
                    id: 8,
                    name: '我愿意',
                    info: '(影视剧《最初的相遇，最后的别离》中文主题曲)',
                    singer: '摩登兄弟刘宇宁-我愿意'
                },
                {
                    id: 9,
                    name: '如果当时2020',
                    info: '(不曾遗忘的符号)',
                    singer: '许嵩 / 朱婷婷-如果当时2020'
                },
                {
                    id: 10,
                    name: '面朝大海',
                    singer: '姚晨 / 福禄寿FloruitShow-面朝大海'
                }
            ]
        }
    }
    render() {
        return (
            <div className="rank">
                <div className="rankCont">
                    <div className="hotHeader">
                        <div className="headerBox">
                            <div className="hotIcon bgIcon"></div>
                            <p className="date">更新日期：11月19日</p>
                        </div>
                    </div>
                    <div className="hotList">
                        <ul>
                            {this.state.songList.map(item => {
                                return(<li key={item.id}>
                                    <div className="hotNum">{item.id<10 ? item.id.toString().padStart(2, '0') : item.id}</div>
                                    <div className="song">
                                        <div className="sgchf">
                                            <div className="songTitle">
                                                {item.name}
                                                <span className="sgalia">{item.info}</span>
                                            </div>
                                            <div className="songInfo">
                                                <i className="sq bgIcon"></i>
                                                    {item.singer}
                                            </div>
                                        </div>
                                        <div className="play bgIcon"></div>
                                    </div>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className="hotFoot">
                        <span>查看完整榜单</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rank
