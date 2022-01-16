/**
 *Compound Interest Calculator for daily JavaScript File
 *author(Joshua Thomas)
 *date(16.01.2022)
 *version:1.0
*/

const principle = document.getElementById('principle');
const interest = document.getElementById('interest');
const duration = document.getElementById('duration');
const output = document.getElementById('output');

//grab monthly id for monthly contributions
const daily = document.getElementById('daily');

const btn_ = document.getElementById('btn_').addEventListener("click", (e)=>{

    if((daily.value == "") || (daily.value == "0")){
        daily.value = 0;
    }

    let percentage = (interest.value / 100); //8 => 0.08 => 8%
    let n = 365; //365 => compounds 365 time per year (Daily compound interval)
    
    let A1 = (principle.value*(1 + (percentage/n)) ** (n * duration.value));
    let pmt_v = ((daily.value*(1 + (percentage/n)) ** (n * duration.value)) - daily.value) / (percentage/n);

    //alert("A1: " + A1 + "PMT: " + pmt);

    let A2 = (A1 + pmt_v);

    //alert(A2);
    
    let A3 = A2.toLocaleString("en-US");
    
    output.value = "£" + A3;
});