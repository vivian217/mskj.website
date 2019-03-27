<template>
    <div class="core">
        <div class="core-title">
            <h2 align="center">LEADING AI SERVICES</h2>
        </div>
        <div class="services">
            <div class="service">
                <div class="circle"></div>
                <div class="service-title"></div>
                <div class="service-desc"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "core"
    }
</script>

<style scoped lang="less">
    .core {
        .core-title {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 40px 0;
            h2 {
                border-bottom: 2px solid;
            }
        }
        .services{
            display: flex;
        }
    }
</style>
