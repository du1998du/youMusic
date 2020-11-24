import React from 'react'

import '../../assets/css/search.css'

import img1 from '../../assets/img/zj.jpg'

class SearchRes extends React.Component {
    constructor(){
        super()
        this.state={
            songList: [
                {
                    id: 1,
                    name:'他不懂',
                    singer:'张杰',
                    desc:'爱，不解释'
                },
                {
                    id: 2,
                    name:'少年中国说(Live)',
                    singer:'张杰',
                    desc:'2018未·LIVE巡回演唱会鸟巢站LIVE专辑'
                },
                {
                    id: 3,
                    name:'最美的太阳',
                    singer:'张杰',
                    desc:'最美的太阳'
                },
                {
                    id: 4,
                    name:'天下',
                    singer:'张杰',
                    desc:'明天过后'
                },
                {
                    id: 5,
                    name:'明天过后',
                    singer:'张杰',
                    desc:'明天过后'
                },
                {
                    id: 6,
                    name:'我们都一样',
                    singer:'张杰',
                    desc:'明天过后'
                },
                {
                    id: 7,
                    name:'这,就是爱',
                    singer:'张杰',
                    desc:'这,就是爱'
                },
                {
                    id: 8,
                    name:'看月亮爬上来',
                    singer:'张杰',
                    desc:'穿越三部曲'
                },
                {
                    id: 9,
                    name:'仰望星空',
                    singer:'张杰',
                    desc:'明天过后'
                },
                {
                    id: 10,
                    name:'逆战',
                    singer:'张杰',
                    desc:'中国新声代第二季 第十三期'
                },
            ]
        }
    }
    render() {
        return (
            <div className="searchRes">
                <div className="resList">
                    <h3 className="searchTit">最佳匹配</h3>
                    <ul>
                        <li>
                            <div className="searchLink">
                                <img src={img1} alt="" />
                                <div className="info">歌手:<span className="highlight">张杰</span> <span> (Jason Zhang)</span></div>
                                <i></i>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="songList">
                    <ul>
                        {this.state.songList.map(item => {
                            return(<li key={item.id}>
                                <div className="song">
                                    <div className="sgchf">
                                        <div className="songTitle">
                                            {item.name}
                                            <span className="sgalia"></span>
                                        </div>
                                        <div className="songInfo">
                                            <i className="sq bgIcon"></i>
                            <span className="highlight">{item.singer}</span>-{item.desc}
                                        </div>
                                    </div>
                                    <div className="play bgIcon"></div>
                                </div>
                            </li>)
                        })}
                    </ul>
                </div>
            </div>

        )
    }
}

export default SearchRes