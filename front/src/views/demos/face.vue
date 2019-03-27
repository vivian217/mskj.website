<template>
    <div class="face">
        <div class="face-box">
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-upload ref="person-upload"
                               :url="uploadUrl"
                               :format="['jpg','png','tif']"></pr-upload>
                </div>
            </div>
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-upload ref="person-upload"
                               :url="uploadUrl"
                               :format="['jpg','png','tif']"></pr-upload>
                </div>
            </div>
            <div class="loading-box bottom-center">
                <loading-status></loading-status>
            </div>
            <div class="after-comparison">
                <div class="inner">
                    <p class="title">比对结果</p>
                </div>
            </div>
        </div>
        <div class="prompt">
            <p>* 上传两张人脸图片，每张大小不超过5M，保证露出五官，提高对比精度。</p>
            <p>* 图片只支持jpg、png、tif 格式</p>
        </div>
    </div>
</template>

<script>
    import PrUpload from '../components/PrUpload'
    import LoadingStatus from '../components/LoadingStatus'

    export default {
        name: "face",
        components: {
            PrUpload,
            LoadingStatus
        },
        data() {
            return {
                uploadUrl: '/api/v1/upload/file'
            }
        }
    }
</script>

<style scoped lang="less">
    .face {
        .face-box {
            display: flex;
            justify-content: space-between;
            position: relative;
            .loading-box {
                width: 350px;
                height: 350px;
            }
            .after-comparison {
                position: absolute;
                left: 0;
                right: 0;
                margin: 0 auto;
                bottom: -30px;
            }
        }
    }
</style>
