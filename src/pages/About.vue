<template>
    <q-page style="padding: 0.5rem;">
      <div class="row justify-center items-start margin-bottom">
        <q-card bordered class="my-card col-8">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">关于我</div>
          </q-toolbar>
          <q-separator />
          <q-card-section v-html="aboutMe" style="padding: 1rem 2rem;"/>
        </q-card>
      </div>

      <div class="row justify-center items-start margin-bottom">
        <q-card bordered class="my-card col-8">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">技术栈</div>
          </q-toolbar>
          <q-separator />
          <q-card-section v-html="techStack" style="padding: 1rem 2rem;"/>
        </q-card>
      </div>

      <div class="row justify-center items-start">
        <q-card bordered class="my-card col-8">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">联系我</div>
          </q-toolbar>
          <q-separator />
          <q-card-section v-html="contact" style="padding: 1rem 2rem;"/>
        </q-card>
      </div>
    </q-page>
</template>

<style scoped>
</style>
<style>
</style>

<script>
import { getAbout } from 'assets/utility.js'
export default {
  name: 'PageAbout',
  data () {
    return {
      aboutMe: '',
      techStack: '',
      contact: ''
    }
  },
  created () {
    var that = this
    getAbout(this).then(res => {
      that.aboutMe = res[0].aboutMe
      that.techStack = res[0].techStack
      that.contact = res[0].contact
      that.$q.loading.hide()
    }).catch(err => {
      that.$q.loading.hide()
      that.$q.dialog({
        title: '提示',
        message: err.toString(),
        ok: '确定'
      })
    })
  }
}

</script>
