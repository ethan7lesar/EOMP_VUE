<template>
    <div class="col d-flex">
        <img :src="experience.image" alt="image" loading="lazy">

        <button type="button" class="btn btn-outline-success btn-lg btn-block rounded-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
          Find Out More ...
        </button>
        <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style="display: none;">
          <div class="modal-dialog bg-black">
            <div class="modal-content bg-black">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-success" id="staticBackdropLabel">
                 {{ experience.name }}
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="offmodal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-white">
                <ul>
                  <li>Position: {{ experience.position}}</li>
                  <li>Year: {{experience.year}}</li>
                  <li>Role: {{experience.role}}</li>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary border-success text-success bg-black" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default{
    props:["experience"]

}

</script>
<style scoped>


</style>