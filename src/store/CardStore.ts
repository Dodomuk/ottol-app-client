import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface CardInfo {
    section: string
    numbers: string
}

export const cardStore = defineStore('card', () => {
    const cardInfoList = ref([] as CardInfo[])

    return { cardInfoList }
})
