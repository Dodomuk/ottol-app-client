<template>
    <div class="bottom-container ml-2 mb-16">
        <div class="subtext mb-24">- 발 행 기 관: Ottol주식회사</div>
        <div class="submit-btn" @click="showModal">
            <div class="btn">
                <span>당첨결과 확인</span>
                <div class="dot"></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
function showModal() {}
</script>
<style lang="scss">
.bottom-container {
    display: flex;
    flex-direction: column;
    align-self: end;
    .subtext {
        text-align: center;
        color: var(--main-color);
        transform: rotate(270deg);
        font-size: 12px;
        white-space: nowrap;
        align-self: start;
    }
    .submit-btn {
        position: relative;

        .btn {
            width: var(--btn-w);
            color: var(--main-color);
            border: 0.15em solid var(--main-color);
            border-radius: 5em;
            text-align: center;
            font-size: 1.3em;
            line-height: 2em;
            cursor: pointer;
        }
        .dot {
            content: '';
            position: absolute;
            top: 0;
            width: var(--dot-w);
            height: 100%;
            border-radius: 100%;
            transition: all 300ms ease;
            display: none;
            &:after {
                content: '';
                position: absolute;
                left: calc(50% - 0.4em);
                top: -0.4em;
                height: 0.8em;
                width: 0.8em;
                background: var(--main-color);
                border-radius: 1em;
                border: 0.25em solid var(--white);
                box-shadow:
                    0 0 0.7em var(--white),
                    0 0 2em var(--main-color);
            }
        }

        .btn:hover .dot,
        .btn:focus .dot {
            animation: submitBtn 2s infinite linear;
            display: block;
        }
        @keyframes submitBtn {
            0% {
                transform: translateX(0) rotate(0);
            }
            30% {
                transform: translateX(var(--tr-X)) rotate(0);
            }
            50% {
                transform: translateX(var(--tr-X)) rotate(180deg);
            }
            80% {
                transform: translateX(0) rotate(180deg);
            }
            100% {
                transform: translateX(0) rotate(360deg);
            }
        }
    }
}
</style>
