let editorMode = 0
update_main_panel()
update_bingo()
update_style()
updateContent()

//function prints page
//change later
function print_page(printingMode){
    //------------------------
    //preparation for printing
    //------------------------

    //fetch the visualization and duplicate it as its own element
    let card = document.getElementById("visualization").cloneNode(true)
    //fetch the anchor
    let anchor = document.getElementById("anchor1")
    let anchor2 = document.getElementById("anchor2")
    //hide all the unnecesaty elements
    document.getElementById("wrapper").style.display="none"
    
    //set style so it's easier to modify the position and rotation of card
    card.style.position = "absolute"
    card.style.transform = "scale(1)"
    card.style.transformOrigin = "top left"

    //create elements
    switch(printingMode){
        case 1:

            anchor.appendChild(card)
        break

        case 3:
            //fix ducking later
            
        break
    }
    //append bingo card to the anchor
    
    //print
    window.print()


    //----------------------
    //cleanup afrer printing
    //----------------------
    anchor.style.width = 0
    anchor.style.height = 0
    anchor2.style.width = 0
    anchor2.style.height = 0
    //clear the anchor
    anchor.innerHTML=""
    anchor2.innerHTML=""
    //show the hidden elements
    document.getElementById("wrapper").style.display="flex"

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