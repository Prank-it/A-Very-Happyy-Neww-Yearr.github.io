var i = 0;
var txt1 =
  "Hoiii  <<               Why so serious?...thoda sa hasle bhai:)  <<<                kuch nhi bs happy new year wish karra hu!                                                                           > So this will be the last writing from me to you this year.  <  Here we are in 2024 TOGETHER; see, we made it till here.  <<                   Remembering you from that first sight of you in 10th grade, < who could have thought a year ahead we would be calling each other with these weird nicknames? < Who could have thought we would be sharing playlists, recommending movies and series < to each other, and then getting obsessed over < them, sharing details of the day?  <<                           Yes, we fought, we cursed, we cried, we screamed, < but every time somehow, someone, either it was you or it was me, < came and said, we will get through it.                                                     >  So there are a lot of things < I want to tell and surely will, but < for now, all I want to say is that < I am sorry for my mistakes, < sorry for instead of being the solution, < somehow I became another problem you need to handle!                     <<  And thanks for not giving up on us < when there was nothing left. < Thank you for making me happy this year.                                                     > A very happy new year bitch                   ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
