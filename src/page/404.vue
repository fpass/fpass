<template>
  <div class="wrap">
    {{$t('notfound')}}，<router-link to="/">{{$t('backhome')}}</router-link>
  </div>
</template>

<style lang="less" scoped>
  .wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
</style>
