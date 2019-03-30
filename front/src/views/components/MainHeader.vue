<template>
    <div class="main-header">
        <header>
            <div class="logo">
                <img src="@/images/logo.png" alt="">
            </div>
            <Menu ref="top-menu" mode="horizontal" :active-name="$route.name">
                <MenuItem name="index" to="index">首页</MenuItem>
                <MenuItem name="core" to="core">核心业务</MenuItem>
                <Submenu name="demos">
                    <template slot="title">
                        在线演示
                    </template>
                    <MenuItem name="face" to="face">人脸比对</MenuItem>
                    <!--<MenuItem name="car" to="car">车辆识别</MenuItem>-->
                    <MenuItem name="img-compress" to="img-compress">图片压缩</MenuItem>
                    <!--<MenuItem name="video-compress" to="video-compress">视频压缩</MenuItem>-->
                </Submenu>
                <MenuItem name="news" to="news">新闻中心</MenuItem>
                <MenuItem name="about" to="about">关于我们</MenuItem>
            </Menu>
        </header>
    </div>
</template>

<script>
    export default {
        name: "main-header",
        methods: {}
    }
</script>
