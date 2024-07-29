function fnMsg(){
    var userName = prompt('Tell us your name: ');
    alert('Hi ' +userName + ' Welcome:)')
}

function fnInt(){
    var num1 = parseInt(prompt('Enter first number: '));
    var num2 = parseInt(prompt('Enter second number: '));
    alert(num1 + num2);
}

function fnClose(){
    var result = confirm('Are you sure you want to exit? ');
    if(result){
        window.close();   
        console.log(result);
    }
    else{
        window.location.href="http://www.google.com";
    }
}

function fnReplace(){
    console.log("in fnReplace");
    document.write("<h1>This is written inside a script</h1>");
    document.write("<h2>This is in h2 tag</h2>")
}

function fnTable(){
    var table = prompt('Enter a number: ');
    for(var i=1; i<=10; i++){
        document.write(`${table} X ${i} = ${table*i} <br>`);
    } 
}

function fnDisplayElements(){
    var list = ["C", "C++", "JS", "Python"];
    document.write('<ol>');
    for(var i=0;i<list.length;i++){
        document.write(`<li> ${list[i]} </li>`);
    }
    document.write('</ol>');

}

function fnDisplayTable(){
    var content = [
        {id:1, name:"Sujith", role:"dev"},
        {id:2, name:"Sujith", role:"dev"},
        {id:3, name:"Sujith", role:"dev"},
        {id:4, name:"Sujith", role:"dev"},
        {id:5, name:"Sujith", role:"dev"}
    ]

    document.write("<table border='1'>");
        document.write("<tr><th>ID</th><th>Name</th><th>Role</th></tr>");
        for(var i=0; i<content.length; i++){
            document.write(`<tr><td>${content[i].id}</td><td>${content[i].name}</td><td>${content[i].role}</td></tr>`);
        }
        document.write("</table>");
}

function fnGetElementbyID(){
    var userName = document.getElementById("name");
    console.log(userName.value);
}

function fnUpperCase(id){
    var upperCase = document.getElementById(id);
    upperCase.value = upperCase.value.toUpperCase();
}

function fnChangebg(){
    var color = document.getElementById("color");
    document.body.style.backgroundColor = color.value;
    console.log(color.value);
}

function fnRadio(){
    var inp = document.getElementsByName("gender");
    var Rdlabel = document.getElementById("radioLabel");
    var result = '';
    for(var i=0; i<inp.length;i++){
        if(inp[i].checked){
         result = result + inp[i].value +","
          console.log(inp[i].value);  
        }
    }
    Rdlabel.innerHTML= result;
}

function fnDisplayDiv(){
    var city = document.getElementById("selectCity");
    if(city.value=="Others"){
        document.getElementById("division").style.visibility='visible';
    }
    else{
        document.getElementById("division").style.display='hidden';

    }
}