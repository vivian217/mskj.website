<template>
    <div class="news-item">
        <div class="title" v-html="newsItem.title"></div>
        <p class="time-publisher" v-html="newsItem.date"></p>
        <div class="news-img">
            <img :src="newsItem.img">
        </div>
        <div class="abstract" v-html="newsItem.abstract"></div>
    </div>
</template>

<script>
    import newsData from '@/views/news/news.json'

    export default {
        name: "news-detail",
        data() {
            return {
                nid: '',
                newsItem: {}
            }
        },
        mounted() {
            this.nid = this.$route.query.nid
            this.newsItem = newsData['data'][this.nid - 1]
        }
    }
</script>
<style scoped lang="less">
    img {
        height: 400px;
    }
</style>
