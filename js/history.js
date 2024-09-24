const historyTab= document.getElementById('historyTab');
const donationTab= document.getElementById('donationTab');

// history button work
 historyTab.addEventListener('click',function(){
    historyTab.classList.add("bg-btnColor");

historyTab.classList.remove('bg-transparent','border-[#1111114D]');

donationTab.classList.remove("bg-btnColor");
donationTab.classList.add(
        "border-2",
        "rounded-lg" ,
        "border-[#1111114D]",
        "text-anotherColor"
    );
   const  mainHidden= document.getElementById("main-part");
   mainHidden.classList.add("hidden");
   document.getElementById("history-main").classList.remove('hidden');
})

donationTab.addEventListener('click',function(){
    donationTab.classList.add(
        "bg-btnColor",
        "rounded-lg",
        "text-lg"
        
    )
    historyTab.classList.remove('bg-btnColor');

    const  mainHidden= document.getElementById("main-part");
    mainHidden.classList.remove("hidden");
    document.getElementById("history-main").classList.add('hidden');
});




