<template>

</template>

<script>
  export default {
    asyncData ({redirect, store, isStatic}) {
      redirect(`/${store.state.locale}`)
    }
  }
</script>
