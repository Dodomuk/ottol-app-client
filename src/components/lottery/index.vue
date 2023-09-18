<template>
    <div class="lotto-container">
        <ContentsHead />
        <div class="lotto-papaer">
            <!-- TODO: 마진 추후 공통(tailwind로 수정) -->
            <InputContainer class="margin" />
            <InputContainer class="margin" />
            <InputContainer class="margin" />
            <InputContainer class="margin" />
            <InputContainer />
        </div>
        <ContentsBottom />
    </div>
</template>
<script setup lang="ts">
import ContentsHead from '@components/lottery/ContentsHead.vue'
import InputContainer from '@components/lottery/InputContainer.vue'
import ContentsBottom from '@components/lottery/ContentsBottom.vue'
</script>
<style lang="scss">
.lotto-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    .lotto-papaer {
        display: flex;
        .margin {
            margin-right: 12px;
        }
    }
}
</style>
