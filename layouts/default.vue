<template>
  <div>
    <app-menu/>
    <nuxt/> 
  </div>
</template>

<script>
import menu from '@/components/base/menu';
export default {
  components: {
    'app-menu': menu
  }
};
</script>

