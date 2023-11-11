import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const cardDatabase = defineStore('card', () => {
    const cardInfoList = ref([] as number[])
    const getCardInfoText = computed(() => cardInfoList.value.join(' '))
    const getSelectedNumberParam = computed(() => {
        return {
            drwtNo1: cardInfoList.value[0],
            drwtNo2: cardInfoList.value[1],
            drwtNo3: cardInfoList.value[2],
            drwtNo4: cardInfoList.value[3],
            drwtNo5: cardInfoList.value[4],
            drwtNo6: cardInfoList.value[5]
        }
    })
    function setCardInfoList(arr: number[]) {
        cardInfoList.value = arr
    }
    return { getCardInfoText, getSelectedNumberParam, setCardInfoList }
})
