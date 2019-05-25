<template>
    <q-page>
      <p class="space"></p>
      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">文章分类</div>
          </q-toolbar>
          <q-separator />
          <q-card-section>
            <q-chip clickable color="primary" text-color="white" label="javascript" />
            <q-chip clickable color="teal" text-color="white" label="vue"/>
            <q-chip clickable color="orange" text-color="white" label="fabric"/>
            <q-chip clickable color="red" text-color="white" label="nodejs" />
            <q-chip clickable color="deep-orange" text-color="white" label="linux"/>
            <q-chip clickable color="teal" text-color="white" label="数据库"/>
          </q-card-section>
        </q-card>
      </div>

      <p class="space"></p>
      <div class="row justify-center items-start">
        <q-card bordered class="my-card" :class="width">
          <q-toolbar class="bg-white text-black">
            <div class="card-title">文章列表</div>
          </q-toolbar>
          <q-separator />
          <q-card-section>
            <q-chip clickable color="primary" text-color="white" label="javascript" />
            <q-chip clickable color="teal" text-color="white" label="vue"/>
            <q-chip clickable color="orange" text-color="white" label="fabric"/>
            <q-chip clickable color="red" text-color="white" label="nodejs" />
            <q-chip clickable color="deep-orange" text-color="white" label="linux"/>
            <q-chip clickable color="teal" text-color="white" label="数据库"/>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
</template>

<style>
  .card-title{
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: .00937em;
    margin-left: -24px;
    padding: 2px 20px 2px 24px;
    background: #e0e0e0;
    color: #616161;
    position: relative;
    border-radius: 3px 5px 5px 0;
  }
  .card-title:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top-color: #bebebe;
    border-width: 9px 0 0 11px;
  }
  .space{
    height: 0.5rem;
  }
</style>

<script>
export default {
  name: 'PageAbout',
  computed: {
    width () {
      return this.$q.platform.is.desktop ? 'col-6' : 'col-11'
    }
  }
}
</script>
