const loadPhone =async ()=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url)
    const data = await res.json()
    displayPhone(data.data);
}
const displayPhone = (phones) =>{
    for(const phone of phones){
        console.log(phone);
        const phoneContainer = document.getElementById('card-container');
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
        <div class="card p-2">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Brand: ${phone.phone_name}</h4>
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        phoneContainer.appendChild(newDiv);
    }
    
}

loadPhone()