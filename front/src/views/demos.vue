<template>
    <div class="demos">
        <Menu ref="demos-menu" mode="horizontal" :active-name="$route.name">
            <MenuItem name="face" to="face"><span>人脸比对</span></MenuItem>
            <!--<MenuItem name="car" to="car">车辆识别</MenuItem>-->
            <MenuItem name="img-compress" to="img-compress">图片压缩</MenuItem>
            <!--<MenuItem name="video-compress" to="video-compress">视频压缩</MenuItem>-->
        </Menu>
        <div class="demos-box">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name: "demos"
    }
</script>
<style lang="less">
    @color-active:#93fcfc;
    .demos {
        width: 1200px;
        margin: 100px auto 0;
        // 导航部分
        .ivu-menu-horizontal.ivu-menu-light {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            background-color: rgba(6, 24, 52, 0.7);
            .ivu-menu-item, .ivu-menu-submenu {
                margin: 0 20px;
                padding: 0;
                color: #c6c6c6;
                font-size: 16px;
                border-bottom: none;
                border-top: 1px solid transparent;
            }
            .ivu-menu-item-active, .ivu-menu-item:hover, .ivu-menu-submenu-active, .ivu-menu-submenu:hover {
                color: @color-active;
                border-bottom: none;
                border-top-color: @color-active;
            }
            &:after {
                height: 0;
            }
        }
        // 演示主体部分
        .demos-box {
            padding: 20px 0;
            font-size: 15px;
        }
        // 演示选项
        .choice {
            margin-bottom: 20px;
        }
        // 底部提示
        .prompt {
            margin-top: 20px;
        }
        // 图片
        .img-box {
            width: 550px;
            height: 450px;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .img-remove {
                position: absolute;
                top: 0;
                right: 0;
                .ivu-icon {
                    cursor: pointer;
                }
            }
        }
        .img-box-inner {
            width: 500px;
            height: 400px;
            box-shadow: 0 0 32px rgba(0, 255, 255, 0.35) inset;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        // 上传组件
        .ivu-upload-drag {
            background-color: transparent;
            border: none;
            &:hover {
                border: none;
            }
        }
        // 比对之后结果显示
        .after-comparison {
            width: 280px;
            padding: 10px;
            margin-left: 20px;
            border: 2px solid rgba(0, 216, 255, 0.45);
            border-radius: 10px;
            .inner {
                width: 100%;
                height: 100%;
                background-color: rgba(9, 78, 101, 0.5);
                border-radius: 10px;
            }
            .title {
                padding: 20px 0;
                text-align: center;
                font-size: 18px;
                color: #02edef;
                background: url("~@/images/resultTitle.png") bottom center no-repeat;
            }
            .detail {
                font-size: 14px;
                p {
                    padding: 5px 20px;
                }
            }
        }
    }
</style>
