function clearInput(){
    document.getElementById('result').value="";
}

document.addEventListener ('DOMContentLoaded',function(){

    // The DOMContentLoaded (DCL) is an event fired by the web browser. It has a start and an end as listeners can be attached at the event to trigger JavaScript execution when the event fires.
    
    // The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed (without waiting for images, and iframes to finish loading).

    var button = document.getElementById('button2');
    
    var sound = document.getElementById('sound');


    function playSound(){
        sound.play();
    }
    button.addEventListener('click', function()
    {
        
        playSound();

    })
    
})