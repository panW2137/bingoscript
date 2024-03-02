let editorMode = 0
update_main_panel()
generate_bingo()

//adds event listener to the scale range (range input that controls visualization scale)
var scaleRange = document.getElementById("vis_scale")
//changes the scale visualizetion
//(WHY JAVASCRIPT, WHY MUST I USE THIS RETARDET SYNTAX INSTEAD OF THE FUCKIN FUNCTION)
scaleRange.addEventListener('input', () => {
    let scale = scaleRange.value
    document.getElementById("visualisation").style.transform = 'scale('+scale+')'
})

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

//generates slots of bingo card within visualization
function generate_bingo(){
    let bingoCard = document.getElementById("visualization")
    let slotContainer = document.getElementById("slotContainer")
    let counter = 0; //temporary, remove later, probably
    let rows = document.getElementById("input_rows").value
    let cols = document.getElementById("input_columns").value

    //clear the table
    slotContainer.innerHTML = ""

    //fetch styles from inputs
    let slotWidth = document.getElementById("input_width").value
    let slotHeight = document.getElementById("input_height").value
    let colSpace = document.getElementById("input_col_dist").value
    let rowSpace = document.getElementById("input_row_dist").value


    //generate the table
    for(let i=0; i<rows; i++){

        //create new row
        let newRow = document.createElement("tr")
        newRow.setAttribute("class","slotContainerRow")
    
        for(let j=0; j<cols; j++){
            //create new element
            let newSlot = document.createElement("td")
            let newText = document.createTextNode("element "+counter)
            //add class and text
            newSlot.setAttribute("class","slot")
            newSlot.appendChild(newText)
            //add styles
            newSlot.style.width = slotWidth+"vw"
            newSlot.style.height = slotHeight+"vw"
            newSlot.style.marginTop = (rowSpace/2)+"vw"
            newSlot.style.marginBottom = (rowSpace/2)+"vw"
            newSlot.style.marginLeft = (colSpace/2)+"vw"
            newSlot.style.marginRight = (colSpace/2)+"vw"

            //add slot to the row and to the array
            newRow.appendChild(newSlot)
            //slotList.push(newSlot)

            counter++ //remove later
        }
        //add row to the container
        slotContainer.appendChild(newRow)
    }
}
