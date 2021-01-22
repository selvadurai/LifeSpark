<template>
 <div class="container-fluid">
 
  <img src="http://localhost:8888/uploads/vision.png" alt="visionboard" width="1000" height="600">

    <br>
     <div class="large-12 medium-12 small-12 cell">
      <label>Image
        <input type="file" name="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
        <br>
        <br>
        <br>
        <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'VisionUpload',
    data(){
      return {
        file: ''
      }
    },
    methods: {
    
      submitFile(){
          let formData = new FormData();
          formData.append('file', this.file);
           /*
            Make the request to the POST /single-file URL
           */
          axios.post( 'http://localhost:8888/api/upload',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
           ).then(function(){
          console.log('Vision board Successfully Uploaded!!');
             location.reload();
          })
          .catch(function(){
            console.log('Vision Board failed to Upload!!');
          });
      },

      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    
    
    }
  }
</script>