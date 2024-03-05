/*
generate.js
this file is responsible for generating bingo card (visualization) and css style of slots
*/

//fetch the elements of bingo card
let bingoCard = document.getElementById("visualization")
let slotContainer = document.getElementById("slotContainer")

//properties
let rows
let cols

//styles of slots

//size
let slotWidth
let slotHeigh

//space
let colSpace
let rowSpace

//color
let slotBgCol
let slotBorderCol
let slotOpac

//border
let borderRoundness


//generates slots of bingo card within visualization
function update_bingo(){
    //clear the table
    slotContainer.innerHTML = ""
    
    //fetch the values
    fetch_generate_values()

    //generate the table
    generate_bingo()

    //add styles
    generate_bingo_style()
}

function fetch_generate_values(){
    //fetch the properties
    rows = document.getElementById("input_rows").value
    cols = document.getElementById("input_columns").value
    
    //fetch the styles of slots
    //size
    slotWidth = document.getElementById("input_width").value
    slotHeight = document.getElementById("input_height").value
    //space
    colSpace = document.getElementById("input_col_dist").value
    rowSpace = document.getElementById("input_row_dist").value
    //color
    slotBgCol = document.getElementById("input_border_color").value
    slotBorderCol = document.getElementById("input_slot_bg_color").value  
    slotOpac = document.getElementById("input_slot_opacity").value
    //border
    borderRoundness = document.getElementById("input_slot_roundness").value
}

function generate_bingo(){
    //let counter = 0; //temporary, remove later, probably

    for(let i=0; i<rows; i++){ //row
        //create new row
        let newRow = document.createElement("tr")
        newRow.setAttribute("class","slotContainerRow")
    
        for(let j=0; j<cols; j++){ //column
            //create new element
            let newSlot = document.createElement("td")
            //let newText = document.createTextNode("element "+counter)
            //add class and text, change later to get data from user
            newSlot.setAttribute("class","slot")
            //newSlot.appendChild(newText)

            //add slot to the row and to the array
            newRow.appendChild(newSlot)

            //counter++ //remove later
        }
        //add row to the container
        slotContainer.appendChild(newRow)
    }
}

function generate_bingo_style(){
    //get the amount of slots
    let size = document.getElementsByClassName("slot").length

    //loop for every slot
    for(let i=0; i<size; i++){
        //fetch slot
        let slot = document.getElementsByClassName("slot")[i]
        //add styles

        //size
        slot.style.width = slotWidth+"vw"
        slot.style.height = slotHeight+"vw"

        //space
        slot.style.marginTop = (rowSpace/2)+"vw"
        slot.style.marginBottom = (rowSpace/2)+"vw"
        slot.style.marginLeft = (colSpace/2)+"vw"
        slot.style.marginRight = (colSpace/2)+"vw"

        //color
        slot.style.border = "1px solid "+slotBorderCol
        slot.style.backgroundColor = slotBgCol
        slot.style.opacity = slotOpac/100

        //border
        slot.style.borderRadius = borderRoundness + "%"
    }
}