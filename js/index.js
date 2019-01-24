$(document).ready(function(){
  var count = 0; //Current number.
  var acum = 0; //An acumulator of all made operations.
  var dec = false; //A flag that establish the input of decimals in a number.
  var arr = []; //An array that contains all the numbers entered and its operations.
  var b = false;  //A flag that determines if the current number has one digit or more.
  var afterEq = false; //A flag that determines if the '=' button pushed or not.
  var minusFlag = false; //A flag used for the first input number to fix a issue with the substraction operation.
  var divFlag = false; //A flag used for the first input number to fix a issue with the division operation.
  var checkForADot = function(str){   //A function that returns true if a dot character ('.') is found in a string.
    for(var i = 0; i<str.length; i++){
      if(str.charAt(i)==="."){
        return true;
      }
    }
    return false;
  };
  var decimalsLength = function(num){ //A function that returns the quantity of decimals in a number.
    var str = num.toString();
    var b = false;
    var count = 0;
    for(var i = 0; i < str.length; i++){
      if(b){
        count++;
      }
      if(str.charAt(i)==="."){
        b=!b;
      }
    }
    return count;
  };
  
  var resetVar = function(){ //A function that resets all the global variables to its initial values.
    count = 0;
    acum = 0; 
    dec = false; 
    arr = arr.slice(0,0); 
    b = false;  
    afterEq = false; 
    minusFlag = false;
    divFlag = false;
    $('#numBox').text(count);
    $('#opBox').text(acum);
  };
  
  /*<<<OTHER BUTTONS>>>*/
  
  //Btn. 'DEL'
  $('.btnDel').click(function(){
    resetVar();
   });
  
  /*<<<NUMBERS BUTTONS>>>*/
  
  // Btn. '1'
	$('.btn1').click(function(){
    var val = parseInt($('.btn1').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
    if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      //$('#opBox').text(arr.join(''));
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '2'
	$('.btn2').click(function(){
    var val = parseInt($('.btn2').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
    if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '3'
  $('.btn3').click(function(){
    var val = parseInt($('.btn3').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
     if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '4'
  $('.btn4').click(function(){
    var val = parseInt($('.btn4').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
     if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '5'
  $('.btn5').click(function(){
    var val = parseInt($('.btn5').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
     if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '6'
  $('.btn6').click(function(){
    var val = parseInt($('.btn6').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
     if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '7'
  $('.btn7').click(function(){
    var val = parseInt($('.btn7').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
     if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '8'
  $('.btn8').click(function(){
    var val = parseInt($('.btn8').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
     if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '9'
  $('.btn9').click(function(){
    var val = parseInt($('.btn9').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
     if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  // Btn. '0'
  $('.btn0').click(function(){
    var val = parseInt($('.btn0').text());
    if(b){
      if(dec){
        if(checkForADot(count.toString())){
         var exp = decimalsLength(count)+1; 
        }else{
         var exp = 1;
        }
        count*=Math.pow(10,exp);
        count+=val;
        count/=Math.pow(10,exp);
      }else{
        count*=10;
        count+=val;
      }
      
    }else{
      count=val;
      b=!b;
      if(dec){
        count/=10;
      }
    }
   
    
     if(count.toString().length<=10 && arr.join("").length<=30){
      if(arr.length===0){
        arr.push(count);
      }
      if(!isNaN(arr[arr.length-1])){
        arr[arr.length-1] = count;
      }else{
        arr.push(count);
      }
      $('#numBox').text(count);
      $('#opBox').text(arr.join(''));
    }else{
      resetVar();
      $('#numBox').text("Digit Limit.");
      //dec = false;
      //count = 0;
    }
   });
  
  /*<<<OPERATION BUTTONS>>>*/

  //Btn. '+'
  $('.btnPlus').click(function(){
   dec = false;
   if(arr.length!==0){
     b=false;
     if(arr.length!==0 && isNaN(arr[arr.length-1])){
       arr[arr.length-1] = '+';
     }else if(arr.length!==0){
       arr.push('+');
       acum+=count;
     }
     //$('#numBox').text(sum);
     $('#opBox').text(arr.join(''));
   }
  });
  
  //Btn. '-'
  $('.btnMinus').click(function(){
   dec = false;
   if(arr.length!==0){
     b=false;
     if(arr.length!==0 && isNaN(arr[arr.length-1])){
       arr[arr.length-1] = '-';
     }else if(arr.length!==0){
       arr.push('-');
       //alert(arr);
       if(!minusFlag){
       acum=count; 
       minusFlag=true;
       }else{
       acum-=count;  
       }
       //alert([acum, count]);
     }
     //$('#numBox').text(sum);
     $('#opBox').text(arr.join(''));
   }
  });
  
  //Btn. '*'
  $('.btnMult').click(function(){
   dec = false;
   if(arr.length!==0){
     b=false;
     if(arr.length!==0 && isNaN(arr[arr.length-1])){
       arr[arr.length-1] = '*';
     }else if(arr.length!==0){
       arr.push('*');
       if(acum===0){
         acum=1;
       }
       if(afterEq){
         count=1;
         afterEq = false;
       }
       acum*=count;
     }
     //$('#numBox').text(sum);
     $('#opBox').text(arr.join(''));
   }
  });
  
  //Btn. '/'
  $('.btnDiv').click(function(){
   dec = false;
   if(arr.length!==0){
     b=false;
     if(arr.length!==0 && isNaN(arr[arr.length-1])){
       arr[arr.length-1] = '/';
     }else if(arr.length!==0){
       arr.push('/');
       if(afterEq){
         count=1;
         afterEq = false;
       }
       if(!divFlag){
         acum=Math.pow(count,2);
         divFlag = true;
       }
       acum/=count;
       //alert(['acum',acum,'count',count,'arr',arr]);
       if(acum===Infinity || isNaN(acum)){
         b= false;
         divFlag=false;
         acum  = 0;
         arr = arr.slice(0,0);
         $('#numBox').text('Math Error');
         $('#opBox').text('Dividing by 0.');
       }
     }
     if(arr.length!==0){
      $('#opBox').text(arr.join(''));
     }
   }
  });
  
  //Btn. '.'
  $('.btnDot').click(function(){
    dec=true;
   });
  
  //Btn. '='
  $('.btnEq').click(function(){
   //b=false;
   dec = false;
   if(arr.length>1 && !isNaN(arr[arr.length-1])){
     switch(arr[arr.length-2]){
       case '+': acum+=arr[arr.length-1]; break;
       case '-': acum-=arr[arr.length-1]; break;
       case '*': acum*=arr[arr.length-1]; break;
       case '/': acum/=arr[arr.length-1]; break;
       default: break;
                             }
   }
   //alert(['acum',acum,'count',count,'arr',arr]);
   arr = arr.slice(0,0);
   count = 0;
   afterEq = true;
   if(acum===Infinity || isNaN(acum)){
    acum =0;
    //arr = arr.slice(0,0); DONT
    $('#numBox').text('Math Error');
    $('#opBox').text('Dividing by 0.');
   }else{
    arr.push(acum);
    $('#numBox').text(Math.round(acum*10000)/10000);
    $('#opBox').text(arr);
   }
   //count=0;
   divFlag = true;
   //acum=0;
   });
});