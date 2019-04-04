<template>
    <div class="about">
        <div class="main-banner">
            <h2>
                <!--<img src="@/images/news/banner.jpg" alt="">-->
                <span>About Us/关于我们</span>
            </h2>
            <!--<div class="core-banner-line"></div>-->
            <h3>做计算机视觉的全球领先者和开拓者</h3>
        </div>
        <div class="main-width white-masking">
            <Row class="intro" type="flex" align="middle">
                <Col span="14">
                    <div class="title">企业介绍 ( Company Introduction )</div>
                    <div class="details">重庆孟山信息科技有限公司是一家专注于计算机智能视觉的高科技企业，提供世界领先水平的目标物体识别、检测、分析技术，主要产品包括智能视频分析服务器，视频及图片无损高倍率压缩服务器，低带宽高清视频传输设备及服务器，云计算技术应用，物联网技术的开发应用，远程教育及医疗系统软件的集成及应用等。企业拥有专业化的服务队伍，能够为客户提供领域内从咨询规划、系统实施到运营支撑的专业服务。重视和客户建立长久的合作，始终把满足和超越满足客户要求作为每个员工竭力实现的目标。凭借雄厚的技术实力和优质的客户服务，赢得了大量客户的广泛信任与支持。公司在美国硅谷、重庆、南京等地都设有办公研发地点。</div>
                </Col>
                <Col span="10">
                    <div class="img">
                        <img src="@/images/about/company.png" alt="">
                    </div>
                </Col>
            </Row>
            <Row class="culture" type="flex" align="middle">
                <Col span="10">
                    <div class="img">
                        <img src="@/images/about/culture.jpg" alt="">
                    </div>
                </Col>
                <Col span="14">
                    <div class="title">企业文化 ( Corporate Culture )</div>
                    <div class="details">
                        <p>使命：为客户创造价值</p>
                        <p>核心价值观 ：以人为本、诚信、创新</p>
                        <p>企业目标 ：做计算机视觉的全球领先者和开拓者，用人工智能和深度学习技术颠覆传统的做法。</p>
                    </div>
                </Col>
            </Row>
            <Row class="stretch">
                <Col>
                    <Row>
                        <Col>
                            <div class="title">研发实力 ( R & D Strength )</div>
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-around" class="stretch-row">
                        <Col span="7">
                            <img src="@/images/about/patent1.jpg" alt="">
                        </Col>
                        <Col span="7">
                            <img src="@/images/about/patent2.jpg" alt="">
                        </Col>
                        <Col span="7">
                            <img src="@/images/about/patent3.jpg" alt="">
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-around" class="stretch-row">
                        <Col span="7">
                            <img src="@/images/about/patent4.jpg" alt="">
                        </Col>
                        <Col span="7">
                            <img src="@/images/about/patent4.jpg" alt="">
                        </Col>
                        <Col span="7">
                            <img src="@/images/about/patent6.jpg" alt="">
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-around" class="stretch-row">
                        <Col span="7">
                            <img src="@/images/about/patent7.jpg" alt="">
                        </Col>
                        <Col span="7">
                            <img src="@/images/about/patent8.jpg" alt="">
                        </Col>
                        <Col span="7">
                            <img src="@/images/about/patent9.jpg" alt="">
                        </Col>
                    </Row>
                </Col>
            </Row>
            <!--<Row class="location">
                <Col>
                    <div></div>
                </Col>
            </Row>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped lang="less">
    .about {
        .main-width {
            padding: 20px 0;
            & > div {
                padding: 20px;
            }
        }
        .main-banner {
            background: url("~@/images/about/banner.png") center e('/') cover no-repeat;
        }
        .title {
            font-size: 24px;
            padding-left: 20px;
            border-left: 2px solid #00ffff;
        }
        .details {
            margin-top: 20px;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.6);
            text-indent: 2em;
            line-height: 2em;
            font-size: 14px;
        }
        .img {
            height: 250px;
            text-align: center;
        }
        .stretch {
            .stretch-row {
                margin: 10px 0;
            }
        }
    }
</style>
