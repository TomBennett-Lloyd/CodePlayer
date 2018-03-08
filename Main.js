//check for jQuery

if (typeof jQuery=="undefined") {
  alert("Jquery not installed");
};

//getStyleSheet

function getStyleSheet(unique_title) {
  title = new RegExp(unique_title,'i');
  for(var i=0; i<document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];

    if(title.test(sheet.href)) {
      console.log(sheet.href);
      return sheet;
    }
  }
}

var stylesheet=getStyleSheet("cpStyle.css");

//toggle code boxes

var numblocks=0;
//function to open container
$.fn.openBox = function(){

  if ($(this).css("display")=="none"){
    numblocks+=1;
    console.log((90/numblocks).toString()+"%");
    $("#container textarea, #container div").css("width",(95/numblocks).toString()+"%");
    $(this).css("display","block");
  }else {
    numblocks-=1;
    $("#container textarea, #container div").css("width",(95/numblocks).toString()+"%");
    $(this).css("display","none");
  };
};

//add event listeners

$('#htmlButton').on("click", function(){
  event.preventDefault();
  $("#html").openBox();
});
$('#cssButton').on("click",function(){
  event.preventDefault();
  $('#css').openBox(event);
});
$('#javascriptButton').on("click",function(){
  event.preventDefault();
  $('#javascript').openBox(event);
});
$('#outputButton').on("click",function(){
  event.preventDefault();
  $('#output').openBox(event);
});

//update contents of the output Box
$("#html").on("keyup change blur paste cut click",function(){
  $('#output').html($("#html").val())
});

$("#css").on("keyup change blur paste cut click",function(){
  if(/{/.test($("#css").val()) && /}/.test($("#css").val())){
    if(/{/g.exec($("#css").val()).length==/}/g.exec($("#css").val()).length){
      console.log(stylesheet.cssRules);
      if (stylesheet.cssRules!=null){
        for (var i = 0; i < stylesheet.cssRules.length; i++) {
          stylesheet.deleteRule(i);
        }
      }
      stylesheet.insertRule($("#css").val());
      console.log(stylesheet.cssRules);
    }
  }
});
$("#javascript").on("keyup change blur paste cut click",function(){
});
