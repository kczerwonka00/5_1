(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
            answer.textContent=""; 
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' }) 
      .then(response => response.json())
      .then(function(dane) {
        wyswietlDane(dane); 
      })
    function wyswietlDane(dane) {
      for (var i = 0; i < dane.length; i++) {
        var div = document.createElement("div");
        div.innerHTML=
        '<u>User ID:  </u>'+dane[i].userId+
        '<br><u>ID:</u>'+dane[i].id+
        '<br><u>Title: </u>'+dane[i].title+
        '<br><u>Body: </u>'+dane[i].body+
        '<hr>';
        answer.appendChild(div);
      }
      
    }
  })

  cw2.addEventListener("click", function () {
    //TODO implement it
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();