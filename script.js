const homework1 = ``;

const homework2 = ``;

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
