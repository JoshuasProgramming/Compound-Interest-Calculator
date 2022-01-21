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

     /**
     * This calculates the future investment value
     * percentage is the interest rate 
     * n is the amount of times the investment compounds per year
     * A1 is the sum of the compound interest formula
     * pmt_v is the compound interest formula minus the yearly contributions, divided by interest rate over compounds per year
     */
    if((daily.value == "") || (daily.value == "0")){
        daily.value = 0;
    }

    let percentage = (interest.value / 100); //8 => 0.08 => 8%
    let n = 365; //365 => compounds 365 time per year (Daily compound interval)
    
    let A1 = (principle.value*(1 + (percentage/n)) ** (n * duration.value));
    let pmt_v = ((daily.value*(1 + (percentage/n)) ** (n * duration.value)) - daily.value) / (percentage/n);

    let A2 = (A1 + pmt_v);
    
    let A3 = A2.toLocaleString("en-US");
    
    output.value = "£" + A3;

    /**
     * Area below turns the html form and future investment value into its own pdf called 'FutureInvestmentValue.pdf'.
     * Step1. Created new div element and appeneded a button with the id of 'download_btn'.
     * Step2. Created a new constant which gets the 'download_btn' element and adds an event listener.
     * Step3. Once the user triggers the event, the options variable sets the options of the file.
     * Step4. the program then saves it to the user's computer
     */

     let downloadbtn = document.createElement('div');
     downloadbtn.innerHTML = "<button id='download_btn' class='download-btn'>Download</button>";
     document.body.append(downloadbtn);
 
     const download_btn = document.getElementById('download_btn').addEventListener("click", (e)=>{
         const container_info = document.getElementById('container_info');
 
         let options = {
             margin: [0,-3,0,-3], //top, left, buttom, right, 
             filename: 'FutureInvestmentValue(Daily).pdf', //creates the file name
             image: {type: 'jpeg', quality:0.98}, //set the type of file and quality
             html2canvas: {scale:2},
             jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
         }
     
         html2pdf().set(options).from(container_info).save(); //uploads the 'container_info' to the user's computer.
 
         document.body.removeChild(downloadbtn); //removes the download button so we don't get duplications if the users calculates again.
     });
});
function toggle(){
    let body_element = document.body;
    body_element.classList.toggle("dark-mode-background");

    //let list_items = document.getElementsByTagName("a");
    //list_items.classList.toggle("hover-link-dark");
    document.linkColor="white";
    //document.getElementsByClassName('main-nav').style.color = "white";
    //links.classList.toggle("hover-link-dark");


}