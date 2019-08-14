<template>
  <div>
    <h1>Home Page</h1>
    <div class="samples">
      <p v-for="sample in samples" :key="sample.id">
        {{ sample.name }}
      </p>
      <upload-file/>
      <!-- <form action="http://localhost:5000/sample/brain/file" method="post" enctype="multipart/form-data"> -->
      <!--   Select a file: <input type="file" name="myFile"><br><br> -->
      <!--   <input type="submit" value="Submit"> -->
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import UploadFile from '@/components/upload-file'
//  import { API_URL } from '@/static/const.js';
  export default {
    components: {
      'upload-file': UploadFile
    },
    // async fetch({ store }) {
    //   console.log(API_URL);
    //   let { data } = await axios.get('http://localhost:5000/sample/brain')
    //   store.commit('put', [])
    // }, 
    computed: {
      samples() {
        return this.$store.state.samples
      }
    },
  };
</script>
