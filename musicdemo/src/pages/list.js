import React from 'react'
import '../assets/css/list.css'

// 引入 querystring
import qs from 'querystring'

import { getRankList } from '../util/axios'

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            songList: [],
            playList:''
        }
    }
    componentDidMount() {
        let query = qs.parse(this.props.location.search.slice(1))
        getRankList({ id: query.id }).then(res => {
            // console.log(res.playlist);
            if (res.code == 200) {
                this.setState({
                    playList: res.playlist,
                    songList: res.playlist.tracks
                })
            }
        })
    }
    // 跳转播放页
    goPlay(id){
        this.props.history.push(`/play?id=${id}`)
    }
    render() {
        const {playList} = this.state
         return (
            <div className="list">
                <div className="listHeader">
                    <div className="headerBg" style={{backgroundImage:`url(${playList.coverImgUrl})`}}></div>
                    <div className="headerWrap">
                        <div className="headerLeft">
                            <img src={playList.coverImgUrl} alt="" />
                            <div className="songMenu">歌单</div>
                            <div className="count">{(playList.playCount/10000).toFixed(1)}万</div>
                        </div>
                        <div className="headerRight">
                            <h2>{playList? playList.name: ''}</h2>
                            <div className="auth">
                                <img src={playList.creator?playList.creator.avatarUrl:''} alt="" />{playList.creator? playList.creator.nickname:''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listCont">
                    <h3>歌曲列表</h3>
                    <ul>
                        {this.state.songList.map((item, index) => {
                            return (
                                <li key={item.id} onClick={this.goPlay.bind(this, item.id)}>
                                    <div className="hotNum">{index + 1}</div>
                                    <div className="song">
                                        <div className="sgchf">
                                            <div className="songTitle">
                                                {item.name}
                                                <span className="sgalia"></span>
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
                                </li>
                            )
                        })}
                    </ul>
                    <div className="more-holder"></div>
                    {/* <div className="more">
                        <div className="moreTxt"></div>
                    </div> */}
                </div>
                {/* <div className="footer">
                    <div className="footWrap">
                        <button>收藏歌单</button>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default List
