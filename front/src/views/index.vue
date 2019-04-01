<template>
    <div class="index">
        <Row>
            <Col>
                <Carousel v-model="carousel"
                          trigger="hover" :radius-dot="true" :height="720"
                          :autoplay-speed="8000"
                          loop autoplay>
                    <CarouselItem>
                        <router-link :to="{name:'core',params:{anchor:'video-analysis-system'}}">
                            <div class="carousel-box carousel-box1">
                                <div class="index-width">
                                    <div class="carousel-text" style="float: right">
                                        <h2>公安智能视频分析系统</h2>
                                        <h3>Video Intelligent Analysis System</h3>
                                        <div class="carousel-desc">
                                            <div class="desc-main">
                                                用智能技术突破人眼识别极限，十亿级别的辨别精度，快速、精准的安全防护。该系统旨在实现对全社会进行全方位、立体式管控，提高社会治安防控水平，提高民众社会治安满意度。
                                            </div>
                                            <ul class="desc-points">
                                                <li>人脸识别</li>
                                                <li>轨迹分析</li>
                                                <li>数据研判</li>
                                                <li>车辆识别</li>
                                                <li>
                                                    <router-link :to="{name:'core',params:{anchor:'video-analysis-system'}}">更多&nbsp;&gt;&gt;&nbsp;</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </CarouselItem>
                    <CarouselItem>
                        <router-link :to="{name:'core',params:{anchor:'non-perceptual-security-system'}}">
                            <div class="carousel-box carousel-box2">
                                <div class="index-width">
                                    <div class="carousel-text">
                                        <h2>智慧小区管理系统</h2>
                                        <h3>Intelligent Community Management System </h3>
                                        <div class="carousel-desc">
                                            <div class="desc-main">
                                                将人脸识别技术应用于门禁系统及社区安防上：人脸开门，主动预警，危险行为告警，可疑人物报警，目标任务轨迹分析等，实现无感知社区服务体验：
                                            </div>
                                            <ul class="desc-points">
                                                <li>智能门禁</li>
                                                <li>主动预警</li>
                                                <li>轨迹分析</li>
                                                <li>自动告警</li>
                                                <li>
                                                    <router-link :to="{name:'core',params:{anchor:'non-perceptual-security-system'}}">更多&nbsp;&gt;&gt;&nbsp;</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </CarouselItem>
                    <CarouselItem>
                        <router-link :to="{name:'core',params:{anchor:'prison-naming-system'}}">
                            <div class="carousel-box carousel-box3">
                                <div class="index-width">
                                    <div class="carousel-text" style="float: right">
                                        <h2>智慧监狱点名系统</h2>
                                        <h3>Intelligent Prison Naming System</h3>
                                        <div class="carousel-desc">
                                            <div class="desc-main">
                                                将智能人脸识别技术应用于监狱系统，实现区域定时点名，自动实现人员区域调度，系统管理一体化，提高管理效率。
                                            </div>
                                            <ul class="desc-points">
                                                <li>前端抓拍</li>
                                                <li>自动点名</li>
                                                <li>异常告警</li>
                                                <li>数据汇总</li>
                                                <li>
                                                    <router-link :to="{name:'core',params:{anchor:'prison-naming-system'}}"> 更多&nbsp;&gt;&gt;&nbsp;</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </CarouselItem>
                    <CarouselItem>
                        <router-link :to="{name:'core',params:{anchor:'image-video-compression'}}">
                            <div class="carousel-box carousel-box4">
                                <div class="index-width">
                                    <div class="carousel-text">
                                        <h2>高倍率图像/视频无损压缩系统</h2>
                                        <h3>Lossless Image/Video Compression System with High Ratio</h3>
                                        <div class="carousel-desc">
                                            <div class="desc-main">
                                                针对目前主流格式的图像/视频进行二次压缩，在不降低人眼视觉质量的v前提下，实现对多种视频流和图像文件的实时、高倍率压缩，节省了存储空间和投资成本。
                                            </div>
                                            <ul class="desc-points">
                                                <li>图片压缩</li>
                                                <li>图像压缩</li>
                                                <li>高倍保真</li>
                                                <li>自动压缩</li>
                                                <li>
                                                    <router-link :to="{name:'core',params:{anchor:'image-video-compression'}}">更多&nbsp;&gt;&gt;&nbsp;</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
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
                        <router-link :to="{name:'core',params:{anchor:'video-analysis-system'}}">
                            <div class="index-service">
                                <div class="index-service-img">
                                    <img src="@/images/index/service1.png" alt="公安视频智能分析系统">
                                </div>
                                <div class="index-service-title">
                                    <h4>公安视频智能分析系统</h4>
                                    <h5>Video Intelligent Analysis System</h5>
                                </div>
                                <div class="index-service-details">
                                    用智能技术突破人眼识别极限，十亿级别的辨别精度，快速、精准的安全防护。该系统目的提高社会治安防控水平，提高公安系统民众社会治安满意度。
                                </div>
                            </div>
                        </router-link>
                    </Col>
                    <Col span="6">
                        <router-link :to="{name:'core',params:{anchor:'non-perceptual-security-system'}}">
                            <div class="index-service">
                                <div class="index-service-img">
                                    <img src="@/images/index/service2.png" alt="智慧小区管理系统">
                                </div>
                                <div class="index-service-title">
                                    <h4>智慧小区管理系统</h4>
                                    <h5>Intelligent Community Management System</h5>
                                </div>
                                <div class="index-service-details">
                                    将人脸识别技术应用于门禁系统及社区安防上：人脸开门，主动预警，危险行为告警，可疑人物报警，目标任务轨迹分析等，实现无感知社区服务体验。
                                </div>
                            </div>
                        </router-link>
                    </Col>
                    <Col span="6">
                        <router-link :to="{name:'core',params:{anchor:'prison-naming-system'}}">
                            <div class="index-service">
                                <div class="index-service-img">
                                    <img src="@/images/index/service3.png" alt="监狱点名系统">
                                </div>
                                <div class="index-service-title">
                                    <h4>监狱点名系统</h4>
                                    <h5>Prison Naming System</h5>
                                </div>
                                <div class="index-service-details">
                                    将智能人脸识别技术应用于监狱系统，实现区域定时点名，自动实现人员区域调度，系统管理一体化，提高管理效率。
                                </div>
                            </div>
                        </router-link>
                    </Col>
                    <Col span="6">
                        <router-link :to="{name:'core',params:{anchor:'image-video-compression'}}">
                            <div class="index-service">
                                <div class="index-service-img">
                                    <img src="@/images/index/service4.png" alt="高倍率图像/视频无损压缩系统">
                                </div>
                                <div class="index-service-title">
                                    <h4>高倍率图像/视频无损压缩系统</h4>
                                    <h5>Lossless Image/Video Compression System with High Ratio</h5>
                                </div>
                                <div class="index-service-details">
                                    针对目前主流格式的图像/视频进行二次压缩，在不降低人眼视觉质量的v前提下，实现对多种视频流和图像文件的实时、高倍率压缩，节省了存储空间和投资成本。
                                </div>
                            </div>
                        </router-link>
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
                                            <a @click="toFace">
                                                <Icon custom="iconfont icon-face" size="60"></Icon>
                                                <h4>人脸识别</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="index-demo-box">
                                <div class="index-demo">
                                    <div class="index-demo-inner">
                                        <div class="inner">
                                            <a @click="toImgCompress">
                                                <Icon custom="iconfont icon-img" size="60"></Icon>
                                                <h4>图片压缩</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="index-demo-box">
                                <div class="index-demo">
                                    <div class="index-demo-inner">
                                        <div class="inner">
                                            <a @click="toFace">
                                                <Icon custom="iconfont icon-more" size="60"></Icon>
                                                <h4>More&nbsp;&gt;&gt;</h4>
                                            </a>
                                        </div>
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
                <Row class="index-news">
                    <Col>
                        <Row class="main-width">
                            <Col span="16">
                                <div class="index-news-img">
                                    <img :src="newsSrc">
                                </div>
                            </Col>
                            <Col span="8">
                                <div class="index-news-box" :data-src="news1"
                                     @mouseenter.stop.prevent="changeImg"
                                     @mouseleave="recoverImg">
                                    <h5><a href="#">2019年3月24日，我司正式入驻地理文化众创空间</a></h5>
                                    <p>重庆孟山科技与地理文化众创空间正式达成入驻协议，于2019年3月24日入驻海王星D座8-21，将开启公司发展的新篇章。
                                        <a href="#">&gt;&gt;查看详情</a>
                                    </p>
                                </div>
                                <div class="index-news-box" :data-src="news2"
                                     @mouseenter.stop.prevent="changeImg"
                                     @mouseleave="recoverImg">
                                    <h5><a href="#">孟山科技与海南省数据大厅与海南省工信厅进行交流</a></h5>
                                    <p>11月15日，宋扬博士在海南省数据大厅与海南省工信厅、公安厅领导交流，并得到充分认可。已经在海南省试点。
                                        <a href="#">&gt;&gt;查看详情</a>
                                    </p>
                                </div>
                                <div class="index-news-box" :data-src="news3"
                                     @mouseenter.stop.prevent="changeImg"
                                     @mouseleave="recoverImg">
                                    <h5><a href="#">重庆市人大领导参访孟山科技</a></h5>
                                    <p>2017年5月18日，在江北区进行工作调研的重庆市委常委、常务副市长吴存荣一行，在重庆市江北区委书记杜和平、江北区区长代小红的陪同下考察江北高层次创业园区。
                                        <a href="#">&gt;&gt;查看详情</a>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row class="white-masking">
                            <Col>

                            </Col>
                        </Row>
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
                <Row class="index-about">
                    <Col>
                        <Row class="main-width">
                            <Col span="12">
                                <div class="index-about-text">
                                    重庆孟山信息科技有限公司是一家专注于计算机视觉和深度学习原创技术的高科技企业，致力于做计算机视觉的全球领先者和开拓者。公司以视频智能化分析技术、视频和图像高倍率无损压缩技术为核心，提供一系列的人工智能产品和解决方案。公司拥有美国硅谷海归高性能处理器博士组成的国际尖端技术团队，在重庆、南京等多地设有研发基地和分公司。产品广泛应用于城市治安、交通监测、市政管理、机场地铁等出入口、智慧社区、教育机构等多个领域。
                                </div>
                            </Col>
                            <Col span="12">
                                <div class="index-about-img">
                                    <img src="@/images/index/about.png" alt="">
                                </div>
                            </Col>
                        </Row>
                        <!--<Row class="white-masking">
                            <Col>

                            </Col>
                        </Row>-->
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>
<script>

    // 编译后, 变量是动态的不知道图片地址中@代表什么, 因此需要先在此import
    import news1 from '@/images/index/news1.png';
    import news2 from '@/images/index/news2.png';
    import news3 from '@/images/index/news3.jpg';
    export default {
        data() {
            return {
                carousel: 0,
                newsSrc: news1,
                news1: news1,
                news2: news2,
                news3: news3,
            }
        },
        methods: {
            changeImg(e) {
                //console.log(e.target.dataset)
                this.newsSrc = e.target.dataset.src
            },
            recoverImg() {
                this.newsSrc = this.news1
            },
            toFace() {
                // 跳转到人脸对比页面
                let routeData = this.$router.resolve({
                    name: 'face'
                })
                // 以新标签触发
                window.open(routeData.href, '_blank')
            },
            toImgCompress() {
                // 跳转到图片压缩页面
                let routeData = this.$router.resolve({
                    name: 'img-compress'
                })
                // 以新标签触发
                window.open(routeData.href, '_blank')
            }
        }
    }
</script>
<style lang="less">
    @highlight-color: #00ffff;
    @bottom-distance: 80px;
    .index {
        & > div {
            margin-bottom: @bottom-distance;
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
            .carousel-text {
                width: 520px;
                text-align: center;
                h2 {
                    font-size: 38px;
                    color: @highlight-color;
                }
                h3 {
                    font-size: 26px;
                    color: @highlight-color;
                }
                .carousel-desc {
                    width: 400px;
                    margin: 20px auto;
                    font-size: 14px;
                }
                .desc-main {
                    padding: 20px 0;
                    border-bottom: 1px solid @highlight-color;
                }
                .desc-points {
                    li {
                        margin-top: 10px;
                        float: left;
                        width: 50%;
                        &:before {
                            content: url("~@/images/index/square.png");
                            position: relative;
                            top: 4px;
                            margin-right: 15px;
                        }
                        a {
                            &:hover {
                                color: @highlight-color;
                            }
                        }
                    }
                }
            }
        }
        .carousel-box1 {
            background: url("~@/images/index/mskj-banner1.png") 0 e('/') 100% no-repeat;
        }
        .carousel-box2 {
            background: url("~@/images/index/mskj-banner2.png") 0 e('/') 100% no-repeat;
        }
        .carousel-box3 {
            background: url("~@/images/index/mskj-banner3.png") 0 e('/') 100% no-repeat;
        }
        .carousel-box4 {
            background: url("~@/images/index/mskj-banner4.png") 0 e('/') 100% no-repeat;
        }
        // 块header
        .index-header {
            text-align: center;
            margin-bottom: @bottom-distance;
            h2 {
                font-size: 32px;
            }
            .index-header-line {
                height: 1px;
                margin: 10px 0;
                background-color: rgba(241, 241, 241, 0.5);
                position: relative;
                .inner-line {
                    position: absolute;
                    top: -1px;
                    left: 50%;
                    margin-left: -30px;
                    width: 60px;
                    height: 3px;
                    background-color: @highlight-color;
                }
            }
            h3 {
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
        .index-demos {
            background: url("~@/images/index/demos.png") 0 e('/') 100% no-repeat;
            .index-demos-box {
                height: 650px;
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
            .index-demo-box {
                width: 250px;
                height: 250px;
                transform: rotate(45deg) translate(0px, -15px);
                transform-origin: center;
                background-color: rgba(255, 255, 255, 0.25);
            }
            .index-demo {
                width: 100%;
                height: 100%;
                background: url('~@/images/index/demo1.png') 0 e('/') 100% no-repeat;
                transform: translate(30px, 30px);
                color: @highlight-color;
                a {
                    color: @highlight-color;
                }
                &:hover {
                    background: linear-gradient(135deg, rgb(0, 255, 255) 0%, rgb(4, 190, 253) 100%);
                    a {
                        color: #fff;
                    }
                }
            }
            .index-demo-inner {
                width: 220px;
                height: 220px;
                transform: translate(10px, 10px);
                border: 1px solid rgba(255, 255, 255, 0.5);
                .inner {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: rotate(-45deg);
                    text-align: center;
                    h4 {
                        font-size: 16px;
                        margin: 10px 0;
                    }
                }
            }
        }
        // 新闻中心
        .index-news {
            .index-news-img {
                height: 420px;
                text-align: center;
                img {
                    max-height: 100%;
                }
            }
            .index-news-box {
                padding: 0 20px;
                h5 {
                    padding: 14px 6px;
                    a {
                        font-size: 16px;
                        color: #fff;
                    }
                }
                p {
                    padding: 5px 6px;
                    border-bottom: 2px solid #091e24;
                    font-size: 14px;
                }
            }
        }
        // 关于我们
        .index-about {
            .index-about-text {
                width: 70%;
                margin: auto;
                text-indent: 2em;
                line-height: 2em;
                font-size: 14px;
            }
            .index-about-img {
                text-align: center;
                height: 300px;
                img {
                    max-height: 100%;
                }
            }
        }
    }
</style>
