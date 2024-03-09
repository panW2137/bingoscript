//move into another file later
//moved into another file later

function updateContent(){
    //fetch inputs
    let randContent = document.getElementById("input_rand_content").checked
    let arraySize = document.getElementById("input_rows").value * document.getElementById("input_columns").value
    //declare an array for content
    let contentArray = []
    //fetch the input from user and divide it into set of substrings
    let textAreaContent = document.getElementById("textarea").value
    contentArray = textAreaContent.split("\n")

    //if array to small fill it with empty text
    while(contentArray.length < arraySize){
        contentArray.push("")
    }

    //fill the bingo slots with new content
    //TODO: ability to randomize order
    let bingoSlots = document.getElementsByClassName("slot")
    if(randContent){
        for(let i=0; i<bingoSlots.length; i++){
            contentArray.sort(() => Math.random() - 0.5)
            bingoSlots[i].innerHTML = contentArray[i]
        }
    } else {
        for(let i=0; i<bingoSlots.length; i++){
            bingoSlots[i].innerHTML = contentArray[i]
        }
    } 
}
