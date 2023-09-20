<template>
    <div class="modal">
        <div class="header">
            <div class="title">타이틀 내용 @@@@</div>
            <div class="close-btn" @click="onClose"></div>
        </div>
        <div class="body">
            <p>컨텐츠 내용 @@@@@@@@@@@@</p>
            <p>컨텐츠 내용 @@@@@@@@@@@@</p>
            <p>컨텐츠 내용 @@@@@@@@@@@@</p>
            <p>컨텐츠 내용 @@@@@@@@@@@@</p>
            <p>컨텐츠 내용 @@@@@@@@@@@@</p>
            <p>컨텐츠 내용 @@@@@@@@@@@@</p>
        </div>
    </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['close-popup'])

function onClose() {
    emit('close-popup')
}
</script>
<style lang="scss">
.modal {
    background: #fff;
    width: 70%;
    height: 70%;
    margin: 0;
    padding: 0;
    transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
    top: 100%;
    position: fixed;
    left: 0;
    text-align: left;
    .header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid #ddd;
        font: 300 24px Lato;
        position: relative;
        .close-btn:after {
            display: inline-block;
            content: '\00d7';
            font-size: 15pt;
        }
    }
    .body {
        padding: 20px;
        font: 300 16px Lato;
    }
}
.full-popup {
    top: 0;
}
</style>
