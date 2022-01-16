/**
 *Compound Interest Calculator JavaScript File
 *author(Joshua Thomas)
 *date(13.01.2022)
 *version:1.0
*/

const principle = document.getElementById('principle');
const interest = document.getElementById('interest');
const duration = document.getElementById('duration');
const output = document.getElementById('output');

//grab monthly id for monthly contributions
const yearly = document.getElementById('yearly');

const btn_ = document.getElementById('btn_').addEventListener("click", (e)=>{

    if((yearly.value == "") || (yearly.value == "0")){
        yearly.value = 0;
    }

    let percentage = (interest.value / 100); //8 => 0.08 => 8%
    let n = 1; //1 => compounds 1 time per year (Yearly compound interval)
    
    let A1 = (principle.value*(1 + (percentage/n)) ** (n * duration.value));
    let pmt_v = ((yearly.value*(1 + (percentage/n)) ** (n * duration.value)) - yearly.value) / (percentage/n);

    //alert("A1: " + A1 + "PMT: " + pmt);

    let A2 = (A1 + pmt_v);

    //alert(A2);
    
    let A3 = A2.toLocaleString("en-US");
    
    output.value = "£" + A3;
});