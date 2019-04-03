<template>
    <div class="news-main">
        <Row class="news-item" type="flex" justify="space-around">
            <Col span="12">
                <div class="item">
                    <p class="title"><a @click="toNewsDetail(1)">孟山正式入驻地理文化众创空间</a></p>
                    <p class="time-publisher">2019年3月24日</p>
                    <p class="abstract">重庆孟山科技与地理文化众创空间正式达成入驻协议，于2019年3月24日入驻海王星D区8-15及8-21，将开启公司发展的新篇章。
                        <a @click="toNewsDetail(1)">&gt;&gt;查看详情</a>
                    </p>
                </div>
            </Col>
            <Col span="10">
                <div class="news-img">
                    <img src="@/images/news/news1.jpg" alt="">
                </div>
            </Col>
        </Row>
        <Row class="news-item" type="flex" justify="space-around">
            <Col span="12">
                <div class="item">
                    <p class="title"><a @click="toNewsDetail(2)">孟山科技与海南省数据大厅与海南省工信厅进行交流</a></p>
                    <p class="time-publisher">2018年11月15日</p>
                    <p class="abstract">11月15日，宋扬博士在海南省数据大厅与海南省工信厅、公安厅领导交流，并得到充分认可。已经在海南省试点。
                        <a @click="toNewsDetail(2)">&gt;&gt;查看详情</a>
                    </p>
                </div>
            </Col>
            <Col span="10">
                <div class="news-img">
                    <img src="@/images/news/news2.png" alt="">
                </div>
            </Col>
        </Row>
        <Row class="news-item" type="flex" justify="space-around">
            <Col span="12">
                <div class="item">
                    <p class="title"><a @click="toNewsDetail(3)">重庆市人大领导参访孟山科技</a></p>
                    <p class="time-publisher">2017年5月8日</p>
                    <p class="abstract">2017年5月18日，在江北区进行工作调研的重庆市委常委、常务副市长吴存荣一行，在重庆市江北区委书记杜和平、江北区区长代小红的陪同下考察江北高层次创业园区。
                        <a @click="toNewsDetail(3)">&gt;&gt;查看详情</a>
                    </p>
                </div>
            </Col>
            <Col span="10">
                <div class="news-img">
                    <img src="@/images/news/news3.jpg" alt="">
                </div>
            </Col>
        </Row>
        <Row class="news-item" type="flex" justify="space-around">
            <Col span="12">
                <div class="item">
                    <p class="title"><a @click="toNewsDetail(4)">重庆市委常委、常务副市长吴存荣视察孟山科技</a></p>
                    <p class="time-publisher">2017年5月8日</p>
                    <p class="abstract">2017年5月18日，在江北区进行工作调研的重庆市委常委、常务副市长吴存荣一行，在重庆市江北区委书记杜和平、江北区区长代小红的陪同下考察江北高层次创业园区。
                        <a @click="toNewsDetail(4)">&gt;&gt;查看详情</a>
                    </p>
                </div>
            </Col>
            <Col span="10">
                <div class="news-img">
                    <img src="@/images/news/news4.jpg" alt="">
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "news-main",
        methods: {
            toNewsDetail(nid) {
                // 跳转到新闻详情页面
                let routeData = this.$router.resolve({
                    name: 'news_details',
                    params: {
                        nid: nid
                    }
                })
                // 以新标签触发
                window.open(routeData.href, '_blank')
            }
        }
    }
</script>
<style scoped lang="less">
    img {
        height: 200px;
    }
</style>
