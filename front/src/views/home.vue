<template>
    <div class="main">
        <main-header></main-header>
        <div class="single-page">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import MainHeader from './components/MainHeader'
    import MainFooter from './components/MainFooter'

    export default {
        name: "home",
        components: {
            MainHeader,
            MainFooter
        }
    }
</script>
