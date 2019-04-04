<template>
    <div class="img-compress">
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
        <div class="face-box">
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-upload v-if="!showSource"
                               v-show="!showSourceProgress"
                               ref="source"
                               @fileChange="sourceChange"
                               @beforeUpload="sourceBeforeUpload"
                               @uploading="sourceUploading"
                               @uploaded="sourceUploaded"
                               @errorFormat="sourceErrorFormat"
                               :progress="false"
                               :url="uploadUrl"
                               :maxSize="maxSize"
                               :format="['jpg','jpeg']"></pr-upload>
                    <template v-if="showSourceProgress">
                      <Progress class="upload-progress" v-if="sourceProgress < 100" :percent="sourceProgress" :stroke-width="5" />
                      <Progress class="upload-progress" v-else :percent="100" :stroke-width="5">
                        <span>处理中</span>
                      </Progress>
                    </template>
                    <pr-image-responsive v-if="showSource"
                                         :preview="true"
                                         :url="source['preview']"/>
                </div>
                <div class="img-remove" v-show="showSourceProgress || showSource">
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
        </div>
        <div class="prompt">
            <p>* 图片只支持jpg、jpeg格式</p>
        </div>
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
            sourceBeforeUpload(){
                this.showSourceProgress = true;
            },
            // 上传进度
            sourceUploading(event){
                this.sourceProgress = Math.round(event.percent*100)/100;
            },
            // 上传进度
            sourceUploaded(){
                this.showSourceProgress = false;
            },
            // 错误格式
            sourceErrorFormat(){
                this.showSourceProgress = false;
            },
            modeChange(){
                if (!this.source['preview'] || this.source['preview'] === '') {
                  return
                }
                // 执行压缩
                this.doCompress();
            },
            removeSource() {
                this.source = {};
                this.showSource = false;
                this.sourceProgress = 0;
                this.showSourceProgress = false;
                if (typeof this.compressCancel === 'function'){
                  this.compressCancel();
                }
                this.clearResult();
            },
            // 清除压缩结果
            clearResult(){
                this.compress = {};
                this.showCompress = false;
                this.loadingText = '';
                this.showCompressResult = false;
                this.compressResult = [];
            },
            // 开始压缩
            doCompress() {
              if (typeof this.compressCancel === 'function'){
                this.compressCancel();
              }
              // 压缩前清除之前的压缩记录
              this.clearResult();
              if (!this.source['preview'] || this.source['preview'] === '') {
                    this.$Message.error({
                        content: '请选择源文件',
                        duration: 10,
                        closable: true
                    });
                    return
                }
                this.loadingText = '压缩中';
                axios({
                    url: this.source['compress'] + '?mode=' + this.mode,
                    cancelToken: new axios.CancelToken((c)=>{
                      this.compressCancel = c;
                    })
                }).then(resp => {
                    let dataRes = resp['data'];
                    if (dataRes && dataRes['code'] === 200) {
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
                        this.showCompressResult = true
                    } else {
                        this.compress = {};
                        this.showCompress = false;
                        this.loadingText = '压缩失败'
                    }
                }).catch((error) => {
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
            getQuality(mode){
              switch (mode) {
                case 0:
                  return '高保真, 压缩率低';
                case 1:
                  return '相似度, 压缩率适中';
                case 2:
                  return '相似度低, 压缩率高';
              }
            }
        },
        destroyed(){
          if (typeof this.compressCancel === 'function'){
            this.compressCancel();
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
        }
        .after-comparison {
            position: relative;
            margin: 0 auto;
            bottom: 100px;
        }
        .upload-progress{
          width: 80%;
        }
    }
</style>
