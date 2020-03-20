/* global $ */


function getLyrics(artist, title) {
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;


  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });

}

function displayResults(responseJson) {
  $('#results').empty();
  $('#results').append(`${responseJson.lyrics}`);
  $('#results').removeClass('hidden');
}




function watchForm() {
  $('.js-form').submit(event => {
    event.preventDefault();
    const artist = $('.js-artist').val();
    const title = $('.js-song').val();
    getLyrics(artist, title);
  });
}

$(watchForm);