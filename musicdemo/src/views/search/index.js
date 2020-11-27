import React from 'react'
import '../../assets/css/search.css'
// 引入路由相关组件
import { NavLink } from 'react-router-dom'

// 引入热搜关键词 ,搜索接口
import { getHotSearchWord, getSearch } from '../../util/axios'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            hotSearchList: [],
            val: '',  // 表单的数据
            songList: []
        }
        this.ipt = React.createRef()
    }

    componentDidMount() {
        getHotSearchWord().then(res => {
            // console.log(res);
            if (res.code === 200) {
                this.setState({
                    hotSearchList: res.data.filter((item, i) => i < 10)
                })
            }
        })
    }
    // 封装去搜索列表
    goSearchList(keywords) {
        this.ipt.current.value = keywords;
        getSearch({ keywords }).then(res => {
            // console.log(res);
            if (res.code == 200) {
                this.setState({
                    songList: res.result.songs
                })
            }
        })
    }
    // 点击 清空
    clear() {
        // 让输入框变为空
        this.ipt.current.value = ''
        // 歌曲列表置为空
        this.setState({
            songList: []
        })
    }
    // 点击回车 进行搜索
    enter(e) {
        // 判断是不是回车键 并且输入框不能为空
        if (e.keyCode === 13 && e.target.value !== '') {
            this.goSearchList(e.target.value)
        }
    }
    // 根据用户的输入  进行搜索
    changeVal(e) {
        if (e.target.value === '') {
            // 如果输入为空， 调取清空
            this.clear();
            return
        }
        this.goSearchList(e.target.value)
    }
    //跳转播放方法
    toPlay(id) {
        this.props.history.push(`/play?id=${id}`)
    }
    render() {
        // console.log(this.ipt.current);
        // 判断清除图标是否显示
        let flag = false
        if (this.ipt.current) {
            flag = this.ipt.current.value
        }
        return (
            <div className="search">
                <div className="searchCont">
                    <form>
                        <div className="iptBox">
                            <div className="searchIcon"></div>
                            <input type="text" placeholder="搜索歌曲、歌手、专辑" ref={this.ipt} onKeyUp={this.enter.bind(this)} onChange={this.changeVal.bind(this)} />
                            <div className="clearIcon">
                                {flag ? (<i onClick={this.clear.bind(this)}></i>) : null}
                            </div>
                        </div>
                    </form>
                    {/* 热搜词 */}
                    {/* 判断  搜索歌列表是否为空，为空显示热搜关键词， 反之显示 歌曲列表 */}
                    {this.state.songList == 0 ? (<div className="default">
                        <div className="hotSearch">
                            <h3 className="searchTit">热门搜索</h3>
                            <ul>
                                {this.state.hotSearchList.map(item => {
                                    return (
                                        <li onClick={this.goSearchList.bind(this, item.searchWord)} key={item.searchWord}>{item.searchWord}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>) : ''}

                    {/* 搜索列表 */}
                    <div className="searchRes">
                        <div className="songList">
                            <ul>
                                {this.state.songList.map(item => {
                                    return (<li key={item.id} onClick={this.toPlay.bind(this, item.id)}>
                                            <div className="song">
                                                <div className="sgchf">
                                                    <div className="songTitle">
                                                        {item.name}
                                                        <span className="sgalia"></span>
                                                    </div>
                                                    <div className="songInfo">
                                                        <i className="sq bgIcon"></i>
                                                        <div className="artist">{item.artists.map((ar, index) => {
                                                            if (index === item.artists.length - 1) {
                                                                return (<span key={ar.id}>{ar.name}</span>)
                                                            } else {
                                                                return (<span key={ar.id}>{ar.name} / </span>)
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
