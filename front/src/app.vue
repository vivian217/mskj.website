<style lang="less">
    @import 'styles/common.less';
    html, body, #app {
        height: 100%;
        width: 100%;
    }
</style>
<template>
    <div id="app">
        <router-view></router-view>
        <background></background>
    </div>
</template>
<script>
    import Background from './views/components/Background'
    export default {
        components:{
            Background
        },
        data () {
            return {}
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
