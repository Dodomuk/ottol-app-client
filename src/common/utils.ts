export function getDateByFullString() {
    const date = new Date()
    return `${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate() + 1} (${getDayOfWeek(
        date.getDay()
    )}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` //TODO: 추후 더 나은 함수로 대체
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
