window.addEventListener('load', function(event){
  date = new Date();
  updateTimeString();

  setInterval(
    function(){
        date = new Date();
        updateTimeString();
        movePointer();
    },1000);
})


function showCviceni(){
  pred = document.getElementsByClassName("pred");

  for (var i = 0; i < pred.length; i++) {
    console.log(pred[i]);
    pred[i].style.opacity = 0.3;
  }

  cviceni = document.getElementsByClassName("cviceni");

  for (var i = 0; i < cviceni.length; i++) {
    // console.log(pred[i]);
    cviceni[i].style.opacity = 1;
  }
  }

function showPred(){
  cviceni = document.getElementsByClassName("cviceni");

  for (var i = 0; i < cviceni.length; i++) {
    // console.log(pred[i]);
    cviceni[i].style.opacity = 0.3;
  }

  pred = document.getElementsByClassName("pred");

  for (var i = 0; i < pred.length; i++) {
    console.log(pred[i]);
    pred[i].style.opacity = 1;
  }

}

function showAll(){
  pred = document.getElementsByClassName("pred");
  cviceni = document.getElementsByClassName("cviceni");

  for (var i = 0; i < pred.length; i++) {
    console.log(pred[i]);
    pred[i].style.opacity = 1;
  }

  for (var i = 0; i < cviceni.length; i++) {
    console.log(cviceni[i]);
    cviceni[i].style.opacity = 1;
  }

}

function updateTimeString(){
  document.getElementById("time").innerText = date.toLocaleString();
}

function movePointer(){
    var den;
    switch(date.getDay()){
        case 1:
            den = "mo";
            break;
        case 2:
            den = "tu";
            break;
        case 3:
            den = "we";
            break;
        case 4:
            den = "th";
            break;
        case 5:
            den = "fr";
            break;
        case 6:
        case 0:
        default:
            break;
    }

    var time = date.getHours() * 60 + date.getMinutes();

    if (den == undefined)
    {
        den = "mo";
        time = 435;
    }

    if (time < 435) time = 435;
    else if (time > 1155) time = 1155;
    time -= 435;
    var segment = Math.ceil(time / 105);
    time %= 105;

    if (time >= 90) time = 90;

    offset = 0;

    var id = den + (segment * 2 - (time < 45 ? 1 : 0));

    while (document.getElementById(id) == undefined){
        id = den + (segment * 2 - ++offset);
    }

    var element = document.getElementById(id);


    document.getElementById("pointer").style.display = "block";
    document.getElementById("pointer").style.top = element.getBoundingClientRect().top - 6 + "px";
    document.getElementById("pointer").style.height = element.getBoundingClientRect().height * (den == "tu" ? 2 : 1) + 6 + "px";

    var width = element.getBoundingClientRect().width;
    var minutesInBlock = document.getElementById(id).colSpan * 45;

    document.getElementById("pointer").style.left = document.getElementById(id).getBoundingClientRect().left
    +  width / minutesInBlock * (time > 45 && offset == 0 ? time - 45 : time) - 1  + "px";
}
