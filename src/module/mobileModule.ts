import axios from 'axios'

export interface DrawReq {
    drwtNo1: number
    drwtNo2: number
    drwtNo3: number
    drwtNo4: number
    drwtNo5: number
    drwtNo6: number
}

export interface DrawRes {
    result: DrawInfo[]
    input: DrawInfo
}
export interface DrawInfo {
    drw_No: number
    drw_No1: number
    drw_No2: number
    drw_No3: number
    drw_No4: number
    drw_No5: number
    drw_No6: number
    bnus_no: number
    win_rank: number
    win_pay: string
}

// const store = prizeStore()

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
        //FIXME: 에러 핸들링 작업 필요
        .catch((error) => console.log('조회된 정보를 찾지 못했습니다.'))
    return result
}
