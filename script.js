const homework1 = `
<body class="p-4">
  <div class="text-decoration-underline pb-2">
    <h1>The University Of Cambodia</h1>
  </div>
  <div style="color: #b4bdff" class="pb-5">
    College of Science and Technology
  </div>
  <div role="button" onclick="window.location.reload();" class="text-decoration-underline text-black fs-4">Back</div>
  <div
    role="button"
    onclick="window.location.href = 'https://cost.uc.edu.kh/';"
  >
    Click here to visit the college of science and technology
  </div>

  <div class="d-flex gap-2 pb-2">
    <div>
      <img width="600" height="400" src="./photos/pic1.jpg" />
    </div>
    <div>
      <img width="600" height="400" src="./photos/pic2.jpg" />
    </div>
  </div>
  <div class="d-flex gap-2">
    <div>
      <img width="600" height="400" src="./photos/pic3.jpg" />
    </div>
    <div>
      <img width="600" height="400" src="./photos/pic4.jpg" />
    </div>
  </div>
</body>
`;

const homework2 = `    
<div class="parent-container text-success">
<img src="./photos/banner.jpg" class="w-100" />
<div class="pt-4 fs-2 pb-2">College of Science and Technology</div>
<div role="button" onclick="window.location.reload();" class="text-decoration-underline text-black fs-4">Back</div>
<div class="pb-3">
  The University of Cambodia was established. It was officially opened by
  Prime Minister Samdech Techo Hun Sen on 23 June 2003. Originally located
  in three leased buildings just south of the Independence Monument, today
  the University is firmly established on over 3 hectares of land in the
  middle of Phnom Penh
</div>
<div class="d-flex w-100 gap-2">
  <div class="w-100">
    <img src="./photos/comp_class.jpg" width="100%" height="500" />
  </div>
  <div class="w-100">
    <img src="./photos/comp_class2.jpg" width="100%" height="500" />
  </div>
</div>
</div>
<div class="paragraphs">
<ol class="p-3">
  <li class="fs-4 text-primary">Information Technology</li>
  <div class="pb-3">
    <div>Information Technology IT is Information Technology,</div>
    <strike>not Ice Tea or International Toilet.</strike>
  </div>
  <li class="fs-4 text-primary">Computer Science</li>
  <div class="fst-italic pb-3">
    Computer Science is understanding how and why technologies work,
    exploring whether and how technology could solve real-life problems,
    investigating procedures, creating solutions, and learning about
    computing systems, programming, data, networks
  </div>
  <li class="fs-4 text-primary">Electronics and Telecommunication</li>
  <div class="fw-bold">
    Computer Science is understanding how and why technologies work,
    exploring whether and how technology could solve real-life problems,
    investigating procedures, creating solutions, and learning about
    computing systems, programming, data, networks
  </div>
</ol>
</div>`;

let body;
$(document).ready(function () {
  body = $(".main-body");
});

function switchTab(arg) {
  const content = eval(arg);
  body.html(content);
}

function revealMe(arg) {
  const btn = $(".reveal-btn");
  const info = $(".adam-info");
  if (arg) {
    btn.hide();
    info.show();
  }
  return;
}
