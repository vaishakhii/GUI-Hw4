/**
 Name: Vaishakhi Patel, vpatel@cs.uml.edu
 Computer Science Department, UMass Lowell
 Comp.4610, GUI Programming I
 File:
 Created: 09-Nov-2017
 Last updated by VP: 12-Nov-2017 23:00
 **/

$(document).ready(function(){

    
        document.getElementById("btn_create_table").onclick = function() {create_table()};
        function create_table(){
           // reading variables
           var price_start_value = Number(document.getElementById("price_start_value").value);
                  
           var price_end_value  = Number(document.getElementById("price_end_value").value);
                  
           var mpg_start_value = Number(document.getElementById("mpg_start_value").value);
                  
           var mpg_end_value = Number(document.getElementById("mpg_end_value").value);
                  
           if (isNaN(price_start_value) || price_start_value=="" ||
                isNaN(price_end_value) || price_end_value=="" ||
                isNaN(mpg_start_value) || mpg_end_value ==""){
                alert("Enter Valid Inputs");
            }
                  
           if (price_start_value > price_end_value || mpg_start_value > mpg_end_value) {
                  alert("Error the starting value must be less than the ending value");
            }
                  
           if(price_start_value < 10000)
           
           var col = price_start_value;

           var tableData = "<table id = 'display'>";
                  
                  for (var row = mpg_start_value; row <= mpg_end_value; row = row + 10) {
                  
                  if (row === mpg_start_value && col === price_start_value) {
                  tableData += "<td>Price / Fuel Consumption</td>";
                  
                  for (col; col <= price_end_value; col += 10000) {
                  tableData += "<td id = 'rowHeader'>" + col + "</td>"; //Outputs the column values
                  }
                  tableData += "<tr>";
                  }
                  tableData += "<td id = 'colHeader'>" + row + "</td>"; //Outputs the header row values
                  
                  for (col = price_start_value; col <= price_end_value;  col += 10000) {
                  tableData += "<td class = 'cells'>" + calculate_cell(row , col) + "</td>"; //Fills in the cells with the evaluated $/mile and $/month
                  }
                  tableData += "</tr>";
                  }
                  tableData += "</table>";
                  
                  document.getElementById("table").innerHTML = tableData; //Dynamically displays the table out in the in the HTML document
                  return false;
                  
           
           
        }



        function cal_per_total_cost(msrp,incentive,down_pay_rate,interest_rate){

           Actual_cost = msrp - incentive;
           Down_payment_cost = (down_pay_rate * Actual_cost) / 100;
           Left_Actual_cost_pay = Actual_cost - Down_payment_cost;
      
           Interest_on_actual_cost = (Left_Actual_cost_pay * interest_rate) /100;
           Final_price = Interest_on_actual_cost + Left_Actual_cost_pay;

           return Final_price;
        }

                  
        function calculate_cell(mpg, price){
                  
            var miles_driven = ($("#miles_driven").val());
                  
            var months = ($("#months").val()).trim();
                  
            var down_payment = ($("#down_payment").val()).trim();
                  
            var interest = ($("#interest").val()).trim();
                  
            var incentives = ($("#incentives").val()).trim();
                  
            var gallon_price = ($("#gallon_price").val()).trim();
                  
            if (isNaN(miles_driven) || miles_driven=="" ||
                isNaN(months) || months =="" ||
                isNaN(down_payment) || down_payment=="" ||
                isNaN(interest) || interest=="" ||
                isNaN(incentives) || incentives=="" ||
                isNaN(gallon_price) || gallon_price==""){
                alert("Enter Valid Inputs");
            }
                  
            var price_per_gallon = cal_price_per_gallon(gallon_price, mpg);
                  
            var dollars = cal_per_total_cost(price, incentives, down_payment, interest);
                  
            var cost_per_mile = price_per_gallon + (dollars/miles_driven);
                  
            var cost_per_month = price_per_gallon + (dollars / months);
                  
            var cell = "$/mile: " + Number((cost_per_mile).toFixed(2)) + "  " + "$/month: " + Number((cost_per_month).toFixed(2));
                  
            return cell;

        }
                  
        function cal_price_per_gallon(gallon_price, miles_per_gallon){
                  
            var price_per_gallon = gallon_price/miles_per_gallon;
                  
            return price_per_gallon;
        }
    
});
