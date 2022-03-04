

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; // stops the function from running alltogether
    audio.currentTime = 0; // rewinds sound to the start
    audio.play();
    key.classList.add('playing');
}




  


    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; // skip if not a transform

        this.classList.remove('playing');
    }


    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    // console.log(key);

    window.addEventListener('keydown', playSound);