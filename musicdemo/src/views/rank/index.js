import React from 'react'
import '../../assets/css/rank.css'
import { NavLink } from 'react-router-dom'

import { getRank, getRankList } from '../../util/axios'
class Rank extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: [],
            updateTime: 0
        }
    }
    componentDidMount() {
        getRank().then(res => {
            // console.log(res);
            if (res.code === 200) {
                // let a = res.list[3].id
                // console.log(a);
                getRankList({ id: res.list[3].id }).then(result => {
                    if (result.code === 200) {
                        this.setState({
                            songList: result.playlist.tracks.filter((item,i)=>i<20),
                            updateTime:result.playlist.updateTime
                        })
                    }
                })
            }
        })
    }
    // 跳转播放页
    goPlay(id) {
        this.props.history.push(`/play?id=${id}`)
    }
    //封装一个时间转化函数
    formateTime(timer) {
        let date = new Date(timer);
        //获取年份
        let year = date.getFullYear();
        //获取月份
        let month = (date.getMonth() + 1 + "").padStart(2, "0");
        //获取天数
        let day = (date.getDate() + "").padStart(2, "0");
        return `${month}月${day}日`;
    }
    render() {
        return (
            <div className="rank">
                <div className="rankCont">
                    <div className="hotHeader">
                        <div className="headerBox">
                            <div className="hotIcon bgIcon"></div>
                            <p className="date">更新日期：{this.formateTime(this.state.updateTime)}</p>
                        </div>
                    </div>
                    <div className="hotList">
                        <ul>
                            {this.state.songList.map((item, index) => {
                                return (<li key={item.id} onClick={this.goPlay.bind(this, item.id)}>
                                    <div className="hotNum">{(index + 1) < 10 ? (index + 1).toString().padStart(2, '0') : (index + 1)}</div>
                                    <div className="song">
                                        <div className="sgchf">
                                            <div className="songTitle">
                                                {item.name}
                                                <span className="sgalia">
                                                    {item.alia.map(temp => {
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
                                                <div className="artist">{item.ar.map((artist, index) => {
                                                    if (index === item.ar.length - 1) {
                                                        return (<span key={artist.id}>{artist.name} - {item.al.name}</span>)
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
                    <div className="hotFoot">
                        <span>查看完整榜单</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rank
