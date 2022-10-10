fetch('https://api.github.com/users/daviniathebridge')
.then(res=>res.json())
.then(json=>{localStorage.setItem("followers" , `${json.followers}`)});
console.log(followers)