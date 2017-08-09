function loadData() {
  var num = Math.floor(Math.random() * 10);
  var color =
    "rgb(" +
    Math.floor(Math.random() * 250) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";

  $.getJSON(
    "https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" +
      num +
      "&callback=",
    function(a) {
      $("#paragraph")
        .html(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
        .css("background-color", color);

      $("#whole-body").css("background-color", color);

      $("#tweet").on("click", function() {
        var url = "https://twitter.com/intent/tweet";
        var text =
          '"' +
          document.getElementById("paragraph").textContent +
          '" ' +
          document.getElementById("paragraph").textContent;

        var hashtags = "fCC,quote";

        window.open(
          url + "?text=" + text + ";hashtags=" + hashtags,
          "width=500,heigth=300"
        );
      });      
      
      return false;
    }
  )
}

$("#form-container").submit(loadData);
