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
                               :maxSize="maxSize"
                               :format="['jpg','jpeg']"></pr-upload>
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
                    <pr-image-responsive v-if="showCompress"
                                         :preview="true"
                                         :url="compress['compress_preview']"/>
                </div>
            </div>
            <div class="loading-box bottom-center">
                <loading-status :innerText="loadingText"></loading-status>
                <Button class="center"
                        v-show="!loadingText"
                        @click="doCompress">开始压缩
                </Button>
            </div>
            <div class="after-comparison" v-show="showCompressResult">
                <div class="inner">
                    <p class="title">压缩结果</p>
                    <div class="detail">
                        <p v-for="item in compressResult" :key="item.key">
                            {{item.name+'：'+item.value}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="prompt">
            <p>* 图片只支持jpg、jpeg格式</p>
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
                // 文件大小
                maxSize: 102400,
                uploadUrl: 'http://online.mengshankeji.com/api/v1/upload/file',
                showSource: false,
                source: {},
                showCompress: false,
                compress: {},
                loadingText: '',
                compressResult: [],
                showCompressResult: false
            }
        },
        methods: {
            sourceChange(files) {
                if (files && files.length === 1) {
                    this.source = files[0];
                    this.showSource = true;
                } else {
                    this.source = {};
                    this.showSource = false;
                }
            },
            removeSource() {
                this.source = {};
                this.showSource = false;
                this.compress = {};
                this.showCompress = false;
                this.loadingText = '';
                this.showCompressResult = false;
                this.compressResult = [];
            },
            // 开始压缩
            doCompress() {
                if (!this.source['preview'] || this.source['preview'] === '') {
                    this.$Message.error({
                        content: '请选择源文件',
                        duration: 10,
                        closable: true
                    });
                    return
                }
                //console.log('开始压缩');
                this.loadingText = '压缩中'
                axios({
                    url: this.source['compress'],
                }).then(resp => {
                    let dataRes = resp['data'];
                    if (dataRes && dataRes['code'] === 200) {
                        //console.log(dataRes['data']);
                        this.compress = dataRes['data'];
                        this.showCompress = true;
                        this.loadingText = dataRes['data']['compress_ratio'] + '<br>压缩率'
                        this.compressResult.push({
                            name: '压缩前',
                            value: dataRes['data']['before_compress_size_format']
                        })
                        this.compressResult.push({
                            name: '压缩后',
                            value: dataRes['data']['after_compress_size_format']
                        })
                        this.compressResult.push({
                            name: '节约空间',
                            value: dataRes['data']['save_size_format']
                        })
                        this.compressResult.push({
                            name: '压缩率',
                            value: dataRes['data']['compress_ratio']
                        })
                        this.showCompressResult = true
                    } else {
                        this.compress = {};
                        this.showCompress = false;
                        this.loadingText = '压缩失败'
                    }
                }).catch((error) => {
                    const response = error['response'];
                    const message = error['message'];
                    if (message === 'Network Error') {
                        this.$Message.error({
                            content: '网络错误',
                            duration: 3,
                            closable: true
                        });
                    } else if (response) {
                        let dataRes = response['data'];
                        if (dataRes && (dataRes['code'] === 400 || dataRes['code'] === 500)) {
                            this.$Message.error({
                                content: dataRes['msg'],
                                duration: 3,
                                closable: true
                            });
                        }
                    }
                    this.loadingText = '压缩失败'
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
                width: 280px;
                height: 280px;
                .ivu-btn {
                    background: transparent;
                    border: none;
                    color: #93fcfc;
                    font-size: 30px;
                    z-index: 20;
                    left: 65px;
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
                bottom: -155px;
            }
        }
    }
</style>
