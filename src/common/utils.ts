export function getDateByFullString(inputDate?: Date) {
    const date = inputDate ? inputDate : new Date()
    return (
        dateDecorator(`${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`, '/') +
        ` (${getDayOfWeek(date.getDay())}) ` +
        dateDecorator(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`, ':')
    )
}

export function getDayOfWeek(day: number) {
    const days = new Map()
    days.set(0, '일')
    days.set(1, '월')
    days.set(2, '화')
    days.set(3, '수')
    days.set(4, '목')
    days.set(5, '금')
    days.set(6, '토')
    return days.get(day)
}

export function dateDecorator(str: string, symbol = '') {
    console.log(str)
    return str
        .split(/[:/]/g)
        .map((v) => (v + '').trim().padStart(2, '0'))
        .join(symbol ? ' ' + symbol + ' ' : '')
}
