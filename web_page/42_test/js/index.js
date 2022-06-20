  (function(){
    const userinput = document.getElementById("input");
    const apikey = document.getElementById("apikey");
    const uid = document.getElementById("uid");

    var get_test_html = document.getElementById("test_html");
    get_test_html.onclick = () =>	{
      fetch("test.html", {
        method: "GET"
      }).then(response => response.text())
        .then((content) => {
          document.write(content);
        });
    }

    var image_test = document.getElementById("image_test");
    image_test.onclick = () =>	{
      fetch("cat_test1.jpg", {
        method: "GET"
      }).then(response => response.text())
        .then((content) => {
          document.write(content);
        });
    }

    var error_404 = document.getElementById("error_404");
    error_404.onclick = () =>	{
      fetch("thisfiledoesntexit", {
        method: "GET"
      }).then(response => response.text())
        .then((content) => {
          document.write(content);
        });
    }

    var delete_method = document.getElementById("delete_method");
    delete_method.onclick = () =>	{
      fetch("test1.txt", {
        method: "DELETE"
      }).then(response => response.text())
        .then((content) => {
          document.write(content);
        });
    }

    var redirection = document.getElementById("redirection");
    redirection.onclick = () =>	{
      fetch("/redirected/test.txt", {
        method: "DELETE"
      }).then(response => response.text())
        .then((content) => {
          document.write(content);
        });
    }

  })();