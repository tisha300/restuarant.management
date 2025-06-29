document.getElementById("orderForm").addEventListener("submit",function(event){
    event.preventDefault();

    const name=document.getElementById("name").value;

    const food=document.getElementById("foodItem").value;
    const quantity=document.getElementById("quantity").value;

    const result=`Thank you,${name}! You have ordered ${quantity} ${food}(s).We will contact you soon.`;

    document.getElementById("orderResult").textContent=result;

    //Optionally reset the form

    this.reset();
});