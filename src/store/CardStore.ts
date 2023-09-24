import { defineStore } from 'pinia'
import { ref } from 'vue'

export const cardStore = defineStore('card', () => {
    const cardInfoList = ref([] as number[])

    return { cardInfoList }
})
