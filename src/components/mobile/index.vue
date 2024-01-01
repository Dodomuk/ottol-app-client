<template>
    <div class="main-container mt-28 mb-4">
        <div class="title">Ottol</div>
    </div>
    <div class="main-description">
        <div class="title">과거 로또 당첨 내역을 알려주는 오톨</div>
        <div class="subtitle">
            오톨은 과거 당첨 이력들을 보여줘요.<br />
            추첨번호를 입력하고 당첨 여부를 확인해보세요!
        </div>
    </div>
    <div class="main-button" @click="goNext">당첨내역들 확인하러 가기</div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goNext() {
    router.push({ name: 'lotterypage' })
}
</script>
<style scoped lang="scss">
.main- {
    &container {
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: center;
        color: var(--main-color);
        @media (max-width: 767px) {
            > .title {
                font-size: 84px;
                font-weight: 900;
            }
        }
        @media (min-width: 768px) {
            transform: rotate(270deg);
            > .title {
                font-size: 64px;
                font-weight: 900;
            }
        }
    }
    &description {
        text-align: center;
        .title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 6px;
        }
        .subtitle {
            font-size: 16px;
            margin-bottom: 32px;
        }
    }
    &button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: var(--main-color);
        width: 90vw;
        height: 15vw;
        margin: 0 auto;
        font-size: larger;
        font-weight: 500;
        border-radius: 10px;
    }
}
</style>
