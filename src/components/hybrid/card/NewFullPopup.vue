<template>
    <div class="modal-wrap" v-show="isOpen">
        <div class="modal-container">
            <div class="modal-btn">
                <div class="container">
                    <div class="header">
                        <div class="title">
                            <div class="close-btn" @click="onClose"></div>
                        </div>
                        <div class="maintext text-xl text-center font-bold pb-4">제 0000회</div>
                        <div class="dates text-lg pl-2 font-semibold">
                            <div>발 행 일 : {{ today }}</div>
                            <div>추 첨 일 : {{ drawDay }}</div>
                        </div>
                        <div class="subtext text-xs text-gray-800 pl-2">※ 당첨번호는 2002년 12월 이내만 조회 가능합니다.</div>
                    </div>
                    <!-- 새로운 버전 -->
                    <div class="body">
                        <div class="body-text text-2xl font-normal">
                            <div class="flex-line whitespace-nowrap">A</div>
                            <div class="flex-line whitespace-nowrap">자 동</div>
                            <div class="number-list font-bold whitespace-nowrap">{{ cardStore.getCardInfoText }}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <div>금액</div>
                        <div>₩ 1,000</div>
                    </div>
                    <SubmitButton content="당첨결과 확인" @additional-function="goNext" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function showModal() {
    isOpen.value = !isOpen.value
}

function onClose() {}
</script>
<style scoped lang="scss">
.modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
}
.modal-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
}
.container {
    > .header {
        font: 300 24px Lato;
        position: relative;
        padding: 10px;
        .title {
            display: flex;
            justify-content: space-between;
        }
        // 닫기 버튼
        .close-btn {
            margin-top: -2px;
            &:after {
                display: inline-block;
                content: '\00d7';
                font-size: 15pt;
            }
        }
    }
    .body {
        border-bottom: 3px dotted #ddd;
        border-top: 3px dotted #ddd;
        padding: 20px;
        font: 300 16px Lato;
        display: grid;
        display: flex;
        justify-content: center;
        place-items: center;
        .checkbox-wrapper {
            position: relative;
            display: inline-block;
            width: 15px;
            height: 30px;
            border: 1px solid var(--main-color);
            color: var(--main-color);
            font-size: 12px;
            font-weight: bold;
            text-align: center;
            &::before,
            &::after {
                content: '';
                position: absolute;
                top: 20%;
                bottom: 20%;
                width: 2px;
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
        .body-text {
            width: 100%;
            display: flex;
            justify-content: space-between;
            > .flex-line {
                letter-spacing: 10px;
            }
            > .number-list {
                word-spacing: 6px;
            }
        }
    }
    @keyframes blink-effect {
        50% {
            opacity: 0;
        }
    }
    .blink {
        border: 1px solid orange !important;
        color: orange !important;
        animation: blink-effect 1s step-end infinite;
    }
    .footer {
        margin: 8px 24px;
        display: flex;
        justify-content: space-between;
    }
}
</style>
