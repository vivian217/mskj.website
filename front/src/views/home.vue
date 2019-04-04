<template>
    <div class="main">
        <main-header :class="bgChange?'header-bg':''"></main-header>
        <div class="single-page">
          <router-view></router-view>
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
        },
        data() {
            return {
                bgChange: false
            }
        },
        methods: {
            handleScroll() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop >= 80) {
                    this.bgChange = true
                } else {
                    this.bgChange = false
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>
