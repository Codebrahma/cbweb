// Script to load the block chain chart on DOM element with the id 'google-chart'
document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    var chartContainer = document.getElementById("google-chart")
    trends.embed.renderExploreWidgetTo(
      chartContainer,
      "TIMESERIES",
      {
        comparisonItem: [
          { keyword: "blockchain", geo: "", time: "2018-07-11 2019-07-11" },
        ],
        category: 0,
        property: "",
      },
      {
        exploreQuery: "q=blockchain&date=today 12-m",
        guestPath: "https://trends.google.com:443/trends/embed/",
      }
    )
  }
};
