fetch('./api/some.json')
  .then(
    function(response) {
      
      response.json().then(
        function(data) {
            console.log(data);
        });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });



fetch('./api/some.json')
.then(
    function(response) {
        
       return response.json()
        
    }
).then(
    function (data) {
        console.log(data);
    }
)
.catch(function(err) {
console.log('Fetch Error :-S', err);
});