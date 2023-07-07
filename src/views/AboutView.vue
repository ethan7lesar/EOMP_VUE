<template>
  <h1 class="aboutme">About Me:</h1>
  <div class="about ms-5 h-100 mb-5">
    <div class="content">
      <h2>Bio:</h2>
      <p class="ps-5">
        My name is Ethan Henry Lesar. I am a man who grew up in a little
        neighbourhood outside of town named Walmer Estate in Cape Town. The
        neighbourhood is ethnically and religiously diverse. I am highly
        enthusiastic about business. I got into coding because I previously
        worked in application development, but owing to COVID, I opted to quit
        out. I concluded that to be effective at business, I needed to learn
        about the future, which is totally online, as well as the services and
        products that are available online. As a result, I began to appreciate
        coding since I now see the internet realm in a different way.
      </p>
      <a
        class="link"
        href="https://drive.google.com/file/d/13k9z0CAXDeB6QtcviYDkOmtLPlUuWo1Y/view?usp=sharing"
        >CV Download</a
      >
      <h2 class="mt-5">Inspiring people</h2>
      <div class="inspo">
        <div>
          <img
            class="person"
            src="https://i.postimg.cc/1XM0Ys9q/download-1.png"
            alt="elon musk"
          />
          <h6>Elon Musk</h6>
        </div>
        <div>
          <img
            class="person"
            src="https://i.postimg.cc/Gt0hwyp0/images-1.png"
            alt="CR7"
          />
          <h6>Cristiano Ronaldo</h6>
        </div>
        <div>
          <img
            class="person"
            src="https://i.postimg.cc/MHDkPMMm/Who-is-Steve-Will-Do-It-1-1.png"
            alt="Steve"
          />
          <h6>Steve Will Do It</h6>
        </div>
      </div>
    </div>
    <div class="imageAbt m-5">
      <img
        class="Photo"
        src="https://i.postimg.cc/9FnBYWFq/Rayyaan-Ethan-28-2.png"
        alt="Ethan"
      />
    </div>
  </div>
</template>
<script></script>
<style>
a {
  text-decoration: none;
  color: #5cb85c;
  font-size: 25px;
  transition: 0.2s;
}
a:hover {
  border-bottom: #5cb85c 3px solid;
}

.Photo {
  border: #5cb85c 5px solid;
  border-radius: 62px;
  background-color: #5cb85c;
}
h6 {
  margin-top: 10px;
  color: #5cb85c;
  font-size: 25px;
}
h1 {
  font-size: 50px;
  color: #5cb85c;
}
h2 {
  font-size: 40px;
  color: #5cb85c;
}

p {
  color: white;
  font-size: 25px;
}
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 600px;
}
.inspo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  }


  @media screen and (max-width:700px){
    .about {
    display: inline
    }
    
  }

  @media screen and (max-width: 300px) {
    .about {
      padding: 0;
      }
    .inspo {
      display: inline;
   
      }

      p {
        color: white;
        font-size: 15px;
      }

      .Photo{
        width: 100%;
        height: 100%;
      }
      .ps-5{
        padding-left: 0 !important;
      }
  }
</style>
