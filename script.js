function compute()
{
    // get values entered
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // calculate values needed
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseInt(interest);
    var year = new Date().getFullYear() + parseInt(years);

    // append HTML to page showing results
    document.getElementById("result").innerHTML = "If you deposit \<span class=\"highlite\"\>" +
        principal + "\<\/span\>, \<br\> at an interest rate of \<span class=\"highlite\"\>" + rate +
        "\<\/span\>%\<br\>You will receive an amount of \<span class=\"highlite\"\>" + amount +
        "\<\/span\>,\<br\>in the year \<span class=\"highlite\"\>" + year + "\<\/span\>\<br\>"
}

function updateRate()
{
    // update rate next to element so users know what value they have selected
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function checkPrincipal()
{
    // select the principal DOM elemenet
    var principal = document.getElementById("principal");

    // check its value
    if (principal.value <= 0) {
        alert("Enter a positive number")
        principal.focus(); // Set focus to principal input
        return false; 
    }
    return true;
}