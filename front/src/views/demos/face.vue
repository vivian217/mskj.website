<template>
    <div class="face">
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
                <div class="img-remove" v-show="showSource || showSource">
                    <Icon type="md-close" size="30" color="#93fcfc" @click="removeSource"/>
                </div>
            </div>
            <div class="img-box">
                <div class="img-box-inner">
                    <pr-upload v-if="!showTarget"
                               v-show="!showTargetProgress"
                               ref="target-upload"
                               @fileChange="targetChange"
                               @beforeUpload="targetBeforeUpload"
                               @uploading="targetUploading"
                               @uploaded="targetUploaded"
                               @errorFormat="targetErrorFormat"
                               :progress="false"
                               :url="uploadUrl"
                               :maxSize="maxSize"
                               :format="['jpg','jpeg']"></pr-upload>
                    <template v-if="showTargetProgress">
                      <Progress class="upload-progress" v-if="targetProgress < 100" :percent="targetProgress" :stroke-width="5" />
                      <Progress class="upload-progress" v-else :percent="100" :stroke-width="5">
                        <span>处理中</span>
                      </Progress>
                    </template>
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
            <p>* 上传两张人脸图片，建议每张大小不超过5M，保证露出五官，提高对比精度。</p>
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
        name: "face",
        components: {
            PrUpload,
            PrImageResponsive,
            LoadingStatus
        },
        data() {
            return {
                // 是否可用
                disabled: true,
                // 文件大小
                maxSize: 102400,
                uploadUrl: 'http://online.mengshankeji.com/api/v1/upload/file',
                compareUrl: 'http://online.mengshankeji.com/api/v1/compare',
                showSource: false,
                source: {},
                showSourceProgress: false,
                sourceProgress: 0,
                showTarget: false,
                target: {},
                showTargetProgress: false,
                targetProgress: 0,
                loadingText: '',
                // 比对请求取消
                compareCancel: null
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
            // 上传之前
            targetBeforeUpload(){
              this.showTargetProgress = true;
            },
            // 上传进度
            targetUploading(event){
              this.targetProgress = Math.round(event.percent*100)/100;
            },
            // 上传进度
            targetUploaded(){
              this.showTargetProgress = false;
            },
            // 错误格式
            targetErrorFormat(){
              this.showTargetProgress = false;
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
                this.showSource = false;
                this.sourceProgress = 0;
                this.showSourceProgress = false;
                this.loadingText = '';
                if (typeof this.compareCancel === 'function'){
                  this.compareCancel();
                }
            },
            removeTarget() {
                this.target = {};
                this.showTarget = false;
                this.targetProgress = 0;
                this.showTargetProgress = false;
                this.loadingText = '';
                if (typeof this.compareCancel === 'function'){
                  this.compareCancel();
                }
            },
            // 开始比对
            doCompare() {
                if (this.disabled) {
                  this.$Message.error({
                    content: '比对服务未开启, 请检查系统配置',
                    duration: 5,
                    closable: true
                  });
                  return
                }
                if (!this.source['preview'] || this.source['preview'] === '') {
                    this.$Message.error({
                        content: '请选择源文件',
                        duration: 5,
                        closable: true
                    });
                    return
                } else if (!this.target['preview'] || this.target['preview'] === '') {
                    this.$Message.error({
                        content: '请选择目标文件',
                        duration: 5,
                        closable: true
                    });
                    return
                }
                if (typeof this.compareCancel === 'function'){
                  this.compareCancel();
                }
                // console.log('开始比对');
                this.loadingText = '比对中';
                axios({
                    url: this.compareUrl,
                    params: {
                        source: this.source['uuid'],
                        target: this.target['uuid'],
                    },
                    cancelToken: new axios.CancelToken((c)=>{
                        this.compareCancel = c;
                    })
                }).then(resp => {
                    let dataRes = resp['data'];
                    if (dataRes) {
                        if (dataRes['code'] === 200) {
                            this.loadingText = Math.ceil(dataRes['data']['similarity']) + '%<br>相似度'
                        } else if (dataRes['code'] === 400 || dataRes['code'] === 500) {
                            this.$Message.error({
                                content: dataRes['msg'],
                                duration: 5,
                                closable: true
                            });
                            this.loadingText = '比对失败';
                        }
                    } else {
                        this.$Message.error({
                            content: '网络错误',
                            duration: 5,
                            closable: true
                        });
                        this.loadingText = '比对失败';
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
                    this.loadingText = '比对失败';
                });
            }
        },
        created() {
          axios({
            url: this.compareUrl,
          }).catch((error) => {
            const response = error['response'];
            const message = error['message'];
            if (message === 'Network Error') {
              console.error('比对服务初始化失败, 请检查配置');
            } else if (response) {
              this.disabled = false;
            }
          });
        },
        destroyed(){
          if (typeof this.compareCancel === 'function'){
            this.compareCancel();
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
            }
        }
        .upload-progress{
          width: 80%;
        }
    }
</style>
