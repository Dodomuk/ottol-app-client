<template>
    <div class="button-container mt-8 mb-12">
        <div class="submit-btn" @click="goNext">
            <div class="btn">
                <span>{{ buttonText }}</span>
                <div class="dot"></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    content: { type: String, required: true }
})
const emit = defineEmits(['additional-function'])

const buttonText = props.content

function goNext() {
    emit('additional-function')
}
</script>
<style scoped lang="scss">
.button-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
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
