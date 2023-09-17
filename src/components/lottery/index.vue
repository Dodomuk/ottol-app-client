<template>
    <div class="lotto-container">
        <ContentsLeft />
        <div class="lotto-papaer">
            <!-- TODO: 마진 추후 공통(tailwind로 수정) -->
            <InputContainer class="margin" />
            <InputContainer class="margin" />
            <InputContainer class="margin" />
            <InputContainer class="margin" />
            <InputContainer />
        </div>
    </div>
</template>
<script setup lang="ts">
import ContentsLeft from '@components/lottery/ContentsLeft.vue'
import InputContainer from '@components/lottery/InputContainer.vue'
</script>
<style>
.lotto-container {
    display: inline-flex;
    justify-content: center;
    .lotto-papaer {
        display: flex;
        .margin {
            margin-right: 12px;
        }
    }
}
</style>
