  var btn = document.createElement("div");
  btn.className = "test";
  var t = document.createTextNode("popup!");
  btn.appendChild(t);
  document.body.appendChild(btn);

  function getPageHTML() {
    const pageHTML = document.documentElement.outerHTML;
    console.log(pageHTML);
  }

  getPageHTML();