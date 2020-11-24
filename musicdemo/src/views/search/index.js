import React from 'react'
import '../../assets/css/search.css'

import SearchRes from './searchRes'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            hotSearchList: [
                {
                    id: 1,
                    searchName: '耗子尾汁'
                },
                {
                    id: 2,
                    searchName: '执迷不悟'
                },
                {
                    id: 3,
                    searchName: '陈奕迅新歌'
                },
                {
                    id: 4,
                    searchName: '杀死那个石家庄人'
                },
                {
                    id: 5,
                    searchName: '薛之谦'
                },
                {
                    id: 6,
                    searchName: '林俊杰'
                },
                {
                    id: 7,
                    searchName: '会不会'
                },
                {
                    id: 8,
                    searchName: '说散就散'
                },
                {
                    id: 9,
                    searchName: '笑纳'
                },
                {
                    id: 10,
                    searchName: '我很好'
                },
            ],
            isShow: false, //清空按钮
            val: '',  // 表单的数据
            isChange: true  // 组件切换
        }
    }
    // 控制清除按钮
    changeVal(e) {
        this.setState({
            val: e.target.value,
        }, () => {
            if (this.state.val != '') {
                this.setState({
                    isShow: true
                })
            }
        })
    }
    // 清空表单数据
    clearIpt(){
        this.setState({
            val: '',
            isShow: false,
            isChange: true
        })
    }
    // 点击enter  组件切换
    enter(e){
        // console.log(e);
        // console.log(e.keyCode);
        if(e.keyCode === 13){
            this.setState({
                isChange: false
            })
        }
    }

    render() {
        return (
            <div className="search">
                <div className="searchCont">
                    <form>
                        <div className="iptBox">
                            <div className="searchIcon"></div>
                            <input type="text" value={this.state.val} placeholder="搜索歌曲、歌手、专辑" onInput={this.changeVal.bind(this)} onKeyUp={this.enter.bind(this)} />
                            <div className="clearIcon">
                                {this.state.isShow ? (<i onClick={this.clearIpt.bind(this)}></i>) : null}
                            </div>
                        </div>
                    </form>
                    {this.state.isChange ? (<div className="default">
                        <div className="hotSearch">
                            <h3 className="searchTit">热门搜索</h3>
                            <ul>
                                {this.state.hotSearchList.map(item => {
                                    return (
                                        <li key={item.id}>{item.searchName}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>) : (<SearchRes></SearchRes>)}
                    
                    {/*  */}
                </div>
            </div>
        )
    }
}

export default Search
