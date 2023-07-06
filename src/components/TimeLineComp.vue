<template>
  <section>
    <ul class="timeline">
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">Matric</span>
            <span class="time-wrapper"><span class="time">2019</span></span>
          </div>
          <div class="desc">
            <ul>
              <li>Claremont High School</li>
              <li>Mathematics, Physical Science</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div class="direction-l">
          <div class="flag-wrapper">
            <span class="flag">2nd Year AppDev </span>
            <span class="time-wrapper"><span class="time">2021</span></span>
          </div>
          <div class="desc">
            <ul>
              <li>Cape Penisuala University Of Technology</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <div class="direction-r">
          <div class="flag-wrapper">
            <span class="flag">Web Development</span>
            <span class="time-wrapper"
              ><span class="time">2023 - present</span></span
            >
          </div>
          <div class="desc">
            <ul>
              <li>Life Choices Achedemy</li>
              <li>HTML CSS JAVASCRIPT</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script s>
export default {};
</script>
<style scoped>
section {
  margin: 0;
  padding: 0;
  background: black;
  text-align: start;

  color: white;

  font-size: 112.5%;
  line-height: 1.6em;
}
ul{
  list-style: none;
}
li{
  font-size: 20px;
}

.timeline {
  position: relative;
  width: 660px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1em 0;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: " ";
  display: block;
  width: 6px;
  height: 100%;
  margin-left: -3px;
  background: #a59b9b;
  z-index: 5;
}

.timeline li {
  padding: 1em 0;
}

.timeline li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.direction-l {
  position: relative;
  width: 300px;
  float: left;
  text-align: right;
}

.direction-r {
  position: relative;
  width: 300px;
  float: right;
}

.flag-wrapper {
  position: relative;
  display: inline-block;

  text-align: center;
}

.flag {
  position: relative;
  display: inline;
  padding: 6px 10px;
  border-radius: 5px;

  font-weight: 600;
  text-align: left;
}

.direction-l .flag {
  -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-r .flag {
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-l .flag:before,
.direction-r .flag:before {
  position: absolute;
  top: 200%;
  right: -29px;
  content: " ";
  display: block;
  width: 39px;
  height: 5px;
  margin-top: -10px;
  background: #5CB85C;

  z-index: 10;
}

.direction-r .flag:before {
  left: -29px;
}

.direction-l .flag:after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-left-color: rgb(248, 248, 248);
  border-width: 8px;
  pointer-events: none;
}

.direction-r .flag:after {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-right-color: rgb(248, 248, 248);
  border-width: 8px;
  pointer-events: none;
}

.time-wrapper {
  display: inline;

  line-height: 1em;
  font-size: 0.66666em;
  color: #5CB85C;
  font-weight: bolder;
  vertical-align: middle;
}

.direction-l .time-wrapper {
  float: left;
}

.direction-r .time-wrapper {
  float: right;
}

.time {
  display: inline-block;
  padding: 4px 6px;
}

.desc {
  margin: 1em 0.75em 0 0;
border-bottom: #5CB85C 4px solid;
border-radius: 10px;
  font-size: 0.77777em;
  font-style: italic;
  line-height: 1.5em;
}

.direction-r .desc {
  margin: 1em 0 0 0.75em;
}



@media screen and (max-width: 700px) {
  .timeline {
    width: 100%;
    padding: 4em 0 1em 0;
  }

  .timeline li {
    padding: 2em 0;
  }

  .direction-l,
  .direction-r {
    float: none;
    width: 100%;

    text-align: center;
  }

  .flag-wrapper {
    text-align: center;
    font-size: 30px;
  }

  .flag {
    background: transparent;
    z-index: 16;
    font-size: 30px;
  }

  .direction-l .flag:before,
  .direction-r .flag:before {
    position: absolute;
    top: -30px;
    left: 50%;
    content: " ";
    display: block;
    width: 12px;
    height: 12px;
    margin-left: -9px;
    background: black;
    border-radius: 10px;
    border: 4px solid black;
    z-index: 10;
  }

  .direction-l .flag:after,
  .direction-r .flag:after {
    content: "";
    position: absolute;
    left: 50%;
    top: -8px;
    height: 0;
    width: 0;
    margin-left: -8px;
    border: solid transparent;
    border-bottom-color: rgb(255, 255, 255);
    border-width: 8px;
    pointer-events: none;
  }

  .time-wrapper {
    display: block;
    position: relative;
    margin: 4px 0 0 0;
    z-index: 14;
  }

  .direction-l .time-wrapper {
    float: none;
  }

  .direction-r .time-wrapper {
    float: none;
  }

  .desc {
    position: relative;
    margin: 1em 0 0 0;
    padding: 1em;
    background: rgb(245, 245, 245);
    color: black;
    border-radius: 10px;
   font-size: 20px;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
   background-color: #5CB85C;
    z-index: 15;
  }

  .direction-l .desc,
  .direction-r .desc {
    position: relative;
    margin: 1em 1em 0 1em;
    padding: 1em;

    z-index: 15;
  }
}

@media screen and (max-width: 300px) {
  .direction-l .desc,
  .direction-r .desc {
    margin: 1em 4em 0 4em;
  }
}
</style>
