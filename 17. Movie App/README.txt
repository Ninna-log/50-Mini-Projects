Movie App

This is a mini project where I'm using a third API data,
which gives a database of movies with their
ratings and images. 
First of all, I created the UI, then I registered an
API key with the TMD DB service, and using JavaScript
to make a fetch request to get the data to show the most
popular movies.

This is the website where you need to sign up in order
to have an API key when you make your requests.

url: https://www.themoviedb.org/

After ask for and API key I used as an endpoint this url:
/discover/movie?sort_by=popularity.desc which is the example
the website gives you to the most popular movies.

Then the url for a request looks like this:

url: https://api.themoviedb.org/3/movie/550?api_key=27283ecb86c95cb19f0fc64548f4fbdf
