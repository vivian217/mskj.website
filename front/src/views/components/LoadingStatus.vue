<template>
    <div class="loading-status">
        <div class="outer-halo"></div>
        <div class="outer-border center"></div>
        <div class="loading-border center"></div>
        <div class="inner-halo center"></div>
        <div class="inner-text center" v-html="innerText"></div>
    </div>
</template>

<script>
    export default {
        name: "loading-status",
        props: {
            innerText: {
                default: ''
            },
            loading: {
                default: false
            }
        },
        watch: {
            loading() {
                let loadingBox = document.getElementsByClassName('loading-status')[0];
                if (this.loading) {
                    loadingBox.classList.add("is-loading")
                } else {
                    loadingBox.classList.remove("is-loading")
                }
            }
        }
    }
</script>

<style scoped lang="less">
    @keyframes run {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes change {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .loading-status {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(0, 216, 255, 0.45), rgba(0, 216, 255, 0) 70%);
        .outer-halo {
            width: 100%;
            height: 100%;
            box-shadow: 0px 0px 10px 0px rgba(0, 216, 255, 0.1);
            border-radius: 50%;
        }
        .outer-border {
            width: 75%;
            height: 75%;
            box-shadow: 0px 0px 20px 0px rgba(0, 216, 255, 0.5);
            border-radius: 50%;
        }
        .loading-border {
            width: 68%;
            height: 68%;
            background: url("~@/images/loading.png") 0 0 e('/') 100% 100% no-repeat;
        }
        .inner-halo {
            width: 50%;
            height: 50%;
            box-shadow: 0px 0px 20px 0px rgba(0, 216, 255, 0.3);
            border-radius: 50%;
        }
        .inner-text {
            color: #93fcfc;
            font-size: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        &.is-loading {
            .outer-border {
                animation: change 2s linear infinite;
            }
            .loading-border {
                animation: run 3s linear infinite;
            }
        }
    }
</style>
