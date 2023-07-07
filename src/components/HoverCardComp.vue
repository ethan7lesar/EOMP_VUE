<template>
  <div class="center">
    <figure class="card card-with-hover">
      <img :src="testimonial.image" alt="person" />
      <figcaption class="card-caption">
        <div class="card-caption-content">
          <h2>{{ testimonial.name }}</h2>
          <p>
            {{ testimonial.description }}
          </p>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script  >
export default {
  props: ["testimonial"],
};
</script>

<style scoped>
p{
  font-size: 18px !important;
}
.center {
  display: flex;
  justify-content: center;
}

.card {
  max-width: 350px;
  max-height: 350px;
  margin: 50px auto;
  box-shadow: 10px 25px 30px 0px #5CB85C;
  -webkit-box-shadow: 10px 25px 30px 0px #5CB85C;
  -moz-box-shadow: 10px 25px 30px 0px #5CB85C;
}

.card-with-hover {
  position: relative;
  overflow: hidden;
  background: white;
  text-align: center;
  height: 400px;
  border-radius: 30px;
}

.card-with-hover > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.card-with-hover:hover > img {
  transform: scale(1.15) translate3d(0, -20px, 0);
}

.card-with-hover > .card-caption {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #5CB85C;
  transition: all 0.3s;
  transform: translate3d(0, 100%, 0);
  will-change: transform;
}

.card-with-hover > .card-caption > .card-caption-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  transition: all 0.3s;

  transform: translate3d(0);
  will-change: transform;
}

.card-with-hover > .card-caption h2 {
  display: block;
  color: #fff;
  border-radius: 10px;
  margin: 0;
  padding: 1.5rem;
  transition: all 0.3s;
  background-color: rgba(0, 0, 0, 0.4);
 font-size: 30px;
  transform: translate3d(0, -100%, 0);
  will-change: transform;
}

.card-with-hover > .card-caption p {
  padding: 0 1rem;
  margin: 0;
  color: #fff;
  opacity: 0;
  transition: opacity 0.35s 0.1s;
  transform: translate3d(0);
  will-change: transform;
}

.card-with-hover:hover > .card-caption {
  transform: translateY(0);
  border: 5px solid #5CB85C;
  border-width: 90%;

  border-radius: 30px;
}

.card-with-hover:hover > .card-caption > .card-caption-content {
  top: 50%;
  transform: translate(0, -50%);
}

.card-with-hover:hover > .card-caption h2 {
  background-color: rgba(0, 0, 0, 0);
  transform: translateY(0%);
}

.card-with-hover:hover > .card-caption p {
  opacity: 1;
}

@media screen and (max-width:700){
  .center {
   width: 100%px;
  }
}


</style>
