<template>
    <div class="news">
        <div class="main-banner">
            <h2>
                <!--<img src="@/images/news/banner.jpg" alt="">-->
                <span>News/新闻中心</span>
            </h2>
            <!--<div class="core-banner-line"></div>-->
            <h3>关注人工智能行业新闻动态，发布企业最新动向</h3>
        </div>
        <div class="news-box main-width">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news"
    }
</script>

<style lang="less">
    .news {
        .main-banner {
            background: url("~@/images/news/banner.png") center e('/') cover no-repeat;
        }
        .news-item {
            background: rgba(0, 0, 0, .8);
            border: 1px solid rgba(0, 255, 255, 0.3);
            border-radius: 5px;
            margin: 18px 0;
            padding: 20px;
            &:hover {
                border-color: rgba(0, 255, 255, 0.6);
                box-shadow: 6px 6px 20px rgba(0, 255, 255, 0.1);
            }
            .title {
                font-size: 24px;
                color: #c6c6c6;
            }
            .time-publisher {
                padding: 10px 0 20px;
                font-size: 13px;
                color: #666;
                font-style: italic;
            }
            .abstract {
                font-size: 16px;
                line-height: 1.8;
                text-align: justify;
            }
            a:hover {
                color: rgba(0, 255, 255, 0.6);
            }
            .news-img {
                text-align: center;
            }
        }
    }
</style>
