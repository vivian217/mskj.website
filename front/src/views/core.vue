<template>
    <div class="core white-masking main-width">
        <div class="core-banner">
            <h2>
                <img src="@/images/core/target.png" alt="">
                <span>核心业务</span>
            </h2>
            <div class="core-banner-line"></div>
            <h3>以人工智能核心技术，引领计算机视觉行业先行</h3>
        </div>
        <Tabs v-model="currentTab">
            <TabPane label="视频实时分析系统" name="video-analysis-system">
                <h2>（一）、视频实时分析系统</h2>
                <video-analysis-system></video-analysis-system>
            </TabPane>
            <TabPane label="无感知智慧社区/办公/楼宇安全卫士系统" name="non-perceptual-security-system">
                <h2>（二）、无感知智慧社区/办公/楼宇安全卫士系统</h2>
                <non-perceptual-security-system></non-perceptual-security-system>
            </TabPane>
            <TabPane label="智慧监狱点名系统" name="prison-naming-system">
                <h2>（三）、智慧监狱点名系统</h2>

            </TabPane>
            <TabPane label="高倍率图像/视频无损压缩系统" name="image-video-compression">
                <h2>（四）、高倍率图像/视频无损压缩系统</h2>
                <image-video-compression-system></image-video-compression-system>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    import VideoAnalysisSystem from './cores/VideoAnalysisSystem'
    import NonPerceptualSecuritySystem from './cores/NonPerceptualSecuritySystem'
    import ImageVideoCompressionSystem from './cores/ImageVideoCompressionSystem'

    export default {
        name: "core",
        components: {
            VideoAnalysisSystem,
            NonPerceptualSecuritySystem,
            ImageVideoCompressionSystem
        },
        data() {
            return {
                currentTab: 'video-analysis-system'
            }
        },
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                if (to.params.anchor) {
                    vm.currentTab = to.params.anchor
                } else {
                    vm.currentTab = 'video-analysis-system'
                }
            })
        }
    }
</script>

<style lang="less">
    @color-active: #0ff;
    @color-hover: #93fcfc;
    .core {
        h2 {
            text-align: center;
            color: @color-active;
        }
        .core-banner {
            height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: url("~@/images/core/coreBanner.png") 0 e('/') 100% no-repeat;
            h2 {
                color: @color-active;
                font-size: 40px;
            }
            .core-banner-line {
                height: 5px;
                width: 98%;
                margin-top: 10px;
                border-top: 1px solid @color-active;
                margin-bottom: 20px;
                border-bottom: 1px dashed @color-active;
            }
        }
        .ivu-tabs {
            color: #c6c6c6;
            .ivu-tabs-nav-container {
                font-size: 18px;
            }
            .ivu-tabs-tab {
                padding: 16px;
                &:hover {
                    color: @color-hover;
                }
            }
            .ivu-tabs-tab-active {
                color: @color-active;
            }
            .ivu-tabs-ink-bar {
                background-color: @color-active;
            }
            .ivu-tabs-content {
                padding: 20px 0;
            }
        }
        .core-title {
            display: inline-block;
            padding: 5px 20px;
            margin: 20px;
            border: 1px solid @color-hover;
            border-radius: 10px;
            font-size: 16px;
        }
        .core-text {
            line-height: 2em;
            font-size: 14px;
            text-indent: 2em;
        }
        .core-img {
            height: 300px;
            text-align: center;
            display: flex;
            align-items: center;
        }
        .ivu-card {
            background: none;
            border-color: @color-hover;
            .ivu-card-head {
                text-align: center;
                border-bottom-color: @color-hover;
            }
            &:hover {
                border-color: @color-hover;
            }
            img {
                width: 45px;
            }
        }
        .core-applications {
            width: 90%;
            margin: auto;
            border: 1px solid @color-active;
            border-radius: 10px;
            .application {
                line-height: 2em;
                img {
                    margin-top: 20px;
                }
                span {
                    display: inline-block;
                    padding: 0 10px;
                    color: @color-active;
                }
            }
            .title {
                margin: 20px 0;
                font-size: 16px;
                text-align: center;
            }
            .details {
                font-size: 14px;
                text-indent: 2em;
            }
        }
        li {
            margin: 15px 0;
            &:before {
                content: url("~@/images/core/point.png");
                margin: 0 5px;
            }
        }
        .core-weakness {
            margin-bottom: 20px;
            border: 1px dashed @color-hover;
            display: flex;
            align-items: center;
            .text {
                width: calc(~'100% - 180px');
                padding: 20px;
                h5 {
                    margin: 10px 0;
                    font-size: 20px;
                    color: @color-active;
                }
                p {
                    font-size: 14px;
                }
            }
            .text-right {
                text-align: right;
            }
            .img {
                width: 180px;
                height: 180px;
            }
        }
        .core-weakness-left {
            border-top-right-radius: 90px;
            border-bottom-right-radius: 90px;
        }
        .core-weakness-right {
            border-top-left-radius: 90px;
            border-bottom-left-radius: 90px;
        }
    }
</style>
