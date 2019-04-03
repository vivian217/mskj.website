<template>
    <div class="video-analysis-system">
        <Row>
            <Col>
                <div class="core-title">产品概述</div>
            </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
            <Col span="10">
                <div class="core-text">
                    公安智能视频分析系统采用自主知识产权的深度学习原创技术、人工智能核心算法，实现对摄像头或历史视频中行人、车辆等物体的检测属性分析，并提供实时预警、目标布控、轨迹追踪等功能，为视频监控打造一个智能化的实时分析平台。可接入监控摄像头的视频流，进行实时结构化处理，检测人像与车辆，并提取相对应的信息，比如人脸、性别、年龄、穿着、车牌、车型、品牌等。
                </div>
            </Col>
            <Col span="8">
                <div class="core-img">
                    <img src="@/images/core/videoAnalysis.png" alt="公安智能视频分析系统">
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div class="core-title">功能介绍</div>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="6">
                <div class="core-img">
                    <img src="@/images/core/faceRecognition.png" alt="人脸识别">
                </div>
            </Col>
            <Col span="1" offset="2">
                <img src="@/images/core/arrow.png" alt="人脸识别">
            </Col>
            <Col span="5" offset="2">
                <div class="core-card">
                    <div class="core-card-title">
                        <img src="@/images/core/face.png" alt="人脸识别">
                        <span>人脸识别</span>
                    </div>
                    <p>智能识别人脸及人身特征，衣物颜色、背包、眼镜等</p>
                </div>
            </Col>
        </Row>
        <Row class="core-car" type="flex" align="middle">
            <Col span="5" offset="4">
                <div class="core-card">
                    <div class="core-card-title">
                        <img src="@/images/core/car.png" alt="车辆识别">
                        <span>车辆识别</span>
                    </div>
                    <p>智能识别车辆</p>
                    <ul>
                        <li>车辆颜色</li>
                        <li>车型</li>
                        <li>车牌号码</li>
                    </ul>
                </div>
            </Col>
            <Col>
                <img src="@/images/core/rightLine.png" alt="车辆识别">
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="9" offset="2">
                <div class="core-img">
                    <img src="@/images/core/trajectory.png" alt="轨迹分析">
                </div>
            </Col>
            <Col span="3">
                <img src="@/images/core/leftLine.png" alt="轨迹分析">
            </Col>
            <Col span="5">
                <div class="core-card">
                    <div class="core-card-title">
                        <img src="@/images/core/trajectoryAnalysis.png" alt="轨迹分析">
                        <span>轨迹分析</span>
                    </div>
                    <p>实时告警人脸轨迹分析，以图搜人，查询历史轨迹</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div class="core-title">产品特点</div>
            </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
            <Col span="8">
                <div class="core-characters">
                    <div class="char-key-point">广</div>
                    <div class="char-detail">
                        <h6> - 应用范围广 - </h6>
                        <p>能接入不低于100万像素的普通监控摄像头的实时视频流，可对接市场主流摄像头品牌，无需专用的人脸车辆抓拍机。</p>
                    </div>
                </div>
                <div class="core-characters">
                    <div class="char-key-point">佳</div>
                    <div class="char-detail">
                        <h6> - 识别效果佳 - </h6>
                        <p>对监控摄像机视频流的每一帧进行分析，智能抓拍效果最佳的图片，避免抓拍摄像机漏拍的缺陷，识别准确率大大提高。</p>
                    </div>
                </div>
                <div class="core-characters">
                    <div class="char-key-point">快</div>
                    <div class="char-detail">
                        <h6> - 比对速度快 - </h6>
                        <p>千万级数据库比对时间在毫秒级，对于比对成功的人员和车辆自动实时告警。</p>
                    </div>
                </div>
            </Col>
            <Col span="8">
                <div class="core-characters">
                    <div class="char-key-point">高</div>
                    <div class="char-detail">
                        <h6> - 处理能力高 - </h6>
                        <p>针对GPU架构高度优化的深度学习算法，单台服务器能同时分析32路以上全实时高清视频流，相当于每秒同时分析800张图像。</p>
                    </div>
                </div>
                <div class="core-characters">
                    <div class="char-key-point">强</div>
                    <div class="char-detail">
                        <h6> - 实战能力强 - </h6>
                        <p>同时实现人像和车辆注册、人像和车辆结构化分析、人像和车辆布控、人像和车辆轨迹分析、人像和车辆智能检索等功能。</p>
                    </div>
                </div>
                <div class="core-characters">
                    <div class="char-key-point">好</div>
                    <div class="char-detail">
                        <h6> - 展示效果好 - </h6>
                        <p>在同一个界面同时显示人流量、车流量，人流统计图、车流统计图，以及对象详情。</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div class="core-title">应用领域</div>
            </Col>
        </Row>
        <Row class="core-applications core-content">
            <Col span="8" offset="2">
                <div class="application">
                    <div class="title">
                        荣昌公安局
                    </div>
                    <div class="details">
                        2018年12月3日，和荣昌区公安局达成战略协议，部署多路高清摄像头，用智能技术突破人眼识别极限，十亿级别的辨别精度，快速、精准的安全防护。提高了社会治安防控水平，提高公安系统民众社会治安满意度。
                    </div>
                </div>
            </Col>
            <Col span="12" offset="2">
                <img src="@/images/core/coreApplication1.png" alt="公安智能视频分析系统">
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "video-analysis-system"
    }
</script>

<style lang="less">
    .video-analysis-system {
        .core-car {
            height: 428px;
            background: url("~@/images/core/carRecongnition.png") 0 e('/') 100% no-repeat;
        }
        .core-characters {
            width: 100%;
            margin: 10px 0;
            display: flex;
            .char-key-point {
                width: 72px;
                height: 60px;
                background: url("~@/images/core/coreChars.png") 0 e('/') 100% no-repeat;
                text-align: center;
                line-height: 60px;
                font-size: 20px;
                color: #fff;
            }
            .char-detail {
                width: calc(~'100% - 72px');
                padding-left: 20px;
                h6 {
                    font-size: 18px;
                }
                p {
                    font-size: 14px;
                }
            }
        }
    }
</style>
