import React from 'react'
import '../../assets/css/recommend.css'
import { NavLink } from 'react-router-dom'
import fLogo from '../../assets/img/fLogo.png'

// 引入 swiper
import Swiper from "swiper"
import "swiper/css/swiper.css"

// 引入axios
import axios from 'axios'
// 引入封装好的 推荐歌单、最新音乐接口
import { getRecMenu, getNewMusic, getBanner } from '../../util/axios'

class ReCommend extends React.Component {
    constructor() {
        super();
        this.state = {
            menuList: [],
            songList: [],
            bannerList: []
        }
    }
    componentDidMount() {
        axios.all([getRecMenu({ limit: 6 }), getNewMusic(), getBanner()]).then(axios.spread((menuRes, musicRes, bannerRes) => {

            // 推荐菜单
            if (menuRes.code === 200) {
                this.setState({
                    menuList: menuRes.result
                })
            }
            // 最新音乐
            if (musicRes.code === 200) {
                // console.log(musicRes);
                this.setState({
                    songList: musicRes.result
                })
            }
            // 轮播图
            if (bannerRes.code === 200) {
                this.setState({
                    bannerList: bannerRes.banners
                }, () => {
                    new Swiper('.swiper-container', {
                        loop: true,
                        autoplay: {
                            delay: 2000,
                        },
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    });
                })
            }
        }))
    }
    // 跳转播放页
    goPlay(id) {
        this.props.history.push(`/play?id=${id}`)
    }
    render() {
        return (
            <div className="recommend">
                <div className="container">
                    <div className="banner">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {this.state.bannerList.map(item => {
                                    return (
                                        <div className="swiper-slide" key={item.imageUrl}>
                                            <img src={item.imageUrl} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="rem_title">推荐歌单</div>
                    <ul className="rem_ul">
                        {this.state.menuList.map(item => {
                            return (<li key={item.id}>
                                <NavLink to={'/list?id=' + item.id}>
                                    <div className="imgBox">
                                        <img src={item.picUrl} alt="" />
                                        <div className="count">{(item.playCount / 10000).toFixed(1)}万</div>
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
                                return (<li key={item.id} onClick={this.goPlay.bind(this)}>
                                    <div className="song">
                                        <div className="sgchf">
                                            <div className="songTitle">
                                                {item.name}
                                                <span className="sgalia">
                                                    {item.song.alias.map(temp => {
                                                        if (temp === '') {
                                                            return (<span key={temp}></span>)
                                                        } else {
                                                            return (<span key={temp}>({temp})</span>)
                                                        }
                                                    })}
                                                </span>
                                            </div>
                                            <div className="songInfo">
                                                <i className="sq bgIcon"></i>
                                                <div className="artist">{item.song.artists.map((artist, index) => {
                                                    // 判断是不是数组最后一个元素
                                                    if (index === item.song.artists.length - 1) {
                                                        return (<span key={artist.id}>{artist.name} - {item.name}</span>)
                                                    } else {
                                                        return (<span key={artist.id}>{artist.name} / </span>)
                                                    }
                                                })}</div>

                                            </div>
                                        </div>
                                        <div className="play bgIcon"></div>
                                    </div>
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
