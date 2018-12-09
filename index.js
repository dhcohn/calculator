


function clear(){
    // clears input
} 

function division(){
    $('button#division').on('click', function(e) {
        e.preventDefault();

    });

}

function multiply(){
    $('button#multiply').on('click', function(e) {
        e.preventDefault();
    });
    
}

function subtract(){
    $('button#subtraction').on('click', function(e) {
        e.preventDefault();
    });

}

function add(){
    $('button#addtion').on('click', function(e) {
        e.preventDefault();
    });
    
}

function seven(){
    $('button#seven').on('click', function(e) {
        e.preventDefault();
    });
    
}

function eight(){
    $('button#eight').on('click', function(e) {
        e.preventDefault();
    });
    
}

function nine(){
    $('button#nine').on('click', function(e) {
        e.preventDefault();
    });
    
}

function four(){
    $('button#four').on('click', function(e) {
        e.preventDefault();
    });
    
}

function five(){
    $('button#five').on('click', function(e) {
        e.preventDefault();
    });
    
}

function six(){
    $('button#six').on('click', function(e) {
        e.preventDefault();
    });
    
}

function one(){
    $('button#one').on('click', function(e) {
        e.preventDefault();
    });
    
}

function two(){
    $('button#two').on('click', function(e) {
        e.preventDefault();
    });
    
}

function three(){
    $('button#three').on('click', function(e) {
        e.preventDefault();
    });
    
} 

function zero(){
    $('button#zero').on('click', function(e) {
        e.preventDefault();
    });
    
} 

function decimal(){
    $('button#decimal').on('click', function(e) {
        e.preventDefault();
    });
    
};

function makeProblem(string){
    let breakUp = string.split('*','/','-','+');
    let numVal = parseInt(breakUp, 10);
    
};

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

function minus(a,b){
    return a - b;
}

function plus(a,b){
    return a + b;
}

function calculate(){
if ($('input#operand').val() === '/'){
return `
<span>
${div(parseFloat($('input#number-choice-1').val()), parseFloat($('input#number-choice-2').val()))};
</span>`
}

else if ($('input#operand').val() === '*'){
return `
<span>
${mult(parseFloat($('input#number-choice-1').val()), parseFloat($('input#number-choice-2').val()))};
</span>`
    
}
else if ($('input#operand').val() === '-'){
return `
<span>
${minus(parseFloat($('input#number-choice-1').val()), parseFloat($('input#number-choice-2').val()))};
</span>`
    
}
else if ($('input#operand').val() === '+'){
return `
<span>
${plus(parseFloat($('input#number-choice-1').val()), parseFloat($('input#number-choice-2').val()))};
</span>`   
};

};

function final(){
let finalVal = $('#operand').val();
console.log(finalVal);
return finalVal;
}

function display() {
    $('#equals').click(function(){
        $('div.solution-box').html(calculate());
    });
}

console.log(display());