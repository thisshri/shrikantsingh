const CSV_TITLE = [
  "Const",
  "Your Rating",
  "Date Rated",
  "Title",
  "URL",
  "Title Type",
  "IMDb Rating",
  "Runtime (mins)",
  "Year",
  "Genres",
  "Num Votes",
  "Release Date",
  "Directors"
]

let ALL_MOVIES = [];

const generateMovieTableBody = function(movies) {
    document.getElementById(
      'movie-table-body'
    ).innerHTML = _.map(
      movies.slice(0, 10),
      (movie, index) => `<tr>
      <th>
        <a
          href=${movie[_.indexOf(CSV_TITLE, "URL")]}
          target=_blank
        >
          ${movie[_.indexOf(CSV_TITLE, "Title")]}</th>
        </a>
      <td>${movie[_.indexOf(CSV_TITLE, "Your Rating")]}</td>
      <td>${moment(movie[_.indexOf(CSV_TITLE, "Date Rated")]).calendar(null, {
        sameDay: '[Today]',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      })}</td>
      </tr>`
      ).join('');
  }

function onCSVDownload({data , error}) {
  const sortedMovies = _.reverse(
    _.sortBy(
      data,
      _.iteratee(movie => movie[_.indexOf(CSV_TITLE, "Date Rated")]))
  ).slice(2); //and removing blank line and CSV title

  // TODO see if empty line can be ignored

  ALL_MOVIES = sortedMovies
  generateMovieTableBody(sortedMovies);

  document.getElementsByTagName('body')[0].style.setProperty("cursor", "auto")
}

const movieSearchField = document.getElementById('movie-search-field')
movieSearchField.oninput = function (e) {
  generateMovieTableBody(
    _.filter(
      ALL_MOVIES,
      movie => movie[_.indexOf(CSV_TITLE, "Title")].toLowerCase().includes(e.target.value.toLowerCase())
    )
  )
};

Papa.parse(
  '../../ratings.csv',
  {
    download: true,
    complete: onCSVDownload,
});
