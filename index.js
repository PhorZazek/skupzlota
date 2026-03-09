async function getPrice(){
    try{
        const response = await fetch("https://phorzazek.pythonanywhere.com/gold_price/");
    
        if (!response.ok){
            throw new Error("HTTP error: " + response.status);
        }
        const data = await response.json();

        console.log(data.cena);
        document.getElementById("price333").innerText = `${(data.cena * 0.333).toFixed(2)}`
        document.getElementById("price375").innerText = `${(data.cena * 0.375).toFixed(2)}`
        document.getElementById("price417").innerText = `${(data.cena * 0.417).toFixed(2)}`
        document.getElementById("price500").innerText = `${(data.cena * 0.500).toFixed(2)}`
        document.getElementById("price585").innerText = `${(data.cena * 0.585).toFixed(2)}`
        document.getElementById("price750").innerText = `${(data.cena * 0.750).toFixed(2)}`
        document.getElementById("price900").innerText = `${(data.cena * 0.900).toFixed(2)}`
        document.getElementById("price999").innerText = `${(data.cena * 0.999).toFixed(2)}`
    }
    catch(error){
        console.error("Something goes wrong: ", error);
    }
    
}
// getPrice();
// document.getElementById("btn1").onclick = getPrice;


const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
    dropdownMenu.classList.toggle('hidden');
});