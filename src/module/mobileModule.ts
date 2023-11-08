import axios from 'axios'

export interface DrawReq {
    drwtNo1: number
    drwtNo2: number
    drwtNo3: number
    drwtNo4: number
    drwtNo5: number
    drwtNo6: number
    year: number
}

export interface DrawRes {
    result: DrawInfo[]
    input: DrawInfo
}

export interface DrawInfo {
    drw_no: number //회차
    drwt_no1: number
    drwt_no2: number
    drwt_no3: number
    drwt_no4: number
    drwt_no5: number
    drwt_no6: number
    bnus_no: number
    win_rank: number
    win_pay: string
    drw_no_date: string
}

export interface DrawListReq {
    drwtNo1: number
    drwtNo2: number
    drwtNo3: number
    drwtNo4: number
    drwtNo5: number
    drwtNo6: number
    year: number
    pageNum: number
    pageSize: number
}

export interface DrawListRes {
    result: DrawInfo[]
    input: DrawInfo
}

export async function getDrawInfo(param: DrawReq) {
    let result = {}
    await axios
        .get('/api/v1/find', {
            params: param
        })
        .then((res) => {
            console.log('로또 정보 응답 성공')
            result = res.data
        })
        .catch((error) => {
            console.log('조회된 정보를 찾지 못했습니다.')
            throw error
        })
    return result
}

export async function getDrawList(param: DrawListReq) {
    let result = {}
    await axios
        .get('/api/v1/find', {
            params: param
        })
        .then((res) => {
            console.log('로또 당첨 목록 응답 성공')
            result = res.data
        })
        .catch((error) => {
            console.log('조회된 정보를 찾지 못했습니다.')
            throw error
        })
    return result
}
