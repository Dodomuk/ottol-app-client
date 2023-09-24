<template>
    <div class="container">
        <div class="header">
            <div class="lottery-class">{{ lotteryClass }}</div>
            <div class="lottery-price">1,000 원</div>
        </div>
        <div :class="['body', isDisabled]">
            <div v-for="(lotto, idx) in lottoNumberList" :key="idx" class="number-body mt-2.5" @click="onCheck(idx)">
                <div v-if="lotto.checked" class="isChecked" />
                <div v-else :class="['checkbox-wrapper', isDisabled]">
                    <div class="checkbox">{{ lotto.number }}</div>
                </div>
            </div>
        </div>
        <div class="footer m-4">
            <div class="item mb-5">
                <div class="box-select">선택 완료</div>
                <div class="checkbox-wrapper mt-0 ml-1.5" @click="onSubmit">
                    <span class="checkbox"></span>
                </div>
            </div>
            <div class="item mb-1.5">
                <div class="box-init">초기화</div>
                <div class="checkbox-wrapper mt-0 ml-1.5" @click="initialize">
                    <span class="checkbox"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
    section: { type: String, required: false, default: ' ' },
    index: { type: Number, required: false, default: 0 }
})
const emit = defineEmits(['set-number'])

const lotteryClass = props.section
let isDisabled = ref('')
const lottoNumberList = reactive(
    Array(45)
        .fill({})
        .map((x, i) => {
            return { checked: false, number: i + 1 }
        })
)

// 체크 버튼 클릭 로직
function onCheck(index: number) {
    const isMaximum = !lottoNumberList[index].checked && lottoNumberList.filter((e) => e.checked).length >= 6
    if (isMaximum) {
        alert('6개 이상 체크 불가능')
    } else {
        lottoNumberList[index].checked = !lottoNumberList[index].checked
    }
}

//초기화
function initialize() {
    isDisabled.value = ''
    lottoNumberList.forEach((e) => {
        e.checked = false
    })
    initializeEmitList()
}

// 화면 전체 선택 목록 초기화
function initializeEmitList() {
    emit('set-number', props.index)
}

//번호 선택 완료시 번호 클릭 버튼 비활성화
function onSubmit() {
    const checkedList = lottoNumberList.filter((e) => e.checked)
    if (checkedList.length < 6) {
        alert('숫자를 6개 눌러주세요.')
    } else {
        if (isDisabled.value) {
            isDisabled.value = ''
            initializeEmitList()
        } else {
            isDisabled.value = 'isDisabled'
            emit(
                'set-number',
                props.index,
                checkedList.map((e) => e.number)
            )
        }
    }
}
</script>
<style scoped lang="scss">
.container {
    border: solid var(--main-color);
    border-radius: 5px;
    .header {
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 6fr;
        border-bottom: 1px solid var(--main-color);
        > .lottery {
            &-class,
            &-price {
                font-weight: 900;
                font-size: xx-large;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &-class {
                color: var(--main-color);
            }
            &-price {
                color: var(--white);
                background-color: var(--main-color);
            }
        }
    }
    .body {
        padding: 3px 0px;
        display: grid;
        grid-template-columns: repeat(7, 40px);
        justify-content: center;
        place-items: center;
        &.isDisabled {
            background-color: #fafad2 !important;
            > .number-body {
                pointer-events: none;
            }
        }
    }
    .footer {
        padding-right: 3px;
        color: var(--main-color);
        float: right;
        > .item {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
    .isChecked {
        background-color: black;
        &::before,
        &::after {
            width: 0px !important;
        }
    }
    .checkbox-wrapper,
    .isChecked {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 54px;
        border: 1px solid var(--main-color);
        color: var(--main-color);
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 20%;
            bottom: 20%;
            width: 3px;
            background-color: var(--white);
        }
        &::before {
            left: -2px;
        }
        &::after {
            right: -2px;
        }

        .checkbox {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
