<template>

      <div class="card">
        <img :src="experience.image" :alt="Avatar" >
        <div class="container">
          <h4><b>{{ experience.name }}</b></h4> 
          <ul class="text-center">
            <li>Position: {{ experience.position}}</li>
            <li>Year: {{experience.year}}</li>
            <li>Role: {{experience.role}}</li>
          </ul>
        </div>
      </div>
</template>
<script>
export default{
    props:["experience"]

}

</script>
<style scoped>

img{
  width: 250px;
  height: 250px;
  border-radius: 5px 5px 0 0;
}
.card {
  margin: auto;
  box-shadow: 0 4px 8px 0 #5CB85C;
  transition: 0.3s;
  width: 250px;
  border-radius: 5px;
  border: #5CB85C 2px solid;
  background-color: black;
  color: #5CB85C;
  
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
ul{
  list-style: none;
}



.container {
  padding: 2px 16px;
}


</style>