import axios from 'axios'

export interface Meta {
    year: number
    age: number
    ageTwentyYear: number
    page: number
    size: number
    itemCount: number
    pageCount: number
    hasNext: boolean
    hasPrev: boolean
}

export interface PageInfo {
    page?: number // default 1
    size?: number // default 5
}

export interface DrawReq {
    drwtNo1: number
    drwtNo2: number
    drwtNo3: number
    drwtNo4: number
    drwtNo5: number
    drwtNo6: number
}

export interface DrawRes {
    result: DrawInfo
    meta: Meta
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

export interface DrawListReq extends PageInfo {
    drwtNo1: number
    drwtNo2: number
    drwtNo3: number
    drwtNo4: number
    drwtNo5: number
    drwtNo6: number
    order?: string // default desc(내림차순) "'DESC' 'ASC' 중 택 1"
}

export interface DrawListRes {
    result: DrawInfo[]
    meta: Meta
}

/**출생년도:
    19세 미만 -> 출생년도 기준 가장 큰 결과 1
    19세 이상 -> 성인이 된 년도를 기눈 가장 큰 결과 1
*/
export async function getDrawInfoByYear(param: DrawReq, year: number) {
    let result = {} as DrawRes
    await axios
        .get(`/api/v1/lotto/find/${year}`, {
            headers: { 'Content-Type': `application/json` },
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
    let result = {} as DrawListRes
    await axios
        .get('/api/v1/lotto/find', {
            headers: { 'Content-Type': `application/json` },
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
