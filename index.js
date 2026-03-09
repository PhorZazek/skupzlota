async function getPrice(){
    try{
        const response = await fetch("https://phorzazek.pythonanywhere.com/gold_price/");
    
        if (!response.ok){
            throw new Error("HTTP error: " + response.status);
        }
        const data = await response.json();
        const value1 = document.getElementById("value1");
        const value2 = document.getElementById("value2");
        const value3 = document.getElementById("value3");
        let multiplier;

        if(value1.checked){multiplier = 1}
        else if(value2.checked){multiplier = 0.9}
        else if(value3.checked){multiplier = 0.8}
        else {multiplier = 0}

        console.log(data.cena);
        document.getElementById("price333").innerText = `${(data.cena * 0.333 * multiplier).toFixed(2)}`
        document.getElementById("price375").innerText = `${(data.cena * 0.375 * multiplier).toFixed(2)}`
        document.getElementById("price417").innerText = `${(data.cena * 0.417 * multiplier).toFixed(2)}`
        document.getElementById("price500").innerText = `${(data.cena * 0.500 * multiplier).toFixed(2)}`
        document.getElementById("price585").innerText = `${(data.cena * 0.585 * multiplier).toFixed(2)}`
        document.getElementById("price750").innerText = `${(data.cena * 0.750 * multiplier).toFixed(2)}`
        document.getElementById("price900").innerText = `${(data.cena * 0.900 * multiplier).toFixed(2)}`
        document.getElementById("price999").innerText = `${(data.cena * 0.999 * multiplier).toFixed(2)}`
    }
    catch(error){
        console.error("Something goes wrong: ", error);
    }
    
}


const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
    dropdownMenu.classList.toggle('hidden');
});