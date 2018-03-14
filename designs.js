
// Select color input
$('#colorPicker').change(function(){
  var setColor=$('#colorPicker').val();
})
// Select size input
var  h=$('#inputHeight').val();
var  w=$('#inputWeight').val();
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
  makeGrid();
});
//seting id of cells
var boxId=0;
//creating grid
function makeGrid(){
  var grid='';
for(i=0;i<h;i++){
  var grid+='<tr> ';
  for(n=0;n<w;n++){
    var grid+='<td>'+boxId+'</td>';
    boxId++;
  }
var grid+=' </tr>';
}
grid.append($('#pixelCanvas'));
};
