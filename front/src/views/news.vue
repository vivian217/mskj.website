<template>
    <div class="news main-width">
        <div class="main-banner">
            <h2>
                <!--<img src="@/images/news/banner.jpg" alt="">-->
                <span>新闻中心</span>
            </h2>
            <!--<div class="core-banner-line"></div>-->
            <!--<h3>以人工智能核心技术，引领计算机视觉行业先行</h3>-->
        </div>
        <Row class="news-item" type="flex" justify="space-around">
            <Col span="12">
                <div class="item">
                    <p class="title"><a href="/news/detail/1">孟山正式入驻地理文化众创空间</a></p>
                    <p class="time-publisher">2019年3月24日</p>
                    <p class="abstract">重庆孟山科技与地理文化众创空间正式达成入驻协议，于2019年3月24日入驻海王星D座8-21，将开启公司发展的新篇章。
                        <a href="/news/detail/1">&gt;&gt;查看详情</a>
                    </p>
                </div>
            </Col>
            <Col span="10">
                <div class="news-img">
                    <img src="@/images/news/news1.png" alt="">
                </div>
            </Col>
        </Row>
        <Row class="news-item" type="flex" justify="space-around">
            <Col span="12">
                <div class="item">
                    <p class="title"><a href="/news/detail/2">孟山科技与海南省数据大厅与海南省工信厅进行交流</a></p>
                    <p class="time-publisher">2018年11月15日</p>
                    <p class="abstract">11月15日，宋扬博士在海南省数据大厅与海南省工信厅、公安厅领导交流，并得到充分认可。已经在海南省试点。
                        <a href="/news/detail/2">&gt;&gt;查看详情</a>
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
                    <p class="title"><a href="/news/detail/3">重庆市人大领导参访孟山科技</a></p>
                    <p class="time-publisher">2017年5月8日</p>
                    <p class="abstract">2017年5月18日，在江北区进行工作调研的重庆市委常委、常务副市长吴存荣一行，在重庆市江北区委书记杜和平、江北区区长代小红的陪同下考察江北高层次创业园区。
                        <a href="/news/detail/3">&gt;&gt;查看详情</a>
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
                    <p class="title"><a href="/news/detail/4">重庆市委常委、常务副市长吴存荣视察孟山科技</a></p>
                    <p class="time-publisher">2017年5月8日</p>
                    <p class="abstract">2017年5月18日，在江北区进行工作调研的重庆市委常委、常务副市长吴存荣一行，在重庆市江北区委书记杜和平、江北区区长代小红的陪同下考察江北高层次创业园区。
                        <a href="/news/detail/4">&gt;&gt;查看详情</a>
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
        name: "news"
    }
</script>

<style lang="less">
    .news {
        .main-banner {
            background: url("~@/images/news/banner.jpg") 0 e('/') cover no-repeat;
        }
        .news-item {
            background: #000;
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
            img {
                height: 200px;
            }
        }
    }
</style>
