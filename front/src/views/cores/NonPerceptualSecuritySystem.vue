<template>
    <div class="non-perceptual-security-system">
        <Row>
            <Col>
                <div class="core-title">产品概述</div>
            </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
            <Col span="10">
                <div class="core-text">
                    在社区、楼宇、办公场所中，其视频监控系统、门禁系统、访客系统、报警系统互相独立， 成为信息孤岛，效率低下。本系统以人脸为轴，将门禁、访客、监控、报警这四个孤立的系统， 进行了高度整合。使门禁做到无感知的自动开门，访客进行自动登记、授权、回收，全程监控并 且轨迹可寻可查可分析，自动基防报警（比如在入口处未发现的人员，在楼栋内部出现，则具有非法入侵的嫌疑）等。
                </div>
            </Col>
            <Col span="8">
                <div class="core-img">
                    <img src="@/images/core/community.png" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div class="core-title">行业分析</div>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="9">
                <div class="core-img">
                    <img src="@/images/core/searchVideo.png" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                </div>
            </Col>
            <Col span="3">
                <img src="@/images/core/leftLine.png" alt="无感知智慧社区/办公/楼宇安全卫士系统">
            </Col>
            <Col span="5">
                <Card>
                    <div slot="title">
                        <img src="@/images/core/monitor.png" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                        <span>监控系统</span>
                    </div>
                    <ul>
                        <li>用作被动的事后取证 ，利用率低，调阅取 证效率低下</li>
                        <li>无法及时有效地进行</li>
                    </ul>
                </Card>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="5">
                <Card>
                    <div slot="title">
                        <img src="@/images/core/entrance.png" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                        <span>门禁系统</span>
                    </div>
                    <ul>
                        <li>门卡、指纹、闸机，不方便，有延时</li>
                        <li>门卫/保安手动登记，不便于管理。</li>
                    </ul>
                </Card>
            </Col>
            <Col span="3">
                <img src="@/images/core/rightLine.png" alt="无感知智慧社区/办公/楼宇安全卫士系统">
            </Col>
            <Col span="9">
                <div class="core-img" style="background-color: rgba(0,0,0,0.2)">
                    <img src="@/images/core/entranceGuard.png" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div class="core-title">解决方案</div>
            </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
            <Col>
                <img src="@/images/core/intelligentCommunity.png" alt="无感知智慧社区/办公/楼宇安全卫士系统">
            </Col>
        </Row>
        <Row>
            <Col>
                <div class="core-title">应用领域</div>
            </Col>
        </Row>
        <Row class="core-applications">
            <Col>
                <Row type="flex" justify="space-around">
                    <Col span="5">
                        <div class="application">
                            <img src="@/images/core/app-community.jpg" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                            <div class="title"><span>--</span>住宅小区<span>--</span></div>
                        </div>
                    </Col>
                    <Col span="5">
                        <div class="application">
                            <img src="@/images/core/app-hospital.jpg" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                            <div class="title"><span>--</span>医院<span>--</span></div>
                        </div>
                    </Col>
                    <Col span="5">
                        <div class="application">
                            <img src="@/images/core/app-building.jpg" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                            <div class="title"><span>--</span>写字楼<span>--</span></div>
                        </div>
                    </Col>
                    <Col span="5">
                        <div class="application">
                            <img src="@/images/core/app-community.jpg" alt="无感知智慧社区/办公/楼宇安全卫士系统">
                            <div class="title"><span>--</span>学校<span>--</span></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "non-perceptual-security-system"
    }
</script>

<style lang="less">
    .non-perceptual-security-system {
        .core-img {
            margin: 20px 0;
        }
        .application {

        }
    }
</style>
