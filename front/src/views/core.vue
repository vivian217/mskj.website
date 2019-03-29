<template>
    <div class="core white-masking main-width">
        <div class="core-banner">
            <h2>
                <img src="/src/images/core/target.png" alt="">
                <span>核心业务</span>
            </h2>
            <div class="core-banner-line"></div>
            <h3>以人工智能核心技术，引领计算机视觉行业先行</h3>
        </div>
        <Tabs :value="currentTab">
            <TabPane label="视频实时分析系统" name="video-analysis-system">
                <h2>（一）、视频实时分析系统</h2>
                <video-analysis-system></video-analysis-system>
            </TabPane>
            <TabPane label="无感知智慧社区/办公/楼宇安全卫士系统" name="non-perceptual-security-system">
                <div>
                    <h2>（二）、无感知智慧社区/办公/楼宇安全卫士系统</h2>
                    <non-perceptual-security-system></non-perceptual-security-system>
                </div>
            </TabPane>
            <TabPane label="智慧监狱点名系统" name="prison-naming-system">
                <div id="anchor3"></div></TabPane>
            <TabPane label="图片高保真压缩系统">标签三的内容</TabPane>
            <TabPane label="视频高保真压缩系统">标签三的内容</TabPane>
        </Tabs>
    </div>
</template>

<script>
    import VideoAnalysisSystem from './cores/VideoAnalysisSystem'
    import NonPerceptualSecuritySystem from'./cores/NonPerceptualSecuritySystem'
    export default {
        name: "core",
        components:{
            VideoAnalysisSystem,
            NonPerceptualSecuritySystem
        },
        data(){
            return{
                currentTab:'video-analysis-system'
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
            background: url("/src/images/core/coreBanner.png") 0 e('/') 100% no-repeat;
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
        }
        .core-img {
            height: 300px;
            text-align: center;
            img {
                max-height: 100%;
                max-width: 100%;
            }
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
        .core-application {
            width: 90%;
            margin: auto;
            border: 1px solid @color-active;
            border-radius: 10px;
            .application {
                line-height: 2em;
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
    }
</style>
