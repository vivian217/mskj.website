<template>
    <div class="img-compress">
        <Row>
            <Col>
                <div class="choice">
                    <div class="btn-group">
                        <span>选择压缩品质：</span>
                        <RadioGroup v-model="mode" @on-change="modeChange" type="button">
                            <Tooltip :content="getQuality(0)">
                                <Radio :label="0">高</Radio>
                            </Tooltip>
                            <Tooltip :content="getQuality(1)">
                                <Radio :label="1">中</Radio>
                            </Tooltip>
                            <Tooltip :content="getQuality(2)">
                                <Radio :label="2">低</Radio>
                            </Tooltip>
                        </RadioGroup>
                    </div>
                </div>
            </Col>
        </Row>
        <Row :gutter="16">
            <Col span="12">
                <div class="img-box" :class="showSource?'':'compress-bg1'">
                <pr-image-responsive v-if="showSource"
                                     :preview="true"
                                     :url="source['preview']"/>
                <div class="img-remove" v-show="showSourceProgress || showSource">
                    <Icon type="md-close" size="25" color="#93fcfc" @click="removeSource"/>
                </div>
            </div>
                <pr-upload v-show="!showSourceProgress"
                           ref="source"
                           :showInMobile="true"
                           @fileChange="sourceChange"
                           @beforeUpload="sourceBeforeUpload"
                           @uploading="sourceUploading"
                           @uploaded="sourceUploaded"
                           @errorFormat="sourceErrorFormat"
                           :progress="false"
                           :url="uploadUrl"
                           :maxSize="maxSize"
                           :format="['jpg','jpeg','JPG','JPEG','jPG','jpG']"></pr-upload>
                <template v-if="showSourceProgress">
                    <Progress class="upload-progress" v-if="sourceProgress < 100" :percent="sourceProgress" :stroke-width="5" />
                    <Progress class="upload-progress" v-else :percent="100" :stroke-width="5">
                        <span>处理中</span>
                    </Progress>
                </template>
            </Col>
            <Col span="12">
                <div class="img-box" :class="showCompress?'':'compress-bg2'">
                    <pr-image-responsive v-if="showCompress"
                                         :preview="true"
                                         :url="compress['compress_preview']"/>
                </div>
               <div class="download-prompt" @click="download(compress['compress_download'])">
                   <p>保存到本地</p>
               </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div class="prompt">
                    <p>* 请上传jpg、jpeg格式的图片</p>
                </div>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col>
                <div class="loading-box">
                    <loading-status :innerText="loadingText" :loading="isLoading"></loading-status>
                    <Button class="center"
                            v-show="!loadingText"
                            @click="doCompress">开始压缩
                    </Button>
                </div>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col>
                <div class="after-comparison" v-show="showCompressResult">
                    <div class="inner">
                        <p class="title">压缩结果</p>
                        <div class="detail">
                            <p v-for="item in compressResult" :key="item.key">
                                <Row>
                                    <Col span="9">{{item.name}}</Col>
                                    <Col span="15" style="font-weight: bolder">{{item.value}}</Col>
                                </Row>
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
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
                showSourceProgress: false,
                sourceProgress: 0,
                showCompress: false,
                compress: {},
                loadingText: '',
                isLoading: false,
                compressResult: [],
                showCompressResult: false,
                // 压缩模式
                mode: 0,
                // 压缩请求取消
                compressCancel: null
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
            // 上传之前
            sourceBeforeUpload() {
                this.showSourceProgress = true;
            },
            // 上传进度
            sourceUploading(event) {
                this.sourceProgress = Math.round(event.percent * 100) / 100;
            },
            // 上传进度
            sourceUploaded() {
                this.showSourceProgress = false;
            },
            // 错误格式
            sourceErrorFormat() {
                this.showSourceProgress = false;
            },
            modeChange() {
                if (!this.source['preview'] || this.source['preview'] === '') {
                    return
                }
                // 执行压缩
                this.doCompress();
            },
            removeSource() {
                this.$refs['source'].removeAll();
                this.source = {};
                this.showSource = false;
                this.sourceProgress = 0;
                this.showSourceProgress = false;
                if (typeof this.compressCancel === 'function') {
                    this.compressCancel();
                }
                this.clearResult();
                // 取消上传
                if (this.$refs['source']){
                  this.$refs['source'].cancelUpload();
                }
            },
            // 清除压缩结果
            clearResult() {
                this.compress = {};
                this.showCompress = false;
                this.loadingText = '';
                this.showCompressResult = false;
                this.compressResult = [];
            },
            // 开始压缩
            doCompress() {
                if (typeof this.compressCancel === 'function') {
                    this.compressCancel();
                }
                // 压缩前清除之前的压缩记录
                this.clearResult();
                if (!this.source['preview'] || this.source['preview'] === '') {
                    this.$Message.error({
                        content: '请上传一张图片',
                        duration: 10,
                        closable: true
                    });
                    return
                }
                this.loadingText = '压缩中';
                this.isLoading = true;
                axios({
                    url: this.source['compress'] + '?mode=' + this.mode,
                    cancelToken: new axios.CancelToken((c) => {
                        this.compressCancel = c;
                    })
                }).then(resp => {
                    let dataRes = resp['data'];
                    this.isLoading = false;
                    if (dataRes && dataRes['code'] === 200) {
                        if (dataRes['data']['compress_ratio'] == '0.000%') {
                            this.$Message.warning({
                                content: '该图可能已经被压缩过，请更换',
                                duration: 5,
                                closable: true
                            });
                            this.loadingText = '压缩失败';
                        }else{
                            this.compress = dataRes['data'];
                            this.showCompress = true;
                            this.loadingText = dataRes['data']['compress_ratio'] + '<br>压缩率';
                            this.compressResult.push({
                                name: '压缩前：',
                                value: dataRes['data']['before_compress_size_format']
                            });
                            this.compressResult.push({
                                name: '压缩后：',
                                value: dataRes['data']['after_compress_size_format']
                            });
                            this.compressResult.push({
                                name: '节省空间：',
                                value: dataRes['data']['save_size_format']
                            });
                            this.compressResult.push({
                                name: '压缩率：',
                                value: dataRes['data']['compress_ratio']
                            });
                            this.compressResult.push({
                                name: '画质：',
                                value: this.getQuality(this.mode)
                            });
                            this.showCompressResult = true;
                        }
                    } else {
                        this.compress = {};
                        this.showCompress = false;
                        this.loadingText = '压缩失败';
                    }
                }).catch((error) => {
                    this.isLoading = false;
                    const response = error['response'];
                    const message = error['message'];
                    if (axios.isCancel(error)) {
                        console.warn('用户手动取消请求');
                        this.loadingText = '';
                        return
                    }
                    if (message === 'Network Error') {
                        this.$Message.error({
                            content: '网络错误',
                            duration: 5,
                            closable: true
                        });
                        this.loadingText = '压缩失败';
                    } else if (response) {
                        let dataRes = response['data'];
                        if (dataRes && (dataRes['code'] === 400 || dataRes['code'] === 500)) {
                            this.$Message.error({
                                content: dataRes['msg'],
                                duration: 5,
                                closable: true
                            });
                        }
                    }
                    this.loadingText = '压缩失败';
                });
            },
            // 获取画质
            getQuality(mode) {
                switch (mode) {
                    case 0:
                        return '高保真, 压缩率低';
                    case 1:
                        return '相似度, 压缩率适中';
                    case 2:
                        return '相似度低, 压缩率高';
                }
            },
            download(imgSrc) {
              if (imgSrc && imgSrc !== '') {
                window.location.href = imgSrc
              } else {
                this.$Message.warning({
                  content: '请先压缩图片',
                  duration: 5,
                  closable: true
                });
              }
            }
        },
        destroyed() {
            if (typeof this.compressCancel === 'function') {
                this.compressCancel();
            }
        }
    }
</script>

<style lang="less" scoped>
    .img-compress {
        .after-comparison {
            position: relative;
            margin: 0 auto;
            bottom: 42px;
        }
        .download-prompt {
            &:hover {
              cursor:pointer;
            }
            padding: 10px 0;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.35) inset;
            margin: 10px 0;
            border-radius: 5px;
            text-align: center;
        }
    }
</style>
