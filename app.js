const TodayCost = document.getElementById("todayCost");
const TotalBalance = document.getElementById("total-balance");
const inputAddCost = document.getElementById("input-cost");
const inputAddBalance = document.getElementById("input-balance")
const TotalCost = document.getElementById("TotalCost");




const addCost = document.getElementById("addCost");
const addMoney  = document.getElementById("addMoney");


addCost.addEventListener('click',function () {
   const TodayCostadd =Number (TodayCost.innerText);
   const inputAddCostValue = Number(inputAddCost.value);
   const total = TodayCostadd + inputAddCostValue;
   TodayCost.innerText = total;
   TotalCost.innerText =Number(TotalCost.innerText) + inputAddCostValue;
   TotalBalance.innerText =Number(TotalBalance.innerText) - Number(TotalCost.innerText);
   // if () {
      
   // }

   inputAddCost.value = ''
})
addMoney.addEventListener('click',function () {
   const TotalBalanceadd =Number(TotalBalance.innerText);
   const inputAddBalanceValue = Number(inputAddBalance.value);
   const total = TotalBalanceadd + inputAddBalanceValue;
   TotalBalance.innerText = total;
   inputAddBalance.value = ''
   
})
// document.getElementById("TotalCost").innerText = totalWithDraw - total  ;



// addCost.addEventListener('click',function () {
//    TodayCost.innerText = inputAddCost.value;
//    inputAddCost.value="";
// })
// addMoney.addEventListener('click',function () {
//    withDraw.innerText = inputAddMoney.value;
//    inputAddMoney.value="";
// })