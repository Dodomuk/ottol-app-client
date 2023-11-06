<template>
    <div class="main-container">
        <form class="main-form">
            <select required>
                <option disabled selected hidden>당신의 나이는?</option>
                <option v-for="(year, idx) of yearList" :key="idx" :value="year">{{ year }}</option>
            </select>
            <SubmitButton content="시작하기" @additional-function="goNext" />
        </form>
    </div>
    <!-- <LottoPaper /> -->
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

import SubmitButton from '@hybrid/lottery/SubmitButton.vue'
import LottoPaper from '@mobile/lottery/index.vue'

const yearList = new Array(80).fill(0).map((x, idx) => 7 + idx)
const router = useRouter()

function goNext() {
    console.log('go Next')
    // router.push({ name: 'resultpage', params: { year: } })
}
</script>
<style scoped lang="scss">
:root {
    --arrow-bg: rgba(255, 255, 255, 0.3);
    --arrow-icon: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg);
    --option-bg: black;
    --select-bg: rgba(255, 255, 255, 0.2);
}
* {
    box-sizing: border-box;
}
.main-form {
    display: grid;
    place-items: center;
    min-height: 100vh;
    background: linear-gradient(35deg, red, purple);
    height: 100%;
}
/* <select> styles */
select {
    /* Reset */
    appearance: none;
    border: 0;
    outline: 0;
    font: inherit;
    /* Personalize */
    width: 20rem;
    padding: 1rem 4rem 1rem 1rem;
    background:
        var(--arrow-icon) no-repeat right 0.8em center / 1.4em,
        linear-gradient(to left, var(--arrow-bg) 3em, var(--select-bg) 3em);
    color: white;
    border-radius: 0.25em;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    /* Remove IE arrow */
    &::-ms-expand {
        display: none;
    }
    /* Remove focus outline */
    &:focus {
        outline: none;
    }
    /* <option> colors */
    option {
        color: inherit;
        background-color: var(--option-bg);
    }
}
</style>
