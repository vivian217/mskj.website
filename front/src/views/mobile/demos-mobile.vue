<template>
    <div class="demos-mobile">
        <div class="demos-header">
            <div class="logo">
                <img src="@/images/logo.png" alt="">
            </div>
            <Menu ref="demos-menu" mode="horizontal" :active-name="$route.name">
                <MenuItem name="face-mobile" to="face-mobile"><span>人脸比对</span></MenuItem>
                <MenuItem name="img-compress-mobile" to="img-compress-mobile">图片压缩</MenuItem>
            </Menu>
        </div>
        <div class="demos-box">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "demos"
    }
</script>
<style lang="less">
    @color-active: #93fcfc;
    @header-height: 40px;
    @spacing: 10px;
    .demos-mobile {
        position: absolute;
        z-index: 10;
        width: 100%;
        min-height: 100%;
        padding: 0 @spacing;
        color: #fff;
        background-color: rgba(0, 0, 0, .7);
        .demos-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: @header-height;
            padding: 5px 0;
            .logo {
                height: 100%;
            }
        }
        // 导航部分
        .ivu-menu-horizontal.ivu-menu-light {
            display: inline-block;
            height: @header-height;
            line-height: @header-height;
            background-color: transparent;
            .ivu-menu-item, .ivu-menu-submenu {
                margin: 0 @spacing;
                padding: 0;
                color: #fff;
                font-size: 16px;
            }
            .ivu-menu-item-active, .ivu-menu-item:hover, .ivu-menu-submenu-active, .ivu-menu-submenu:hover {
                color: @color-active;
                border-color: @color-active;
            }
            &:after {
                height: 0;
            }
        }
        // 演示主体部分
        .demos-box {
            padding: @spacing 0;
            font-size: 15px;
        }
        // 演示选项
        .choice {
            margin-bottom: @spacing;
        }
        // 图片
        .img-box {
            height: 185px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
            .img-remove {
                position: absolute;
                top: 0;
                right: 0;
                .ivu-icon {
                    cursor: pointer;
                }
            }
        }
        .loading-box {
            width: 220px;
            height: 220px;
            .loading-status {
                .inner-text {
                    font-size: 24px;
                }
            }
            .ivu-btn {
                width: 100%;
                background: transparent;
                border: none;
                color: #93fcfc;
                font-size: 25px;
                z-index: 20;
                &:focus {
                    box-shadow: none;
                }
            }
        }
        .upload-progress {
            width: 100%;
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
            padding: @spacing;
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
                padding: 10px 0 15px;
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
