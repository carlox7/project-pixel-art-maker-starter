let sizeForm = $('#sizePicker');
let pixelColored = false;

function pickColor(e){
  e.preventDefault();
  if(pixelColored){
    $(this).css('background-color', 'white');
    pixelColored = false;
  }else{
    pixelColored = true;
    let color = $('#colorPicker');
    let colorPick = color.val();
    console.log(colorPick);
    $(this).css('background-color', colorPick);
  };
}

function makeGrid(e) {
  e.preventDefault();
  let canvas = $('#pixelCanvas');
  let height = $('#inputHeight').val();
  let width = $('#inputWidth').val();
  let tableRows = '';

  for(var i = 0; i < height; i++){
    tableRows += '<tr>';
    for(var j = 0; j < width; j++){
      tableRows += '<td></td>';
    }
    tableRows += '</tr>';
  }
  console.log(tableRows);
  canvas.html(tableRows);

  canvas.delegate('td', 'mousedown', pickColor);

}

sizeForm.submit(makeGrid);
