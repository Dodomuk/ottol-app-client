import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const cardStore = defineStore('card', () => {
    const cardInfoList = ref([] as number[])
    const getCardInfoList = computed(() => cardInfoList)
    function setCardInfoList(arr: number[]) {
        cardInfoList.value = arr
    }
    return { getCardInfoList, setCardInfoList }
})
