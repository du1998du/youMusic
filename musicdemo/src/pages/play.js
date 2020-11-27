import React from 'react'
import '../assets/css/play.css'
import imgUrl1 from '../assets/img/disc_default.png'
// 引入jquery
import $ from 'jquery'
import qs from "querystring";

// 引入歌曲url， 歌曲详情， 歌词接口
import { getMusicUrl, getMusicDetail, getLyric } from '../util/axios'
import axios from 'axios'
class Play extends React.Component {
    constructor() {
        super()
        this.state = {
            musicUrl: '',
            songDetail: {},
            lyric: "",
            playTime: '',
            flag: false
        }
        this.audio = React.createRef()
        this.playBtn = React.createRef();
    }
    componentDidMount() {
        // 获取到 歌曲id
        let query = qs.parse(this.props.location.search.slice(1)).id;
        // console.log(query);
        // 并发处理
        axios.all([getMusicUrl({
            id: query
        }), getMusicDetail({
            ids: query
        }), getLyric({
            id: query
        })])
            .then(axios.spread((urlRes, detailRes, lyricRes) => {
                // console.log(urlRes,  'url');
                // console.log(detailRes,  'det');
                // console.log(lyricRes,  'ly');
                // 歌曲地址
                if (urlRes.code === 200) {
                    this.setState({
                        musicUrl: urlRes.data[0].url
                    })
                }
                // 歌曲详情
                if (detailRes.code === 200) {
                    this.setState({
                        songDetail: detailRes.songs[0]
                    })
                }
                // 歌词
                if (lyricRes.code === 200) {
                    // console.log(lyricRes.lrc.lyric);
                    // 将歌词字符串转化为对象格式
                    let lyricInfo = ''
                    let obj = {}
                    lyricInfo = lyricRes.lrc.lyric
                    // 使用正则 匹配
                    let reg = /\[(.*?)](.*)/g;
                    lyricInfo.replace(reg, (a, b, c) => {
                        // a是 原字符串  b是前一部分  c是后一部分
                        b = b.slice(0, 5) //格式化时间，
                        obj[b] = c
                    })
                    // console.log(obj);
                    this.setState({
                        lyric: obj
                    }, () => {
                        // 监听播放器的实时变化
                        // console.log(this.audio.current);
                        let audio = this.audio.current;
                        audio.ontimeupdate = () => {
                            // 获取播放器实时时间
                            // console.log(audio.currentTime);
                            // 将获取到的时间，进行格式化
                            let newTime = this.formatTime(audio.currentTime)
                            // 将没有歌词的时间 剔除
                            if (newTime in this.state.lyric) {
                                // console.log(newTime);
                                this.setState({
                                    playTime: newTime
                                }, () => {
                                    // 调取歌词滚动方法
                                    this.lyricMove()
                                })
                            }
                        }

                    })
                }
            }))

    }
    // 封装格式化时间
    formatTime(timer) {
        let min = (Math.floor(timer / 60) + '').padStart(2, '0')
        let s = (Math.floor(timer % 60) + '').padStart(2, '0')
        return `${min}:${s}`
    }
    // 歌词滚动
    lyricMove() {
        // 判断高亮显示的歌词所在位置  
        // 比较距离offset距离  
        // 使用translateY移动

        let cur = document.getElementsByClassName('cur')[0];
        // console.log(cur);
        // 获取到 所在位置
        let index = $('.inner').children().index(cur);
        // console.log(index);
        let offSet = 32;
        if (cur.offsetTop >= 32) {
            $('.inner').css('transform', `translateY(-${index * offSet}px)`)
        }
    }
    // 控制 播放暂停按钮
    play() {
        this.setState({
            flag: !this.state.flag
        }, () => {
            if (this.state.flag) {
                //如果flag是真 代表暂停 出现图标
                this.playBtn.current.style.display = "block";
                this.audio.current.pause();
                
            }else{
                //如果flag是假 代表播放 没有图标 ，音乐正在播放
                this.playBtn.current.style.display = "none";
                this.audio.current.play();
            }
        })
    }
    render() {
        let { musicUrl, songDetail, lyric, playTime } = this.state
        return (
            <div className="playCont">
                <div className="playBg"></div>
                <div className="playMain">
                    <div className="logo">网易云音乐</div>
                    <div className="playArea">
                        <div className="playWrap">
                            <div className="playDisc" onClick={this.play.bind(this)}>
                                <div className="playTurn">
                                    <div className="rollImg">
                                        <img src={songDetail.al
                                            ? songDetail.al.picUrl : imgUrl1} alt="" />
                                    </div>
                                    <div className="rollLight"></div>
                                </div>

                                <div className="playBtn" ref={this.playBtn}></div>
                            </div>
                            <div>
                                <div className="songInfo">
                                    <h2><span className="songName">{songDetail.name} </span><span className="songName">-</span>
                                        {songDetail.ar ? songDetail.ar.map((arInfo) => {
                                            return <span className="singer" key={arInfo.id}>{arInfo.name}</span>;
                                        }) : ""}</h2>
                                    <div className="songScroll">
                                        <div className="inner">
                                            {/* 把对象转化为数组去循环  
                                            Object.entries() 把对象转化为枚举型数组*/}
                                            {Object.entries(lyric).map((item, i) => {
                                                if (playTime == item[0]) {
                                                    return (<p className="txt cur" key={i}>{item[1]}</p>)
                                                } else {
                                                    return (<p className="txt" key={i}>{item[1]}</p>)
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="musicStreet">
                                <div className="musicStreetImg"></div>
                            </div>
                            <div className="guid">
                                <div className="arrs"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <audio src={musicUrl} autoPlay ref={this.audio}></audio>
                <div className="footer">
                    <div className="footWrap">
                        <button>打 开</button>
                        <button className="download">下 载</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Play
