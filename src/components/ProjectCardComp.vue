<template>
    <div class="card mb-5 mx-auto bg-black" style="width: 500px;">
        <iframe :src="project.liveLink" frameborder="0" ></iframe>
        <div class="card-body">
          <h5 class="card-title">{{project.name}}</h5>
          <a :href="project.liveLink" class="btn">Live Link</a>
          <a :href="project.githubLink" class="btn">GitHub</a>
        </div>
      </div>
   
</template>
<script>
export default{
    props:["project"]
}
</script>
<style scoped>
iframe{
    height: 400px;
    border-radius: 15px;
}
.card{
    border: 5px solid #5CB85C ;
    border-radius: 20px;
}
 .card-title{
    font-size: 50px;
    color: #5CB85C;
 }
 .btn{
    font-size: 20px;
    color: #5CB85C;
    border: #5CB85C 3px solid;
    margin: 5px;
    
    
 }
 .btn:hover{
    box-shadow: 5px 12px 15px 0px rgba(0, 255, 9, 0.71);
    -webkit-box-shadow: 5px 12px 15px 0px rgba(0, 255, 9, 0.71);
    -moz-box-shadow: 5px 12px 15px 0px rgba(0, 255, 9, 0.71);
 }


</style>