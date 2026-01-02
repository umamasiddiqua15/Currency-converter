async function convert() {

    let a = document.getElementById("amount");
    let amount = a.value;

    const f = document.getElementById("fromCurrency");
    const from = f.value;

    const t = document.getElementById("toCurrency");
    const to = t.value;

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount");
    }

    try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await res.json();
        const rate = data.rates[to];
        const result = (amount * rate).toFixed(2);

        document.getElementById("result").innerText =`${amount} ${from} = ${result} ${to}`;
    } 
    catch (error) {
        console.error(error);
        alert("Error fetching exchange rate.");
    }
}