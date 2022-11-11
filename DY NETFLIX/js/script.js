const API_KEY = "8fa6044f"; //const 상수는 변수 이름 대문자
// http://www.omdbapi.com/?apikey=[yourkey]&
// 함수 이름에 init이 있으면 초기 실행하는 함수 의미
initMovie();
initSeries();

function initMovie() {
  var search = "fear";
  var type = "movie";
  //백엔드와 통신(디폴트 : *비동기* 통신)
  //비동기와 동기의 차이점?
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=" +
      API_KEY +
      "&s=" +
      search +
      "&type=" +
      type,
    type: "GET",
    dataType: "json",
    success: function (response) {
      for (var i = 0; i < 10; i++) {
        console.log(response.Search[i].imdbID);
        var posterUrl = response.Search[i].Poster;
        var html = '<img src = "' + posterUrl + '"></img>';
        $("#movie-poster-" + i).append(html);
        $("#movie-title-" + i).append(response.Search[i].Title);
        $("#movie-year-" + i).append(response.Search[i].Year);
        $("#movie-id-" + i).val(response.Search[i].imdbID);
      }
    },
  });
}
function initSeries() {
  var search = "fear";
  var type = "series";
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=" +
      API_KEY +
      "&s=" +
      search +
      "&type=" +
      type,
    type: "GET",
    dataType: "json",
    success: function (response) {
      for (var i = 0; i < 5; i++) {
        var posterUrl = response.Search[i].Poster;
        var html = '<img src = "' + posterUrl + '"></img>';
        $("#series-poster-" + i).append(html);
        $("#series-title-" + i).append(response.Search[i].Title);
        $("#series-year-" + i).append(response.Search[i].Year);
        $("#series-id-" + i).val(response.Search[i].imdbID);
      }
    },
  });
}
/* 영화상세정보 조회 */
function getMovieDetail(object) {
  console.log(object.children[3].value);
  var movieId = object.children[3].value;
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=" +
      API_KEY +
      "&i=" +
      movieId +
      "&plot=full",
    type: "GET",
    dataType: "json",
    success: function (response) {
      /* console.log(response); */
      $(".movie-section").css("visibility", "visible");
      $(".movie-list").css("opacity", 0.3);

      $("#movie-title").empty();
      $("#movie-title").append(response.Title);
      $("#rating").empty();
      $("#rating").append(response.imdbRating);

      $("#votes").empty();
      $("#votes").append(response.imdbVotes);

      $("#runtime").empty();
      $("#runtime").append(response.Runtime);

      $("#year").empty();
      $("#year").append(response.Year);

      $("#movie-plot").empty();
      $("#movie-plot").append(response.Plot);

      $("#director").empty();
      $("#director").append(response.Director);

      $("#stars").empty();
      $("#stars").append(response.Actors);

      $("#generes").empty();
      $("#generes").append(response.Genre);

      $("#languages").empty();
      $("#languages").append(response.Language);

      $("#awards").empty();
      $("#awards").append(response.Awards);

      $("#poster-img").empty();
      var html = '<img src="' + response.Poster + '"></img>';
      $("#poster-img").append(html);
    },
  });
}

/* 영화상세정보 조회 */
function getSeriesDetail(object) {
  console.log(object.children[3].value);
  var movieId = object.children[3].value;
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=" +
      API_KEY +
      "&i=" +
      movieId +
      "&plot=full",
    type: "GET",
    dataType: "json",
    success: function (response) {
      /* console.log(response); */
      $(".movie-section").css("visibility", "visible");
      $(".movie-list").css("opacity", 0.3);

      $("#series-title").empty();
      $("#series-title").append(response.Title);
      $("#rating").empty();
      $("#rating").append(response.imdbRating);

      $("#votes").empty();
      $("#votes").append(response.imdbVotes);

      $("#runtime").empty();
      $("#runtime").append(response.Runtime);

      $("#year").empty();
      $("#year").append(response.Year);

      $("#series-plot").empty();
      $("#series-plot").append(response.Plot);

      $("#director").empty();
      $("#director").append(response.Director);

      $("#stars").empty();
      $("#stars").append(response.Actors);

      $("#generes").empty();
      $("#generes").append(response.Genre);

      $("#languages").empty();
      $("#languages").append(response.Language);

      $("#awards").empty();
      $("#awards").append(response.Awards);

      $("#poster-img").empty();
      var html = '<img src="' + response.Poster + '"></img>';
      $("#poster-img").append(html);
    },
  });
}

function doClose() {
  $(".movie-section").css("visibility", "hidden");
  $(".movie-list").css("opacity", 1);
}
