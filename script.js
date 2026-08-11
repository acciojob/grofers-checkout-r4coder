const getSumBtn = document.createElement("button");

getSumBtn.append("Get Total Price");

document.body.appendChild(getSumBtn);


const getSum = () => {

    const prices = document.querySelectorAll(".price");

    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
        sum += Number(prices[i].innerText);
    }

    const tr = document.createElement("tr");

    const td = document.createElement("td");

    td.innerText = sum;

    tr.appendChild(td);

    document.querySelector("table").appendChild(tr);
};


getSumBtn.addEventListener("click", getSum);