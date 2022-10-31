
 var p1  =  fetch('https://opentdb.com/api.php?amount=1')
    .then(res=>res.json()).then((json)=>{console.log(json.results[0].category)})


