
    fetch('https://api.github.com/users/daviniathebridge')
    .then(res=>res.json()).then(json=>console.log(json))
