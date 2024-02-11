const keyItems = document.querySelectorAll('.key-item');

const keyValue = document.getElementById('key-value');

let myKey = "";

document.addEventListener('keyup', function(event){
    const keyPressed = event.key.toUpperCase();
    
    for(const item of keyItems){
        if(item.innerText === keyPressed){
            item.classList.add('key');
            myKey += keyPressed;
            keyValue.value = myKey;
        } else{
            item.classList.remove('key')
        }
    }

})