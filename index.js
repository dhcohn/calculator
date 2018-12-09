


function clear(){
    $("button#clear").click(function(){
    $('input#number-choice-1').val('');
    $('input#number-choice-2').val('');
    $('div.solution-box').val('');
    $('input#number-choice-1').addClass('selected');
    $('input#number-choice-2').removeClass('selected');
    });
} 



function division(){
    $("button#division").click(function(){
        $('input#number-choice-2').addClass('selected');
        $('input#number-choice-1').removeClass('selected');
        $('input#operand').val('/');
    });
}


function multiply(){
    $("button#multiply").click(function(){
        $('input#number-choice-2').addClass('selected');
        $('input#number-choice-1').removeClass('selected');
        $('input#operand').val('*');

    });  
}



function subtract(){
    $("button#subtraction").click(function(){
        $('input#number-choice-2').addClass('selected');
        $('input#number-choice-1').removeClass('selected');
        $('input#operand').val('-');
    });
}



function add(){
    $("button#addition").click(function(){
        $('input#number-choice-2').addClass('selected');
        $('input#number-choice-1').removeClass('selected');
        $('input#operand').val('+');
    });
    
}



function seven(){
    $('button#seven').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('7');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '7');
        }
    });   
};



function eight(){
    $('button#eight').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('8');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '8');
        }
    });   
};

function nine(){
    $('button#nine').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('9');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '9');
        }
    });   
};

function four(){
    $('button#four').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('4');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '4');
        }
    });   
};


function five(){
    $('button#five').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('5');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '5');
        }
    });   
};


function six(){
    $('button#six').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('6');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '6');
        }
    });   
};


function one(){
    $('button#one').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('1');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '1');
        }
    });   
};

function two(){
    $('button#two').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('2');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '2');
        }
    });   
};


function three(){
    $('button#three').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('3');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '3');
        }
    });   
};


function zero(){
    $('button#zero').click(function(){
        if ($('input.selected').val() === '') {
            $('input.selected').val('0');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '0');
        }
    });   
};


function decimal(){
    $('button#decimal').on('click', function(e) {
        if ($('input.selected').val() === '') {
            $('input.selected').val('.');
        }
        else {
            let current = $('input.selected').val();
            $('input.selected').val(current += '.');
        }
    });   
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
${div(parseFloat($('input#number-choice-1').val()), parseFloat($('input#number-choice-2').val()))}
</span>`
}

else if ($('input#operand').val() === '*'){
return `
<span>
${mult(parseFloat($('input#number-choice-1').val()), parseFloat($('input#number-choice-2').val()))}
</span>`
    
}
else if ($('input#operand').val() === '-'){
return `
<span>
${minus(parseFloat($('input#number-choice-1').val()), parseFloat($('input#number-choice-2').val()))}
</span>`
    
}
else if ($('input#operand').val() === '+'){
return `
<span>
${plus(parseFloat($('input#number-choice-1').val()), parseFloat($('input#number-choice-2').val()))}
</span>`   
};

};


function display() {
    $('#equals').click(function(){
        $('input#number-choice-1').addClass('selected');
        $('input#number-choice-2').removeClass('selected');
        $('div.solution-box').html(calculate());
        $('input#number-choice-1').val('');
        $('input#number-choice-2').val('');
        $('input#operand').val('');
    });
}
clear();
division();
multiply();
subtract();
plus();
add();
minus();
mult();
div();
seven();
eight();
nine();
four();
five();
six();
one();
two();
three();
zero();
decimal();
calculate();
display();


