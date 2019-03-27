<template>
    <div class="car">
        <div class="car-box">
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-upload ref="car-upload"
                               :url="uploadUrl"
                               :format="['jpg','png','tif']"></pr-upload>

                </div>
            </div>
            <div class="after-comparison">
                <div class="inner">
                    <p class="title">比对结果</p>
                </div>
            </div>
        </div>
        <div class="prompt">
            <p>* 上传车辆图片，图片大小不超过5M，保证露出车牌，提高对比精度。</p>
            <p>* 图片只支持jpg、png、tif格式</p>
        </div>
    </div>
</template>

<script>
    import PrUpload from '../components/PrUpload'

    export default {
        name: "car",
        components: {
            PrUpload
        },
        data() {
            return {
                uploadUrl: '/api/v1/upload/file'
            }
        }
    }
</script>

<style scoped lang="less">
    .car-box {
        display: flex;
    }
</style>
