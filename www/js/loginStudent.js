
document.getElementById("busNum").addEventListener("change", passwordConfirmation);

document.getElementById("accessCode").addEventListener("change", passwordConfirmation);


function passwordConfirmation() {
    var busNum = document.getElementById("busNum").value;
    var accessCode = document.getElementById("accessCode").value;


    if (busNum > 0 && busNum < 23 && accessCode == "barrington") 
    {
     document.getElementById("mySubmit").disabled = false;
    } 
    
    else 
    {
        document.getElementById("mySubmit").disabled = true;
    }

    return true;

}