function para()
{
    inputs = [];
    for (var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para_in" +i).value);   
    }
   inputs.join(". ") 
    document.getElementById("first").innerHTML=inputs.join(". ");
}
