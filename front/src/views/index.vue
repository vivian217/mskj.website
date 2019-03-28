<template>
    <div class="index">
        <Row>
            <Col>
                <Carousel v-model="carousel" class="white-masking"
                          trigger="hover" :radius-dot="true" :height="720"
                          loop autoplay>
                    <CarouselItem>
                        <div class="carousel-box main-width">
                            <div class="carousel-img">
                                <img src="/src/images/index/mskj-banner1.png" alt="公安智能视频分析系统">
                            </div>
                            <div class="carousel-text">
                                <h2>公安智能视频分析系统</h2>
                                <h3>Video Intelligent Analysis System</h3>
                                <div class="carousel-desc">
                                    <div class="desc-main">用智能技术突破人眼识别极限，十亿级别的辨别精度，快速、精准的安全防护。该系统旨在实现对全社会进行全方位、立体式管控，提高社会治安防控水平，提高民众社会治安满意度。</div>
                                    <ul class="desc-points">
                                        <li>人脸识别</li>
                                        <li>轨迹分析</li>
                                        <li>数据研判</li>
                                        <li>车辆识别</li>
                                        <li>更多&nbsp;&gt;&gt;&nbsp;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel-box">
                            <div class="carousel-text">
                                <h2>智慧小区管理系统</h2>
                                <h3>Intelligent Community Management System </h3>
                                <div class="carousel-desc">
                                    <div class="desc-main">将人脸识别技术应用于门禁系统及社区安防上：人脸开门，主动预警，危险行为告警，可疑人物报警，目标任务轨迹分析等，实现无感知社区服务体验：</div>
                                    <ul class="desc-points">
                                        <li>智能门禁</li>
                                        <li>主动预警</li>
                                        <li>轨迹分析</li>
                                        <li>自动告警</li>
                                        <li>更多&nbsp;&gt;&gt;&nbsp;</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="carousel-img">
                                <img src="/src/images/index/mskj-banner2.png" alt="智慧小区管理系统">
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel-box">
                            <div class="carousel-img"></div>
                            <div class="carousel-text"></div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel-box">
                            <div class="carousel-img"></div>
                            <div class="carousel-text"></div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <div class="index-header">
                            <h2>
                                <span class="special-text">L</span>EADING <span class="special-text">A</span>I <span class="special-text">S</span>ERVICES
                            </h2>
                            <div class="index-header-line">
                                <div class="inner-line"></div>
                            </div>
                            <h3>核心技术</h3>
                        </div>
                    </Col>
                </Row>
                <Row class="main-width" :gutter="16">
                    <Col span="6">
                        <div class="index-service">
                            <div class="index-service-img">
                                <img src="/src/images/index/service1.png" alt="公安视频智能分析系统">
                            </div>
                            <div class="index-service-title">
                                <h4>公安视频智能分析系统</h4>
                                <h5>Video Intelligent Analysis System</h5>
                            </div>
                            <div class="index-service-details">
                                用智能技术突破人眼识别极限，十亿级别的辨别精度，快速、精准的安全防护。该系统目的提高社会治安防控水平，提高公安系统民众社会治安满意度。
                            </div>
                        </div>
                        <!--<Card class="index-service" :bordered="false">
                            <div class="index-service-img">
                                <img src="/src/images/index/service1.png" alt="公安视频智能分析系统">
                            </div>
                            <div class="index-service-title">
                                <h4>公安视频智能分析系统</h4>
                                <h5>Video Intelligent Analysis System</h5>
                            </div>
                            <div class="index-service-details">
                                用智能技术突破人眼识别极限，十亿级别的辨别精度，快速、精准的安全防护。该系统目的提高社会治安防控水平，提高公安系统民众社会治安满意度。
                            </div>
                        </Card>-->
                    </Col>
                    <Col span="6">
                        <div class="index-service">
                            <div class="index-service-img">
                                <img src="/src/images/index/service2.png" alt="智慧小区管理系统">
                            </div>
                            <div class="index-service-title">
                                <h4>智慧小区管理系统</h4>
                                <h5>Intelligent Community Management System</h5>
                            </div>
                            <div class="index-service-details">
                                将人脸识别技术应用于门禁系统及社区安防上：人脸开门，主动预警，危险行为告警，可疑人物报警，目标任务轨迹分析等，实现无感知社区服务体验。
                            </div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="index-service">
                            <div class="index-service-img">
                                <img src="/src/images/index/service3.png" alt="监狱点名系统">
                            </div>
                            <div class="index-service-title">
                                <h4>监狱点名系统</h4>
                                <h5>Prison Naming System</h5>
                            </div>
                            <div class="index-service-details">
                                将智能人脸识别技术应用于监狱系统，实现区域定时点名，自动实现人员区域调度，系统管理一体化，提高管理效率。
                            </div>
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="index-service">
                            <div class="index-service-img">
                                <img src="/src/images/index/service4.png" alt="高倍率图像/视频无损压缩系统">
                            </div>
                            <div class="index-service-title">
                                <h4>高倍率图像/视频无损压缩系统</h4>
                                <h5>Lossless Image/Video Compression System with High Ratio</h5>
                            </div>
                            <div class="index-service-details">
                                针对目前主流格式的图像/视频进行二次压缩，在不降低人眼视觉质量的v前提下，实现对多种视频流和图像文件的实时、高倍率压缩，节省了存储空间和投资成本。
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <div class="index-header">
                            <h2>
                                <span class="special-text">O</span>NLINE <span class="special-text">D</span>EMOS
                            </h2>
                            <div class="index-header-line">
                                <div class="inner-line"></div>
                            </div>
                            <h3>在线演示</h3>
                        </div>
                    </Col>
                </Row>
                <Row class="index-demos">
                    <Col>
                        <div class="main-width index-demos-box">
                            <div class="index-demo-box">
                                <div class="index-demo">
                                    <div class="index-demo-inner">
                                        <div class="inner">
                                            <img src="/src/images/index/img-comparison.png" alt="人脸识别">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="index-demo-box">
                                <div class="index-demo">
                                    <div class="index-demo-inner">

                                    </div>
                                </div>
                            </div>
                            <div class="index-demo-box">
                                <div class="index-demo">
                                    <div class="index-demo-inner">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <div class="index-header">
                            <h2>
                                <span class="special-text">N</span>EWS
                            </h2>
                            <div class="index-header-line">
                                <div class="inner-line"></div>
                            </div>
                            <h3>新闻中心</h3>
                        </div>
                    </Col>
                </Row>
                <Row class="main-width">
                    <Col span="8">

                    </Col>
                    <Col span="8">

                    </Col>
                    <Col span="8">

                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <div class="index-header">
                            <h2>
                                <span class="special-text">A</span>BOUT <span class="special-text">U</span>S
                            </h2>
                            <div class="index-header-line">
                                <div class="inner-line"></div>
                            </div>
                            <h3>关于我们</h3>
                        </div>
                    </Col>
                </Row>
                <Row class="main-width">
                    <Col span="8">

                    </Col>
                    <Col span="8">

                    </Col>
                    <Col span="8">

                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                carousel: 0
            }
        },
        methods: {}
    }
</script>
<style lang="less">
    @highlight-color:#00ffff;
    @bottom-distance:80px;
    .index {
        & > div {
            margin-bottom: @bottom-distance;
        }
        h2,h3,h4,h5{
            font-weight: 400;
        }
        .ivu-carousel {
            /*.ivu-carousel-item{*/
                /*background-color: rgba(255, 255, 255, 0.1);*/
            /*}*/
            // 左右指示箭头
            .ivu-icon {
                font-size: 25px;
            }
            // 圆形指示器位置
            .ivu-carousel-dots-inside {
                bottom: 15px;
            }
            // 圆形指示器
            .ivu-carousel-dots li button.radius {
                width: 15px;
                height: 15px;
            }
            // 激活状态下的圆形指示器
            .ivu-carousel-dots li.ivu-carousel-active > button.radius {
                background: rgba(6, 112, 120, 0.5);
                border: 1px solid rgba(0, 248, 255, 0.5);
            }
        }
        // banner
        .carousel-box {
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .carousel-text {
                width: 520px;
                text-align: center;
                h2 {
                    font-size: 50px;
                    color: @highlight-color;
                }
                h3 {
                    font-size: 26px;
                    color: @highlight-color;
                }
                .carousel-desc{
                    width: 400px;
                    margin: 20px auto;
                    font-size: 14px;
                }
                .desc-main{
                    padding: 20px 0;
                    border-bottom: 1px solid @highlight-color;
                }
                .desc-points {
                    list-style:none;// square inside url("/src/images/banner/square.png");
                    li {
                        margin-top: 10px;
                        float: left;
                        width: 50%;
                        &:before{
                            content: url("/src/images/index/square.png");
                            position: relative;
                            top: 4px;
                            margin-right: 15px;
                        }
                    }
                }
            }
        }
        // 块header
        .index-header{
            text-align: center;
            margin-bottom: @bottom-distance;
            h2{
                font-size: 32px;
            }
            .index-header-line{
                height: 1px;
                margin: 10px 0;
                background-color: rgba(241, 241, 241,0.5);
                position: relative;
                .inner-line{
                    position: absolute;
                    top: -1px;
                    left: 50%;
                    margin-left:-30px;
                    width: 60px;
                    height: 3px;
                    background-color: @highlight-color;
                }
            }
            h3{
                font-size: 20px;
            }
        }
        // 核心业务
        .index-service {
            height: 420px;
            padding: 40px 20px;
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3) inset;
            & > div {
                margin-bottom: 20px;
            }
            .index-service-img {
                text-align: center;
            }
            .index-service-title {
                text-align: center;
                h4 {
                    color: @highlight-color;
                    font-size: 16px;
                }
            }
            &:hover {
                background: linear-gradient(180deg, @highlight-color, #04befd);
                color: #fff;
                h4 {
                    color: #fff;
                }
            }
        }
        // 在线演示
        .index-demos{
            background:rgba(255, 255, 255, 0.1) url("/src/images/index/demos.png") no-repeat;
            .index-demos-box{
                height: 650px;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
            .index-demo-box {
                width: 250px;
                height: 250px;
                transform: rotate(45deg) translate(0px,-15px);
                transform-origin: center;
                background-color: rgba(255, 255, 255, 0.25);
            }
            .index-demo {
                width: 100%;
                height: 100%;
                background-image: -moz-linear-gradient(90deg, rgb(4, 190, 253) 0%, rgb(0, 255, 255) 100%);
                background-image: -webkit-linear-gradient(90deg, rgb(4, 190, 253) 0%, rgb(0, 255, 255) 100%);
                background-image: -ms-linear-gradient(90deg, rgb(4, 190, 253) 0%, rgb(0, 255, 255) 100%);
                transform: translate(30px, 30px);
            }
            .index-demo-inner {
                width: 220px;
                height: 220px;
                transform: translate(10px, 10px);
                border: 1px solid rgba(255, 255, 255, 0.5);
                .inner {
                    transform: rotate(-45deg) translate(-55px, -20px);
                    text-align: center;
                }
            }
        }
    }
</style>
