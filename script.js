console.log("Let's start Javascript")

async function main(){
    let a = await fetch(`http://127.0.0.1:5500/songs/`)
let request = await a.text();
console.log(response)
}
main()