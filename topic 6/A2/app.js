function multiply(){
    a=Number(document.my_cal.first.value);
    b=Number(document.my_cal.second.value);
    c=a*b;
    document.my_cal.total.value=c;
    }
function addition(){
        a=Number(document.my_cal.first.value);
        b=Number(document.my_cal.second.value);
        c=a+b;
        document.my_cal.total.value=c;
    }
function subtraction(){
        a=Number(document.my_cal.first.value);
        b=Number(document.my_cal.second.value);
        c=a-b;
        document.my_cal.total.value=c;
    }
function division(){
        a=Number(document.my_cal.first.value);
        b=Number(document.my_cal.second.value);
        c=a/b;
        document.my_cal.total.value=c;
    }
function modulus(){
        a=Number(document.my_cal.first.value);
        b=Number(document.my_cal.second.value);
        c=a%b;
        document.my_cal.total.value=c;
    }