<template>
    <q-page style="padding: 0.5rem;" :style-fn="minHeight">
      <div class="row justify-center items-start margin-bottom" ref="tt">
        <q-card bordered class="my-card" :class="width" :style="commentHeight">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">留言板</div>
          </q-toolbar>
          <q-separator />
            <q-card-section :class="fontsize">
              <q-list v-for="(comment, index) in currentComments" :key="index">
                <q-item class="no-padding-bottom">
                  <q-item-section avatar>
                    <q-avatar rounded>
                      <img src="statics/icons/favicon-32x32.png">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>张三</q-item-section>
                  <q-item-section side>
                     <q-item-label>2019-5-26</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="no-padding-bottom">
                  <q-item-label>{{comment.content}}</q-item-label>
                </q-item>
                <div v-if="reply" style="padding: 0.5rem 0;">
                  <div class="row">
                    <div class="col-2"></div>
                    <div class="col-10 column" style="border-top: #CBCBCB solid 1px;border-bottom: #CBCBCB solid 1px;padding: 0.5rem;">
                      <div class="row">李四 : 你说得对</div>
                      <div class="row justify-end items-center">
                        <div style="margin-right: 0.25rem;">2019-5-26</div>
                        <div><q-chip dense clickable color="bookmark" text-color="black" label="回复" style="font-size: 0.8rem;"/></div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-2"></div>
                    <div class="col-10 column" style="border-top: #CBCBCB solid 1px;border-bottom: #CBCBCB solid 1px;padding: 0.5rem;">
                      <div class="row">王五 回复 李四 : 你说得对</div>
                      <div class="row justify-end items-center">
                        <div style="margin-right: 0.25rem;">2019-5-26</div>
                        <div><q-chip dense clickable color="bookmark" text-color="black" label="回复" style="font-size: 0.8rem;"/></div>
                      </div>
                    </div>
                  </div>
                </div>
                <q-item class="items-end row justify-end no-padding-top no-min-height">
                  <q-chip :dense="!pc" icon="visibility" clickable color="bookmark" text-color="black" label="更多" @click="reply=!reply"/>
                  <q-chip :dense="!pc" icon="create" clickable color="bookmark" text-color="black" label="回复"/>
                </q-item>
                <q-separator />
              </q-list>
            </q-card-section>
            <q-pagination
              v-if="comments.length > pageSize"
              class="flex-center margin-bottom"
              size="1rem"
              v-model="currentPage"
              :max="maxPage"
              :max-pages="pageSize"
              @input="pageChange"
              >
            </q-pagination>
        </q-card>
      </div>

      <q-dialog v-model="commitDialog">
        <q-card bordered class="my-card" :style="dialogWidth">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">写留言</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :class="fontsize" >
            <q-input v-model="name" outlined placeholder="昵称" lazy-rules
                :rules="[ val => val && val.length > 0 || '请输入昵称']"/>
            <q-input
              v-model="name"
              outlined
              placeholder="请填写你的留言,200字以内"
              type="textarea" class="input-margin" lazy-rules
              :rules="[ val => val && val.length > 0 || '请输入留言']"
            />
            <q-btn color="primary" label="提 交" class="right marginbottom"/>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-page-sticky :position="position" :offset="offset">
        <q-btn fab icon="create" color="accent" @click="commitDialog=true"/>
      </q-page-sticky>
    </q-page>
</template>

<style>
  .right{
    float: right;
  }
  .marginbottom{
    margin-bottom: 1rem;
  }
  .item-mini-height{
    min-height: 0;
  }
  .input-margin{
    margin-top: 0.5rem;
  }
  .card-border{
    border: 1px solid #cbcbcb;
    margin-bottom: 15px;
  }
</style>

<script>
export default {
  name: 'PageAbout',
  data () {
    return {
      pageHeight: null,
      pageWidth: null,
      commitDialog: false,
      name: null,
      currentPage: 1,
      pageSize: 10,
      comments: [
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法' },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法' }],
      currentComments: [],
      reply: false
    }
  },
  computed: {
    width () {
      return this.$q.platform.is.desktop ? 'col-6' : 'col-12 justify-center'
    },
    fontsize () {
      return this.$q.platform.is.desktop ? 'pc-font-size' : 'no-pc-font-size'
    },
    pc () {
      return this.$q.platform.is.desktop
    },
    commentHeight () {
      return { 'min-height': this.pageHeight }
    },
    maxPage () {
      return Math.ceil(this.comments.length / this.pageSize)
    },
    dialogWidth () {
      return this.$q.platform.is.desktop ? { 'min-width': '600px' } : { 'min-width': this.pageWidth + 'px' }
    },
    position () {
      return this.$q.platform.is.desktop ? 'bottom-right' : 'bottom-left'
    },
    offset () {
      return this.$q.platform.is.desktop ? [this.pageWidth / 5, 18] : [18, 18]
    }
  },
  methods: {
    alert () {
      this.$q.dialog({
        title: '提示',
        message: '提交成功'
      }).onOk(() => {
        console.log('确定')
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    },
    minHeight (offset) {
      this.pageHeight = `calc(100vh - 1.5rem - ${offset}px)`
    },
    pageChange (page) {
      this.currentComments = []
      for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
        if (i < this.comments.length) {
          this.currentComments.push(this.comments[i])
        }
      }
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    this.pageWidth = this.$refs.tt.offsetWidth
  },
  created () {
    for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
      if (i < this.comments.length) {
        this.currentComments.push(this.comments[i])
      }
    }
  }
}
</script>
