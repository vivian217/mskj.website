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
                :on-preview="preview"
                :on-remove="remove"
                :on-format-error="errorFormat"
                :on-exceeded-size="errorSize">
            <div style="padding: 20px 0">
                <Icon type="ios-add-circle-outline" size="52" style="color: #c6c6c6"></Icon>
                <p>点击上传图片</p>
                <p>或将图片拖拽到此区域</p>
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
            }
        },
        data() {
            return {
                // 上传成功的文件列表
                files: [],
                // 额外附加参数
                data: {},
            }
        },
        methods: {
            // 上传之前
            beforeUpload() {
                if (this.files.length + 1 > this.maxNumber) {
                    this.$Message.error({
                        content: '文件个数超出限制: ' + this.maxNumber,
                        duration: 10,
                        closable: true
                    })
                    return false
                }
                return true
            },
            // 上传成功
            success(resp, file) {
                let fileInfo = resp.file
                fileInfo['uid'] = file.uid
                // 加入文件列表
                this.files.push(fileInfo)
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
                    duration: 10,
                    closable: true
                })
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
                    duration: 10,
                    closable: true
                })
            },
            // 点击删除
            remove(file) {
                for (let i = 0, len = this.files.length; i < len; i++) {
                    if (this.files[i].uid == file.uid) {
                        this.files.splice(i, 1)
                        break
                    }
                }
            },
            // 清理所有文件
            removeAll(){
                // 文件列表置空
                this.files = []
                // 删除组件内部文件
                this.$refs['upload'].clearFiles()
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
            this.data['rename'] = this.rename
        }
    }
</script>
