import axios from 'axios'

export interface DrawReq {
    selected_no: number[]
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
    win_pay: number
}

export async function getDrawInfo(param: DrawReq) {
    //FIXME: 호스트주소 설정
    const host = ''
    await axios
        .get(host + '/api/v1/find', {
            params: param
        })
        .then((res) => {
            console.log('로또 정보 응답')
            return res
        })
        .catch((error) => console.log(error))
}
