<template>
  <div class="home">
    <div class="container">
      <h1>{{ msg }}</h1>
    </div>
    <div class="container">
       
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome Muse APP",
      
    };
  },

  methods: {
     
  },

  created() {
     
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout-section {
  margin-bottom: 0;
}
.content-box {
  box-shadow: none;
  border: 1px solid #ddd;
}
.content-box {
  background: #fff;
  border-radius: 3px;
  display: block;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 1px rgba(180, 180, 180, 0.5);
  overflow: hidden;
  margin-bottom: 30px;
}
.row-featured-category {
  margin-bottom: -1px;
}
.row-featured {
  overflow: hidden;
  margin-right: -16px;
}
.f-category {
  border-color: #f5f5f5 #f5f5f5 #f5f5f5 -moz-use-text-color;
  border: solid 1px #f5f5f5;
  padding: 25px 15px;
}
.f-category {
  border: solid 1px #ddd;
  margin-top: -1px;
  border-left: 0;
  background: #fff;
  padding: 15px;
  text-align: center;
  overflow: hidden;
  display: block;
}
.box-title {
  border-bottom: 0 solid #fafafa;
  background-color: #fafafa;
  text-align: left;
}
.no-border {
  border: none;
}

.no-border {
  border: 0;
}

.box-title h2 {
  margin: 15px 0;
  padding: 0;
  font-size: 18px;
  line-height: normal;
  font-weight: 500;
  text-transform: none;
  display: inline-block;
}
.box-title h2 span {
  font-weight: lighter;
}
</style>
