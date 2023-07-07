<template>
  <div class="row p-3">
    <div class="col-2">
      <i class="fa-brands fa-html5 fa-2xl"></i>
    </div>
    <div class="col-10">
      <div
        class="progress bg-dark"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          style="width: 85%"
        ></div>
      </div>
    </div>
  </div>
  <div class="row p-3">
    <div class="col-2">
      <i class="fa-brands fa-css3-alt fa-2xl"></i>
    </div>
    <div class="col-10">
      <div
        class="progress bg-dark"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          style="width: 70%"
        ></div>
      </div>
    </div>
  </div>
  <div class="row p-3">
    <div class="col-2">
      <i class="fa-brands fa-js fa-2xl"></i>
    </div>
    <div class="col-10">
      <div
        class="progress bg-dark"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          style="width: 60%"
        ></div>
      </div>
    </div>
  </div>
  <div class="row p-3">
    <div class="col-2">
      <i class="fa-brands fa-java fa-2xl"></i>
    </div>
    <div class="col-10">
      <div
        class="progress bg-dark"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          style="width: 50%"
        ></div>
      </div>
    </div>
  </div>
  <div class="row p-3">
    <div class="col-2">
      <i class="fa-brands fa-vuejs fa-2xl"></i>
    </div>
    <div class="col-10">
      <div
        class="progress bg-dark"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          style="width: 30%"
        ></div>
      </div>
    </div>
  </div>
  <div class="row p-3">
    <div class="col-2">
      <i class="fa-brands fa-bootstrap fa-2xl"></i>
    </div>
    <div class="col-10">
      <div
        class="progress bg-dark"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          style="width: 80%"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.progress-bar.progress-bar-striped.progress-bar-animated {
  background-color: #5cb85c;
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 1s;
}
.fa-brands.fa-2xl {
  color: #5cb85c;
}
.row {
  --bs-gutter-x: 0;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
