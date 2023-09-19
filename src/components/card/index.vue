<template lang="">
    <div class="black-bg">
        <div class="white-bg">
            <h4>상세페이지</h4>
            <p>상세페이지내용임</p>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
body {
    margin: 0;
}
div {
    box-sizing: border-box;
}
.black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
    opacity: 0.3;
}
.white-bg {
    width: 90%;
    background: white;
    border-radius: 8px;
    padding: 20px;
}
</style>
