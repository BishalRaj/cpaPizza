let times = 4;

$(document).ready(function () {
  for (let index = 0; index < times; index++) {
    $("#deal").append(`<div class="col-lg-12 my-1 deals">
        <div
          class="row d-flex justify-content-center align-items-center"
        >
          <div class="col-lg-7 p-0">
            <img
              src="https://viral481.com/images/campaigns/5496985_234x234.jpeg"
              class="w-100"
            />
          </div>
          <div class="col-lg-5">
            <h6>Win $100 gift card</h6>
          </div>
        </div>
        </div>`);

    $("#lists").append(`<li class="my-3">
        <h4>Take Survey</h4>
        <a
          href="https://viral481.com/srv.html?id=5496985&pub=793007"
          class="w-100"
          ><img
            class="img img-fluid"
            src="https://viral481.com/images/campaigns/5496985_276x145.jpeg"
        /></a>
        <p class="my-2">
          Click on the above image and complete a simple survey to
          make easy money.
        </p>
        <b><i>Steps to follow:</i></b>
        <ol>
          <li>Complete the full registration</li>
          <li>Check out the available offers</li>
        </ol>
      </li>`);
  }
});
