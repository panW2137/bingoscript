let editorMode = true

function print_page(){
    document.getElementById("edit_prop").style.display = "none"
    document.getElementById("edit_num").style.display = "none"
    document.getElementById("div_row").style.display = "none"
    window.print()
    document.getElementById("div_row").style.display = "flex"
    if(editorMode){
        document.getElementById("edit_prop").style.display = "flex"
    } else {
        document.getElementById("edit_num").style.display = "flex"
    }
}