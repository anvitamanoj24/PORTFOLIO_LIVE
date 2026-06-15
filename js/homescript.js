document.addEventListener('DOMContentLoaded',(event)=>{
    let text=[
        "Anvita MK",
        "a Full Stack Developer",
        "a Student at CEC",
        "a UI Designer"];

    let count=0;
    let index=0;
    let currentText='';
    let letter='';

    (function type(){
        if(count==text.length){
            count=0;
        }
        currentText=text[count];
        letter=currentText.slice(0,++index);
        console.log(letter);

        const h1=document.querySelector('.home .left h1');
        h1.textContent=letter;

        if(letter.length==currentText.length){
            count++;
            index=0;
            setTimeout(type,2000);
        }
        else{
            setTimeout(type,200);
        }
    }())
})