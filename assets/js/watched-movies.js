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

function onCSVDownload({data , error}) {
  const sortedMovies = _.reverse(
    _.sortBy(
      data,
      _.iteratee(movie => movie[_.indexOf(CSV_TITLE, "Date Rated")]))
  ).slice(2); //and removing blank line and CSV title
  
  // TODO see if empty line can be ignored

  const movieItem = _.map(
    sortedMovies.slice(0, 10),
    (movie, index) => `<tr>
      <th>${movie[_.indexOf(CSV_TITLE, "Title")]}</th>
      <td>${movie[_.indexOf(CSV_TITLE, "Your Rating")]}</td>
      <td>${moment(movie[_.indexOf(CSV_TITLE, "Date Rated")]).calendar(null, {
        sameDay: '[Today]',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      })}</td>
    </tr>`
  );

    document.getElementById('movie-table-body').innerHTML = movieItem.join('');
}

Papa.parse(
  '../../ratings.csv',
  {
    download: true,
    complete: onCSVDownload,
});
