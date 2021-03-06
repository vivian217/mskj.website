<!-- 文件上传 -->
<template>
  <div class="pr-upload">
    <Upload
      ref="upload"
      :action="url"
      :name="name"
      :data="data"
      :multiple="multiple"
      :type="drag ? 'drag' : 'select'"
      :show-upload-list="progress"
      :accept="accept"
      :format="format"
      :max-size="maxSize"
      :before-upload="beforeUpload"
      :on-success="success"
      :on-progress="uploading"
      :on-preview="preview"
      :on-error="error"
      :on-remove="remove"
      :on-format-error="errorFormat"
      :on-exceeded-size="errorSize">
      <div style="padding: 20px 0" v-if="!showInMobile">
        <Icon type="ios-add-circle-outline" size="52" style="color: #c6c6c6"></Icon>
        <p>点击上传图片</p>
        <p>或将图片拖拽到此区域</p>
      </div>
      <div class="pr-upload-mobile" v-if="showInMobile">
        <p>点击上传图片</p>
      </div>
    </Upload>
  </div>
</template>
<script>
  export default {
    name: 'pr-upload',
    props: {
      // 服务器接收文件地址
      url: {
        required: true
      },
      // 上传文件字段名
      name: {
        default: 'file'
      },
      // 是否对文件重命名
      rename: {
        default: true
      },
      // 是否对文件进行压缩处理
      compress: {
        default: false
      },
      // 多文件上传
      multiple: {
        default: false
      },
      // 拖拽上传
      drag: {
        default: true
      },
      // 展示上传进度
      progress: {
        default: true
      },
      // 文件类型，选择文件时限定
      accept: {
        default: ''
      },
      // 后缀名，选择后检查
      format: {
        default: () => {
          return []
        }
      },
      // 文件最大大小, KB
      maxSize: {
        default: 2048 * 1024
      },
      // 文件最大个数5
      maxNumber: {
        default: 1
      },
      // 是否手机端显示
      showInMobile: {
        default: false
      }
    },
    data() {
      return {
        // 上传成功的文件列表
        files: [],
        // 额外附加参数
        data: {},
        // 取消上传
        uploadCancelUids: [],
        // 当前正在上传的文件uid
        currentUid: ''
      }
    },
    methods: {
      // 上传之前
      beforeUpload() {
        if (this.files.length + 1 > this.maxNumber) {
          this.files = []
        }
        this.$emit('beforeUpload');
        return true
      },
      // 上传成功
      success(resp, file) {
        let cancel = false;
        this.uploadCancelUids.forEach((value) => {
          if (value === file['uid']) {
            cancel = true;
          }
        });
        if (resp['code'] === 200) {
          let fileInfo = resp['data'];

          if (!cancel) {
            // 加入文件列表
            this.files.push(fileInfo)
          } else {
            console.warn('用户手动取消上传请求');
          }
        }
        if (!cancel) {
          this.$emit('uploaded');
        }
      },
      // 上传进度
      uploading(event, file, fileList) {
        this.currentUid = file['uid'];
        let cancel = false;
        this.uploadCancelUids.forEach((value) => {
          if (value === file['uid']) {
            cancel = true;
          }
        });
        if (!cancel) {
          this.$emit('uploading', event, file, fileList);
        }
        return true;
      },
      // 点击预览
      preview(file) {
        // 新标签打开预览文件窗口
        window.open(file.response.file.preview, '_blank')
      },
      // 格式错误
      errorFormat() {
        this.$Message.error({
          content: '文件格式有误, 允许的格式有: ' + this.format.join(' '),
          duration: 3,
          closable: true
        });
        this.$emit('errorFormat');
      },
      // 大小错误
      errorSize(file) {
        this.$Message.error({
          content: [
            file.name,
            '文件大小',
            '(', file.size / 1024, 'KB)',
            '超出限制: max <= ',
            this.maxSize, 'KB'
          ].join(''),
          duration: 3,
          closable: true
        })
      },
      // 文件上传失败
      error() {
        this.$Message.error({
          content: '上传文件失败',
          duration: 3,
          closable: true
        });
        this.$emit('uploaded');
        this.$emit('error');
      },
      // 点击删除
      remove(file) {
        for (let i = 0, len = this.files.length; i < len; i++) {
          if (this.files[i]['uuid'] === file['uuid']) {
            this.files.splice(i, 1);
            break
          }
        }
      },
      // 清理所有文件
      removeAll() {
        // 文件列表置空
        this.files = [];
        // 删除组件内部文件
        this.$refs['upload'].clearFiles()
      },
      // 取消上传
      cancelUpload() {
        this.uploadCancelUids.push(this.currentUid);
      }
    },
    watch: {
      // 文件列表发生了变化
      files: function (files) {
        // 通知
        this.$emit('fileChange', files)
      },
    },
    created() {
      // 添加附加参数
      this.data['rename'] = this.rename;
      this.data['compress'] = this.compress;
    }
  }
</script>
<style lang="less" scoped>
  .pr-upload {
    text-align: center;

    .pr-upload-mobile {
      padding: 10px 0;
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.35) inset;
      margin: 10px 0;
      border-radius: 5px;
    }
  }
</style>
