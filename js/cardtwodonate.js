document.getElementById('two-btn')
    .addEventListener('click', function(event){

            // remove page load problem
            event.preventDefault()
            //take input field
            let twoCardInputValue = parseFloat(document.getElementById('two-card-input').value);
            // card balance input
            let twoCardBalance = parseFloat(document.getElementById('two-card-balance').innerText);
            //total balance
            let twototalBalance= parseFloat(document.getElementById('total-amount').innerText);
            // validation start here

        if (twoCardInputValue < twototalBalance &&  twoCardInputValue>0 ) {
            //calculation
            let twototalDonate= parseFloat(twoCardBalance+twoCardInputValue);
            console.log(twototalDonate);
            document.getElementById('two-card-balance').innerText=twototalDonate.toFixed(2);

            let accountSubtwo= parseFloat(twototalBalance-twoCardInputValue);
            console.log(accountSubtwo);
            document.getElementById('total-amount').innerText= accountSubtwo.toFixed(2);
            document.getElementById('two-card-input').value='';
        }else{
            alert('Please!!! Donate Valid Amount 😢');
            document.getElementById('two-card-input').value='';
        }
            
    
})