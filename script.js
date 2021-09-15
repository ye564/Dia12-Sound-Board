const sounds = ['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound=>{
    const btn = document.createElement("button");
    btn.classList.add('btn');
    btn.innerHTML = sound;
    btn.addEventListener('click', ()=>{
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);

});

function stopSongs (){
    sounds.forEach(sound=>{
        const Songs = document.getElementById(sound);
        Songs.pause();
        Songs.currenTime=0;
    })
}