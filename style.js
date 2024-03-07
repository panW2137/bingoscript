//fetch the elements of bingo card
//bingoCard = document.getElementById("visualization")
//slotContainer = document.getElementById("slotContainer") 

//styles

//background
let bgColor 
let bgImg

function update_style(){
    fetch_style_values()

    generate_background_style()
}

function fetch_style_values(){
    bgColor = document.getElementById("input_bg_color").value
    bgImg = document.getElementById("input_bg_img").files[0]
}

function generate_background_style(){
    bingoCard.style.backgroundColor = bgColor
}

function clear_bg_img(){
    document.getElementById('visualization').style.backgroundImage = "none"
}