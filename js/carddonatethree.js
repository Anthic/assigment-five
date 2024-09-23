document.getElementById('three-btn')
    .addEventListener('click', function(event){

            // remove page load problem
            event.preventDefault()
            //take input field
            let threeCardInputValue = parseFloat(document.getElementById('three-card-input').value);
            // card balance input
            let threeCardBalance = parseFloat(document.getElementById('three-card-balance').innerText);
            //total balance
            let threetotalBalance= parseFloat(document.getElementById('total-amount').innerText);
            // validation start here

        if (threeCardInputValue < threetotalBalance &&  threeCardInputValue>0 ) {
            //calculation
            let threetotalDonate= parseFloat(threeCardBalance+threeCardInputValue);
            console.log(threetotalDonate);
            document.getElementById('three-card-balance').innerText=threetotalDonate.toFixed(2);

            let accountSubthree= parseFloat(threetotalBalance-threeCardInputValue);
            console.log(accountSubthree);
            document.getElementById('total-amount').innerText= accountSubthree.toFixed(2);
            document.getElementById('three-card-input').value='';
        }else{
            alert('Please!!! Donate Valid Amount 😢');
            document.getElementById('three-card-input').value='';
        };

               //history part
        const historyDetails= document.createElement('div');
        historyDetails.className=
        "bg-white border-2 rounded-lg border-[#1111114D] py-5 px-7";

        historyDetails.innerHTML=`
            <p class="font-bold text-textColor text-xl">${threeCardInputValue.toFixed(2)}Donate for Flood Relief in Feni,Bangladesh</p>
            <p class="font-semibold text-anotherColor text-md">${new Date().toLocaleDateString()}</p>
        `;
        console.log(historyDetails);
        const historyList= document.getElementById('history-list');
        historyList.insertBefore(historyDetails,historyList.firstChild)
            
    
})