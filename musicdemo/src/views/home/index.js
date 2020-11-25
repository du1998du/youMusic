import React from 'react'
import '../../assets/css/recommend.css'
import { NavLink } from 'react-router-dom'

import imgUrl from '../../assets/img/1.jpg'
import imgUrl1 from '../../assets/img/2.jpg'
import imgUrl2 from '../../assets/img/3.jpg'
import imgUrl3 from '../../assets/img/4.jpg'
import fLogo from '../../assets/img/fLogo.png'

class ReCommend extends React.Component {
    constructor() {
        super();
        this.state = {
            menuList: [
                {
                    id: 1,
                    img: imgUrl,
                    name: "欧美丨真诚说唱，被遗忘在世外仙境的珠宝wsdfdsfsdf鼎折覆餗",
                },
                {
                    id: 2,
                    img: imgUrl1,
                    name: "我想把这些甜甜的歌都唱给你听",
                },
                {
                    id: 3,
                    img: imgUrl2,
                    name: "『精选翻唱』万人血书求完整～",
                },
                {
                    id: 4,
                    img: imgUrl3,
                    name: "我对你又何止是执迷不悟",
                },
                {
                    id: 5,
                    img: imgUrl1,
                    name: "我想把这些甜甜的歌都唱给你听",
                },
                {
                    id: 6,
                    img: imgUrl2,
                    name: "『精选翻唱』万人血书求完整～",
                },
            ],
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
            ],
        }
    }
    render() {
        return (
            <div className="recommend">
                <div className="container">
                    <div className="rem_title">推荐歌单</div>
                    <ul className="rem_ul">
                        {this.state.menuList.map(item => {
                            return (<li key={item.id}>
                                <NavLink to="/list">
                                    <div className="imgBox">
                                        <img src={item.img} alt="" />
                                        <div className="count">1111</div>
                                    </div>
                                    <p>{item.name}</p>
                                </NavLink>

                            </li>)
                        })}
                    </ul>
                    <div className="rem_title">最新音乐</div>
                    <div className="remd_newsg">
                        <ul>
                            {this.state.songList.map(item => {
                                return (<li key={item.id}>
                                    <NavLink to="/play">
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
                                    </NavLink>

                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className="footer">
                        <div className="flogo">
                            <img src={fLogo} alt="" />
                        </div>
                        <p className="open">打开APP，发现更多好音乐&gt;</p>
                        <p className="copyright">网易公司版权所有©1997-2020 杭州乐读科技有限公司运营</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReCommend
