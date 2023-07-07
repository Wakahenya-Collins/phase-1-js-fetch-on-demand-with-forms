document.addEventListener('DOMContentLoaded', function() {
    // Get the form element and movie details section
    const searchForm = document.getElementById('searchForm');
    const movieDetails = document.getElementById('movieDetails');
  
    // Add event listener to the form
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the ID input value
      const searchByIDInput = document.getElementById('searchByID');
      const movieID = searchByIDInput.value;
  
      // Fetch movie data based on the entered ID
      fetch(`http://localhost:3000/movies/${movieID}`)
        .then(response => response.json())
        .then(movie => {
          // Update the movie details section with the retrieved data
          movieDetails.innerHTML = `
            <h4>${movie.title}</h4>
            <p>${movie.summary}</p>
          `;
        })
        .catch(error => {
          console.error('Error:', error);
          // Display an error message if the movie data could not be fetched
          movieDetails.innerHTML = '<p>Error retrieving movie details.</p>';
        });
  
      // Reset the form
      searchForm.reset();
    });
  });
  