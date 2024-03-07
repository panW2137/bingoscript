//change the scale of visualization
let scaleRange = document.getElementById("vis_scale")
scaleRange.addEventListener('input', () => {
    let scale = scaleRange.value
    document.getElementById("visualization").style.transform = 'scale('+scale+')'
})

//update the bingo content from user input
let textArea = document.getElementById("textarea")
textArea.addEventListener('input',()=>{
    updateContent()
})

//handle image upload, hopefully change later
//thanks chatGPT
document.getElementById('input_bg_img').addEventListener('change', function (e) {
    handleImageUpload(e);
  });

  function handleImageUpload(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageDataUrl = e.target.result;
        applyImageAsBackground(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  }

  function applyImageAsBackground(imageDataUrl) {
    const myDiv = document.getElementById('visualization');
    myDiv.style.backgroundImage = 'url(' + imageDataUrl + ')';
  }
