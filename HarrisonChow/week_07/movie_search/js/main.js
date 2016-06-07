var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (request.readyState !==4) {
    return;
  }
  var dataAsString = request.responseText;
  var dataAsObject = JSON.parse(dataAsString);
  var searchResult = dataAsObject.Search;
  $("div.main").remove();

  if (!searchResult) {
    var $titleList = $("<div class='main'>There is no result </div>");
    $titleList.appendTo(document.body);
  } else if (searchResult.length > 1) {

    for (var i = 0; i < searchResult.length; i++) {
      var result = searchResult[i].Title;
      var result_id = searchResult[i].imdbID;

      var $titleList = $("<div class='main'><div class='row'><div class='col-md-3'></div><div class='col-md-6'><a href='./info.html?id=" + result_id + "'>"+ result +"</a></div><div class='col-md-3'></div></div>");
      $titleList.appendTo(document.body);
      console.log(result);
    }
  } else {
    var result_id = searchResult[0].imdbID;
    location.href= "./info.html?id=" + result_id;
  }

};
window.onload = function () {
  var btn = document.querySelector("button");
  btn.addEventListener("click", function(){
    var keyword = $('#search').val();
    request.open("GET", "http://omdbapi.com?s="+keyword);
    request.send();

  });
};
