document.getElementById('card-one-btn')
    .addEventListener('click', function(event){

            // remove page load problem
            event.preventDefault()
            //take input field
            let oneCardInputValue = parseFloat(document.getElementById('one-card-input').value);
            // card balance input
            let oneCardBalance = parseFloat(document.getElementById('one-card-balance').innerText);
            //total balance
            let totalBalance= parseFloat(document.getElementById('total-amount').innerText);
            // validation start here

        if (oneCardInputValue < totalBalance &&  oneCardInputValue>0 ) {
            //calculation
            let totalDonate= parseFloat(oneCardBalance+oneCardInputValue);
            console.log(totalDonate);
            document.getElementById('one-card-balance').innerText=totalDonate.toFixed(2);

            let accountSub= parseFloat(totalBalance-oneCardInputValue);
            console.log(accountSub);
            document.getElementById('total-amount').innerText= accountSub.toFixed(2);
            document.getElementById('one-card-input').value='';
            // modal part start here
            document.getElementById('my-modal').checked = true; 
            //  Close the modal when clicking outside of it
                    const modal = document.querySelector('.modal');
                    modal.addEventListener('click', function(event) {
                        if (event.target === modal) {
                            document.getElementById('my-modal').checked = false; 
                        }
                    });
        }else{
            alert('Please!!! Donate Valid Amount 😢');
            document.getElementById('one-card-input').value='';
        }

        //history part
        const historyDetails= document.createElement('div');
        historyDetails.className=
        "bg-white border-2 rounded-lg border-[#1111114D] py-5 px-7 my-3";

        historyDetails.innerHTML=`
            <p class="font-bold text-textColor text-xl">${oneCardInputValue.toFixed(2)}Taka is Donated for famine-2024 at Noakhali,Bangladesh</p>
            <p class="font-semibold text-anotherColor text-md">${new Date().toLocaleDateString()}</p>
        `;
        console.log(historyDetails);
        const historyList= document.getElementById('history-list');
        historyList.insertBefore(historyDetails,historyList.lastChild)
            
    
})