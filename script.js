window.addEventListener('load', function(event){
  date = new Date();
  // updateTimeString();

  setInterval(
    function(){
        date = new Date();
        // updateTimeString();
        // movePointer();
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


function Onload() {
    Interval();
    setInterval(function(){
      Interval();
    }, 1000);
    var poznamka = document.getElementsByClassName('poznamka');
    var hodiny = document.getElementsByClassName('hodina');
    for(var i = 0; i < hodiny.length; i++) {
        var hodina = hodiny[i];
        hodina.onclick = function() {
            for(var i = 0; i < poznamka.length; i++) {
                poznamka[i].style.display="none";
            }
            document.getElementById(this.id+"pozn").style.display="block";
        }
    }

    window.onclick = e => {
        var classes=e.target.className;
        classes=classes.split(" ");

        if(classes[0]!="x" && classes[1]!="hodina") {
            for(var i = 0; i < poznamka.length; i++) {
                poznamka[i].style.display="none";
            }
        }
    }
}


function Interval() {
      document.getElementById("time").innerHTML = Date();
      var d = new Date("10-16-2020 20:39");
      d=new Date();
      var day = d.getDay();
      var hour = d.getHours();
      var minute = d.getMinutes();
      var cas = 60*hour+minute;
      if(cas>=435 && cas <=1050) {   // 7:15 - 17:30
        cas=cas-435;
        var pom = cas/105;
        pom = Math.floor(pom);

        var pom2 = (cas+20)/105;
        pom2 = Math.floor(pom2);

        if(pom==pom2) {
            pom=pom*33;
            var left = 130+cas*2.22-pom;
        } else {
            pom=((pom+1)*2*100)-10;
            var left = 130+pom;
        }

        if(day>=1 && day<=5) {     // po - pá
            var top=100+100*day;
            document.getElementById("momentalni_hodina").style.left = left;
            document.getElementById("momentalni_hodina").style.top = top;
            document.getElementById("momentalni_hodina").style.display = "block";
        } else {
            document.getElementById("momentalni_hodina").style.display = "none";
            document.getElementById("momentalni_hodina").style.display = "none";
        }

      }  else {
          document.getElementById("momentalni_hodina").style.display = "none";
          document.getElementById("momentalni_hodina").style.display = "none";
      }
}
