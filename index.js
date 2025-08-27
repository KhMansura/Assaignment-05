let heartCount = 0;
let coinCount = 100;

// navbar feature

const heartAct = document.getElementById("heart-count");
const coinAct = document.getElementById("coin-count")

// history
const history = document.getElementById("history-list")
const clearHistory = document.getElementById("clear-history")

// heart
const heartBtn = document.querySelectorAll(".heart-btn")

for(let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener("click", function () {
    heartCount++;
    heartAct.innerText = heartCount;
  })
}

// call
const callBtn = document.querySelectorAll(".call-btn");

for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener("click", function () {
    const card = this.closest(".card")
    const serviceName = card.querySelector(".service-name").innerText
    const serviceNumber = card.querySelector(".service-number").innerText

    if (coinCount < 20) {
      alert("❌ You do not have enough coins. to make a call you need at least 20 coins.");
      return;
    }

    coinCount -= 20;
    coinAct.innerText = coinCount
    alert( "📞 Calling " + serviceName + " at " + serviceNumber + "...")
// Add to history
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();
    // li.innerText = `${serviceName}  ${serviceNumber} ${time}`;
    // history.appendChild(li);
     li.className = "bg-gray-100 rounded-lg px-4 py-2 mb-2 flex justify-between items-start"
    
    const left = document.createElement("div");
    left.innerHTML=`
    <span class="font-semibold text-gray-800">${serviceName}</span><br>
    ${serviceNumber}
    `
    const right = document.createElement("span")
    right.className = "text-sm"
    right.innerText = time;

    li.appendChild(left)
    li.appendChild(right)
    document.getElementById("history-list").appendChild(li);
  });
}



// Clear History
clearHistory.addEventListener("click", function () {
  history.innerHTML = "";
}) 

// copy button
let copyCount = 0;
const copyAct = document.querySelectorAll("copy-count")

const copyBtn = document.querySelectorAll(".copy-btn");

for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].addEventListener("click", function () {
    const card = this.closest(".card");
    const serviceNumber = card.querySelector(".service-number").innerText;

    navigator.clipboard.writeText(serviceNumber)
      .then(() => {
        copyCount++;
        copyAct.innerText = copyCount;
        alert(`Number Copied ${serviceNumber}`);
      })

    })
}
