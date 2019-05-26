<template>
    <q-page>
      <p class="space"></p>
      <div class="row justify-center items-start">
        <q-card bordered class="my-card row" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">写留言</div>
          </q-toolbar>
          <q-separator />
          <q-card-section :style="fontsize" :class="width">
            <q-input v-model="name" outlined label="昵称" lazy-rules
                :rules="[ val => val && val.length > 0 || '请输入昵称']"/>
            <q-input
              v-model="name"
              outlined
              label="请填写你的留言,200字以内"
              type="textarea" class="input-margin" lazy-rules
              :rules="[ val => val && val.length > 0 || '请输入留言']"
            />
            <q-btn color="primary" label="提 交" class="btn-right"/>
          </q-card-section>
        </q-card>
      </div>

      <p class="space"></p>
      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">留言列表</div>
          </q-toolbar>
          <q-separator />
            <q-card-section :style="fontsize" >
              <q-list>
                <q-item clickable v-ripple class="card-border">
                  <q-item-section avatar>
                    <q-avatar rounded>
                      <img src="statics/icons/favicon-32x32.png">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>Image rounded avatar</q-item-section>
                  <q-item-section side :top="!pc">
                     <q-item-label>2019-5-26</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
        </q-card>
      </div>
    </q-page>
</template>

<style>
  .btn-right{
    float: right;
  }
  .input-margin{
    margin-top: 0.5rem;
  }
  .card-border{
    border: 1px solid #cbcbcb;
  }
</style>

<script>
export default {
  name: 'PageAbout',
  data () {
    return {
      name: null
    }
  },
  computed: {
    width () {
      return this.$q.platform.is.desktop ? 'col-7' : 'col-11 justify-center'
    },
    fontsize () {
      return this.$q.platform.is.desktop ? { 'font-size': 1.25 + 'rem' } : { 'font-size': 1 + 'rem' }
    },
    pc () {
      return this.$q.platform.is.desktop
    }
  }
}
</script>
