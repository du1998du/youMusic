import React from 'react'
import '../assets/css/play.css'
import imgUrl1 from '../assets/img/7.jpg'
class Play extends React.Component {
    render() {
        return (
            <div className="playCont">
                <div className="playBg"></div>
                <div className="playMain">
                    <div className="logo">网易云音乐</div>
                    <div className="playArea">
                        <div className="playWrap">
                            <div className="playDisc">
                                <div className="playTurn">
                                    <div className="rollImg">
                                        <img src={imgUrl1} alt="" />
                                    </div>
                                    <div className="rollLight"></div>
                                </div>

                                <div className="playBtn"></div>
                            </div>
                            <div>
                            <div className="songInfo">
                                <h2><span className="songName">APPLE </span><span className="songName">-</span><span className="singer"> 杨飞机</span></h2>
                                <div className="songScroll">
                                    <div className="inner">
                                        <p className="txt">作词 : THREE</p>
                                        <p className="txt">作曲 : THREE</p>
                                        <p className="txt">作词 : THREE</p>
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
