<template>
  <div class="m-2 p-3 contact mx-auto ">
    <form action="https://formspree.io/f/xaygynyv" method="POST">
      <h1 class="card p-3 text-center heading-text">Contact Us</h1>
      <div class="mb-3 text-center">
        <label class="form-label"> Full Name: </label>
        <input
          type="text"
          class="form-control border-2"
          name="Name"
          placeholder="Your Full Name"
          required
        />
      </div>

      <div class="mb-3 text-center">
        <label class="form-label"> Email: </label>
        <input
          type="email"
          class="form-control border-2"
          name="Email"
          placeholder="Valid Email Address"
          required
        />
      </div>

      <div class="mb-3 text-center">
        <label class="form-label"> Contact Number: </label>
        <input
          type="tel"
          class="form-control border-2"
          name="Contact"
          placeholder="Mobile / Telephone Number"
          required
        />
      </div>

      <div class="mb-3 text-center">
        <label class="form-label"> Leave Me a Message: </label>
        <textarea
          name="message"
          class="form-control border-2"
          rows="5"
        ></textarea>
      </div>

      <button
        type="submit"
        class="btn text-center btn-submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  font-size: 40px;
}
.contact {
  border: 5px #5cb85c solid;
  border-radius: 60px;
  background-color: transparent;
  width: 50%;
}
.card {
  background-color: transparent;
  border: 0;
  color: #5cb85c;
}
input {
  background-color: #c0c0c0 !important;
  color: black !important;
}
textarea {
  background-color: #c0c0c0 !important;
  color: black !important;
}
label {
  font-size: 25px;
  color: #5cb85c;
}
.btn.text-center.btn-submit{
    border: 3px solid #5cb85c;
    font-size: 30px;
    color: #5cb85c;
}

.btn.text-center.btn-submit:hover{

  background-color: #5CB85C;
  color: black;
  background-color: 3px solid black;
}

@media screen and (max-width:300px) {
  .contact{
    width: 100%;
  }
}

</style>
