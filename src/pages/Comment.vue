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
                  <q-item-section>{{comment.name}}</q-item-section>
                  <q-item-section side>
                     <q-item-label>{{comment.createdAt}}</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="no-padding-bottom">
                  <q-item-label>{{comment.content}}</q-item-label>
                </q-item>
                <div v-if="comment.replyTag" style="padding: 0.5rem 0;">
                  <div class="row" v-for="(_reply, index) in comment.comment" :key="index">
                    <div class="col-2"></div>
                    <div class="col-10 column" style="border-top: #CBCBCB solid 1px;border-bottom: #CBCBCB solid 1px;padding: 0.5rem;">
                      <div class="row">{{_reply.name}} : {{_reply.content}}</div>
                      <div class="row justify-end items-center">
                        <div style="margin-right: 0.25rem;">2019-5-26</div>
                        <!-- <div><q-chip dense clickable color="bookmark" text-color="black" label="回复" style="font-size: 0.8rem;"/></div> -->
                      </div>
                    </div>
                  </div>
                </div>
                <q-item class="items-end row justify-end no-padding-top no-min-height">
                  <q-chip v-if="comment.comment && comment.comment.length!==0 && !comment.replyTag" :dense="!pc" icon="visibility" clickable color="bookmark" text-color="black" label="更多" @click="comment.replyTag=!comment.replyTag"/>
                  <q-chip v-if="comment.replyTag" :dense="!pc" icon="arrow_drop_up" clickable color="bookmark" text-color="black" label="收起" @click="comment.replyTag=!comment.replyTag"/>
                  <q-chip :dense="!pc" icon="create" clickable color="bookmark" text-color="black" label="回复" @click="writeReplyTag(comment.name)" />
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
          <q-card-section class="bg-white text-black">
            <div class="text-h6">{{replyTitle}}</div>
          </q-card-section>
          <q-separator />
          <q-card-section :class="fontsize">
            <q-input v-model="name" outlined maxlength='10' placeholder="昵称" />
            <q-input
              v-model="content"
              outlined
              maxlength='200'
              placeholder="请填写你的留言,200字以内"
              type="textarea" class="input-margin"
              style="padding-bottom: 0;"
            />
          </q-card-section>
          <q-card-actions align="right">
             <q-btn color="primary" label="提 交" class="right" style="margin: 0 1rem 1rem 0;" v-close-popup @click="writeComment"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-page-sticky :position="position" :offset="offset">
        <q-btn fab icon="create" color="accent" @click="writeCommentTag"/>
      </q-page-sticky>
    </q-page>
</template>

<style>
  .right{
    float: right;
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
      replyTitle: '写留言',
      name: null,
      content: null,
      currentPage: 1,
      pageSize: 10,
      comments: [],
      currentComments: [],
      lookReply: []
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
    writeReplyTag (name) {
      this.commitDialog = true
      this.replyTitle = '回复 ' + name
    },
    writeComment () {
      const query = this.Bmob.Query('comment')
      query.set('name', this.name)
      query.set('content', this.content)
      query.save().then(res => {
        this.commitDialog = false
        this.$q.dialog({
          title: '提示',
          message: '留言成功',
          ok: '确定'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    writeCommentTag () {
      this.commitDialog = true
      this.replyTitle = '写留言'
    },
    more (index) {
      this.lookReply[index] = true
      console.log(index)
    },
    alert () {
      this.$q.dialog({
        title: '提示',
        message: '提交成功'
      }).onOk(() => {
        console.log('确定')
      })
    },
    minHeight (offset) {
      this.pageHeight = `calc(100vh - 1.5rem - ${offset}px)`
    },
    pageChange (page) {
      this.currentComments = []
      this.lookReply = []
      for (let i = (this.currentPage - 1) * this.pageSize; i < this.currentPage * this.pageSize; i++) {
        if (i < this.comments.length) {
          this.currentComments.push(this.comments[i])
          this.lookReply.push(false)
        }
      }
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    this.pageWidth = this.$refs.tt.offsetWidth
  },
  created () {
    var that = this
    _getComment(that).then(function (res) {
      that.comments = res
      for (let i = (that.currentPage - 1) * that.pageSize; i < that.currentPage * that.pageSize; i++) {
        if (i < that.comments.length) {
          that.currentComments.push(that.comments[i])
          that.lookReply.push(false)
        }
      }
    })
  }
}
async function _getComment (context) {
  const query = context.Bmob.Query('comment')
  query.order('-createdAt')
  var res = await query.find()
  return res
}
</script>
