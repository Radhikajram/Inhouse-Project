function populate(s1)
{
    
    var selectionValue = document.getElementById(s1)
    
    if (selectionValue.value =="savingsdetails")
    {
        
        var savingsClass = document.getElementsByClassName("SB")

          for (var i = 0; i < savingsClass.length; i++ ) 
          {
            savingsClass[i].style.visibility = "visible";
         }

        var spendingClass = document.getElementsByClassName("SP")
        for (var i = 0; i < spendingClass.length; i++ ) 
          {
            spendingClass[i].style.visibility = "hidden";
         }

      }
          
    
    if (selectionValue.value =="spendingdetails")
    {
      
      
       var savingsClass = document.getElementsByClassName("SB")

       for (var i = 0; i < savingsClass.length; i++ ) 
       {
        savingsClass[i].style.visibility = "hidden";
       }

       var spendingClass = document.getElementsByClassName("SP")
       for (var i = 0; i < spendingClass.length; i++ ) 
         {
           spendingClass[i].style.visibility = "visible";
        }
    }
}
function fixedDeposit()
{
  window.open("deposits.html",'_self',false)
}
