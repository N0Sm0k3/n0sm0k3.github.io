document.addEventListener('DOMContentLoaded', function(){
    var MIN_VID = 1;
    var MAX_VID = 4;

    var count = localStorage.getItem('countVideo');
    if (count === null)
       count = MIN_VID - 1;

    count = MIN_VID + (1 + count) % (MAX_VID - MIN_VID + 1);
    localStorage.setItem('countVideo', count);

    var video = document.querySelector("#audio");
    video.setAttribute("src","./mus/"+count+".mp3");
    video.load(); /* and */ video.play();
});