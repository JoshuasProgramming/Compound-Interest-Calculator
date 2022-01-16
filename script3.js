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

const btn_ = document.getElementById('btn_').addEventListener("click", (e)=>{
    let percentage = (interest.value / 100); //8 => 0.08 => 8%
    let n = 365;
    
    let A1 = principle.value*(1 + (percentage/n)) ** (n * duration.value);
    let A2 = A1.toLocaleString("en-US");
    
    output.value = "£" + A2;
});