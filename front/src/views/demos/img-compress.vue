<template>
    <div class="img-compress">
        <div class="face-box">
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-upload v-if="!showSource"
                               ref="source"
                               @fileChange="sourceChange"
                               :progress="false"
                               :url="uploadUrl"
                               :format="['jpg','jpeg','tif','tif']"></pr-upload>
                    <pr-image-responsive v-if="showSource"
                                         :preview="true"
                                         :url="source['preview']"/>
                </div>
            </div>
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-image-responsive v-if="showCompress"
                                         :preview="true"
                                         :url="compress['compress_preview']"/>
                </div>
            </div>
            <div class="loading-box bottom-center">
                <loading-status></loading-status>
                <Button class="center"
                        @click="doCompress">开始压缩
                </Button>
            </div>
            <div class="after-comparison">
                <div class="inner">
                    <p class="title">比对结果</p>
                </div>
            </div>
        </div>
        <div class="prompt">
            <p>* 上传两张人脸图片，每张大小不超过5M，保证露出五官，提高对比精度。</p>
            <p>* 图片只支持jpg、tif 格式</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import PrUpload from '../components/PrUpload';
    import PrImageResponsive from '../components/PrImageResponsive';
    import LoadingStatus from '../components/LoadingStatus';

    export default {
        name: "img-compress",
        components: {
            PrUpload,
            PrImageResponsive,
            LoadingStatus
        },
        data() {
            return {
                uploadUrl: 'http://192.168.1.158:10010/api/v1/upload/file',
                showSource: false,
                source: {},
                showCompress: false,
                compress: {},
            }
        },
        methods: {
            sourceChange(files) {
                if (files && files.length === 1) {
                    this.source = files[0];
                    this.showSource = true;
                } else {
                    this.source = {};
                    this.showSource = false
                }
            },
            // 开始压缩
            doCompress() {
                if (this.source['preview'] === '') {
                    this.$Message.error({
                        content: '请选择源文件',
                        duration: 10,
                        closable: true
                    });
                    return
                }
                console.log('开始压缩');
                axios({
                    url: this.source['compress'],
                }).then(resp => {
                    let dataRes = resp['data'];
                    if (dataRes && dataRes['code'] === 200) {
                        console.log(dataRes['data']);
                        this.compress = dataRes['data'];
                        this.showCompress = true;
                    } else {
                        this.compress = {};
                        this.showCompress = false;
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .img-compress {
        .face-box {
            display: flex;
            justify-content: space-between;
            position: relative;
            .loading-box {
                width: 320px;
                height: 320px;
                .ivu-btn {
                    background: transparent;
                    border: none;
                    color: #93fcfc;
                    font-size: 30px;
                    z-index: 20;
                    left: 85px;
                }
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
