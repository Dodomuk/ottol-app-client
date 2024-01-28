<template>
    <div class="main-container mt-20 mb-4">
        <div class="title">Ottol</div>
    </div>
    <div class="mb-2">
        <div class="img-wrapper relative">
            <img :src="getImage('child')" class="sample-image left-2 mt-5" alt="이미지입니다" />
            <img :src="getImage('young_woman')" class="sample-image young-woman" alt="이미지입니다" />
            <img :src="getImage('middle_aged_man')" class="sample-image middle-aged-man right-24" alt="이미지입니다" />
            <img :src="getImage('grandma')" class="sample-image grandma right-2" alt="이미지입니다" />
        </div>
    </div>
    <div class="main-description mt-7">
        <div class="title">과거 로또 당첨 내역을 알려주는 오톨</div>
        <div class="subtitle">
            오톨은 과거 당첨 이력들을 보여줘요.<br />
            추첨번호를 입력하고 당첨 여부를 확인해보세요!
        </div>
    </div>
    <div class="main-button" @click="goNext">당첨 확인하러 가기</div>
    <div class="test-button mt-4" @click="goTest">테스트 페이지 가기</div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goNext() {
    router.push({ name: 'lotterypage' })
}

function goTest() {
    router.push({ name: 'testpage' })
}

function getImage(imgStr: string) {
    return new URL(`/src/assets/character/${imgStr}.png`, import.meta.url).href
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
        position: relative;
        z-index: 999;
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

.test-button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: teal;
    width: 90vw;
    height: 15vw;
    margin: 12px auto;
    font-size: larger;
    font-weight: 500;
    border-radius: 10px;
}

.img-wrapper {
    height: 30vh;
    .sample-image {
        position: absolute;
        width: 30vw;

        &.young-woman {
            left: 86px;
        }
        &.middle-aged-man {
            height: 32vh;
        }
        &.grandma {
            margin-top: 34px;
            height: 28vh;
        }
    }
}
</style>
