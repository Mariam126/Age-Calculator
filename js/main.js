let userInput =document.getElementById("date");

let button =document.getElementById("btn");
userInput.max=new Date().toISOString().split("T")[0];
let result =document.getElementById("result");
//function for calculating  age

button.onclick=function calculateAge(){
let birdate =new Date(userInput.value);
let d1 =birdate.getDate();
let m1=birdate.getMonth() + 1;
let y1=birdate.getFullYear();

let today =new Date();

let d2 =today.getDate()
let m2=today.getMonth();
let y2=today.getFullYear();
let y3,m3,d3;
y3=y2 -y1;
if(m2 >= m1){
    m3 =m2 -m1;
}
else{
    y3--;
    m3 = 12 + m2 -m1;
}
if(d2 >= d1){
    d3 =d2 -d1;
}
else{
    m3--;
    d3 = getDaysInMonth(y1 ,m1) + d2 - d1;
}
if(m3 < 0){
    m3 =11;
    y3--;
}
result.innerHTML=` you are<span>${y3}</span> years<span>${m3}</span> months and <span>${d3} </span> days`;

}
function getDaysInMonth(year ,month){
    return new Date(year ,month ,0).getDate();
}