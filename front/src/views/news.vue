<template>
    <div class="news main-width">
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
                    <img src="/src/images/news/news1.png" alt="">
                </div>
            </Col>
        </Row>
        <Row class="news-item" type="flex" justify="space-around">
            <Col span="12">
                <div class="item">
                    <p class="title"><a href="/news/detail/2">孟山科技召开新品发布会</a></p>
                    <p class="time-publisher">2017年11月15日</p>
                    <p class="abstract">11月15日，重庆孟山信息科技有限公司召开新品发布，现场展示了3款产品，分别是智能图像优化处理器、高性能视频压缩传输卡、智能视频分析服务器。
                        <a href="/news/detail/2">&gt;&gt;查看详情</a>
                    </p>
                </div>
            </Col>
            <Col span="10">
                <div class="news-img">
                    <img src="/src/images/news/news2.jpg" alt="">
                </div>
            </Col>
        </Row>
        <Row class="news-item" type="flex" justify="space-around">
            <Col span="12">
                <div class="item">
                    <p class="title"><a href="/news/detail/3">孟山正式入驻地理文化众创空间</a></p>
                    <p class="time-publisher">2017年5月8日</p>
                    <p class="abstract">2017年5月18日，在江北区进行工作调研的重庆市委常委、常务副市长吴存荣一行，在重庆市江北区委书记杜和平、江北区区长代小红的陪同下考察江北高层次创业园区。
                        <a href="/news/detail/3">&gt;&gt;查看详情</a>
                    </p>
                </div>
            </Col>
            <Col span="10">
                <div class="news-img">
                    <img src="/src/images/news/news3.jpg" alt="">
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
