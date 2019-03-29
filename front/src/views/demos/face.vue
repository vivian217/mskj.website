<template>
    <div class="face">
        <div class="face-box">
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-upload v-if="!showSource"
                               ref="source"
                               @fileChange="sourceChange"
                               :progress="false"
                               :url="uploadUrl"
                               :format="['jpg','jpeg','tif']"></pr-upload>
                    <pr-image-responsive v-if="showSource"
                                         :preview="true"
                                         :url="source['preview']"/>
                </div>
                <div class="img-remove" v-show="showSource">
                    <Icon type="md-close" size="30" color="#93fcfc" @click="removeSource"/>
                </div>
            </div>
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-upload v-if="!showTarget"
                               ref="target-upload"
                               @fileChange="targetChange"
                               :progress="false"
                               :url="uploadUrl"
                               :format="['jpg','jpeg','tif']"></pr-upload>
                    <pr-image-responsive v-if="showTarget"
                                         :preview="true"
                                         :url="target['preview']"/>
                </div>
                <div class="img-remove" v-show="showTarget">
                    <Icon type="md-close" size="30" color="#93fcfc" @click="removeTarget"/>
                </div>
            </div>
            <div class="loading-box bottom-center">
                <loading-status :innerText="loadingText"></loading-status>
                <Button class="center"
                        @click="doCompare"
                        v-show="!loadingText"
                >开始比对</Button>
            </div>
            <!--<div class="after-comparison">
                <div class="inner">
                    <p class="title">比对结果</p>
                </div>
            </div>-->
        </div>
        <div class="prompt">
            <p>* 上传两张人脸图片，每张大小不超过5M，保证露出五官，提高对比精度。</p>
            <p>* 图片只支持jpg、jpeg、tif 格式</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    import PrUpload from '../components/PrUpload';
    import PrImageResponsive from '../components/PrImageResponsive';
    import LoadingStatus from '../components/LoadingStatus';

    export default {
        name: "face",
        components: {
            PrUpload,
            PrImageResponsive,
            LoadingStatus
        },
        data() {
            return {
                uploadUrl: 'http://192.168.1.158:10010/api/v1/upload/file',
                compareUrl: 'http://192.168.1.158:10010/api/v1/compare',
                showSource: false,
                source: {},
                showTarget: false,
                target: {},
                loadingText: ''
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
            targetChange(files) {
                if (files && files.length === 1) {
                    this.target = files[0];
                    this.showTarget = true
                } else {
                    this.target = {};
                    this.showTarget = false
                }
            },
            removeSource() {
                this.source = {};
                this.showSource = false
                this.loadingText = ''
            },
            removeTarget() {
                this.target = {};
                this.showTarget = false
                this.loadingText = ''
            },
            // 开始比对
            doCompare() {
                if (!this.source['preview'] || this.source['preview'] === '') {
                    this.$Message.error({
                        content: '请选择源文件',
                        duration: 10,
                        closable: true
                    });
                    return
                } else if (!this.target['preview'] || this.target['preview'] === '') {
                    this.$Message.error({
                        content: '请选择目标文件 ',
                        duration: 10,
                        closable: true
                    });
                    return
                }
                // console.log('开始比对');
                this.loadingText='比对中'
                axios({
                    url: this.compareUrl,
                    params: {
                        source: this.source['uuid'],
                        target: this.target['uuid'],
                    }
                }).then(resp => {
                    let dataRes = resp['data'];
                    if (dataRes && dataRes['code'] === 200) {
                        console.log(dataRes['data']);
                        this.loadingText = Math.ceil(dataRes['data']['similarity']) + '%<br>相似度'
                    }
                });
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
                width: 320px;
                height: 320px;
                .ivu-btn {
                    background: transparent;
                    border: none;
                    color: #93fcfc;
                    font-size: 30px;
                    z-index: 20;
                    left: 85px;
                    &:focus {
                        box-shadow: none;
                    }
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
