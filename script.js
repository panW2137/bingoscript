let editorMode = 0
update_main_panel()
update_bingo()
updateContent()

//function prints page
//change later
function print_page(){
    //hide all the unnecesaty elements
    document.getElementById("mainMenu").style.display = "none"
    document.getElementById("div_row").style.display = "none"
    
    //print
    window.print()

    //show the hidden elements
    document.getElementById("div_row").style.display = "flex"
    document.getElementById("mainMenu").style.display = "flex"

}

function change_editor_mode(m){
    editorMode = m
    update_main_panel()
}

function update_main_panel(){
    let menuOptions = document.getElementsByClassName("menu")[0].children
    let panelList = document.getElementsByClassName("panel")

    for(let i=0;i<3;i++){
        menuOptions[i].style.backgroundColor = 'gray'
        panelList[i].style.display = 'none'
    }

    menuOptions[editorMode].style.backgroundColor = 'lightGray'
    panelList[editorMode].style.display = 'flex'
}

//move into another file later
function updateContent(){
    //declare an array for content
    let contentArray = []
    //fetch the input from user and divide it into set of substrings
    let textAreaContent = document.getElementById("textarea").value
    contentArray = textAreaContent.split("\n")

    //if array to small fill it with empty text
    while(contentArray.length < 25){
        contentArray.push("")
    }

    //fill the bingo slots with new content
    //TODO: ability to randomize order
    let bingoSlots = document.getElementsByClassName("slot")
    for(let i=0; i<bingoSlots.length; i++){
        bingoSlots[i].innerHTML = contentArray[i]
    }
}
