import http from './axios'

// 获取轮播图接口
export function getBanner(){
    return http.get('/banner')
}
// 推荐歌单接口
export function getRecMenu(params){
    return http.get('/personalized', {
        params
    })
}

// 最新音乐接口
export function getNewMusic(){
    return http.get('/personalized/newsong')
}

// 获取热歌榜数据
export function getRank(){
    return http.get('/toplist/detail')
}

// 获取歌单中歌曲列表 和热歌榜数据
export function getRankList(params){
    return http.get('/playlist/detail', {
        params
    })
}

// 热搜关键词
export function getHotSearchWord(){
    return http.get('/search/hot/detail')
}

// 封装搜索接口
export function getSearch(params){
    return http.get('/search', {
        params
    })
}

// 封装 歌曲url接口
export function getMusicUrl(params){
    return http.get('/song/url', {
        params
    })
}

// 封装 歌曲详情接口
export function getMusicDetail(params){
    return http.get('/song/detail', {
        params
    })
}

// 封装 歌词接口
export function getLyric(params){
    return http.get('/lyric', {
        params
    })
}

