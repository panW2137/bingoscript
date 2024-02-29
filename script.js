let editorMode = 0
update_main_panel()

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
