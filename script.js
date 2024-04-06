console.log("Let's start Javascript")

let a = fetch(`http://127.0.0.1:5500/songs/`)
let request = await a.text();
console.log(response)