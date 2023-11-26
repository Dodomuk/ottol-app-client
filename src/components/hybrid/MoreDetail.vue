<template>
    <div class="animate-bounce see-detail">
        <div class="more-icon" />
    </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss">
.see-detail {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding: 8px 0px 14px 0px;
}
.more-icon {
    width: 14px;
    height: 14px;
    border: 2px solid black;
    border-top: 0;
    border-right: 0;
    transform: rotate(-45deg);
    transform-origin: 25% 25%;
    position: absolute;
    box-shadow: 0px 0px 0px 0px rgb(0, 0, 0);
    &:hover {
        border-color: darkgray;
    }
}
</style>
