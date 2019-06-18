<template>
    <q-page style="padding: 0.5rem;">
      <div class="row justify-center items-start margin-bottom">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">留言列表</div>
          </q-toolbar>
          <q-separator />
            <q-card-section :class="fontsize">
              <q-list v-for="comment in currentComments" :key="comment.id">
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
                  <q-item-label>{{comment.content}}{{comment.id}}</q-item-label>
                </q-item>
                <q-item class="items-end column no-padding-top item-mini-height">
                   <q-chip :dense="!pc" icon="create" clickable color="bookmark" text-color="black" label="评论" />
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

      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">写留言</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :class="fontsize" >
            <q-input v-model="name" outlined label="昵称" lazy-rules
                :rules="[ val => val && val.length > 0 || '请输入昵称']"/>
            <q-input
              v-model="name"
              outlined
              label="请填写你的留言,200字以内"
              type="textarea" class="input-margin" lazy-rules
              :rules="[ val => val && val.length > 0 || '请输入留言']"
            />
            <q-btn color="primary" label="提 交" @click="alert" class="right marginbottom"/>
          </q-card-section>
        </q-card>
      </div>
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
      name: null,
      currentPage: 1,
      pageSize: 10,
      comments: [
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 1 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 2 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 3 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 4 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 5 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 6 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 7 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 8 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 9 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 10 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 11 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 12 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 13 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 14 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 15 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 16 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 17 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 18 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 19 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 20 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 21 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 22 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 23 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 24 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 25 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 26 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 27 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 28 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 29 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 30 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 31 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 32 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 33 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 34 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 35 },
        { content: '批量下载QQ空间相册的若干方法批量下载QQ空间相册的若干方法', id: 36 }
      ],
      currentComments: []
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
    commentWidth () {
      return this.$q.platform.is.desktop ? { 'width': '12%' } : { 'width': '25%' }
    },
    maxPage () {
      return Math.ceil(this.comments.length / this.pageSize)
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
  created () {
    for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
      this.currentComments.push(this.comments[i])
    }
  }
}
</script>
