/* 
Purpose: Acts as an API developer and createa  new romise to either
*/ 
async function fetch_game() {
    let promise_games = new Promise((resolve, reject) => {
        let isRegistered = true
    setTimeout(() =>{
        if(isRegistered){
            const gameJSON = {
                monday: "leafs",
                tuesday: "raptors"
            }
            //Static method that comes from the JSON prototype/Class
            let gameJSONstr = JSON.stringify(gameJSON)
            resolve(gameJSONstr) 
        } else {
            reject("You must be a registed member first!")
        }
    }, 2000)
})

    let result_from_promise = await promise_games
    console.log(result_from_promise)
    const gameJSONparsed = JSON.parse(result_from_promise)
    console.log(gameJSONparsed.monday)
}

fetch_game()
let someStrToPrint = "bob"
console.log(someStrToPrint)