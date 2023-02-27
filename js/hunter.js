const loadPhone =async (inputValue,dataLimit)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhone(data.data,dataLimit);
}
const displayPhone = (phones,dataLimit) =>{
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.innerText = ''
    // Thts's means when You will Search new Data,Then Remove Old Data.

    // display show only 10 phoens
    const showALL = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0,10)
        showALL.classList.remove('d-none')
    }
    else{
        showALL.classList.add('d-none')
    }

    // display nai Interface

    const notFound = document.getElementById('not-found');
    if(phones.length ===0){
        notFound.classList.remove('d-none')
    }
    else{
        notFound.classList.add('d-none')
    }

    // display show 
    for(const phone of phones){
        // console.log(phone);
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
        `;
        
        phoneContainer.appendChild(newDiv);
    }
}
// stop laoder
loadPhone(false)

const processerSearch = (dataLimit) =>{
    isloading(true);
    const inputValueElement = document.getElementById('search-filed');
    const inputValue = inputValueElement.value;
    loadPhone(inputValue,dataLimit);
}

document.getElementById('search-btn').addEventListener('click', function(){
    // loader start
    processerSearch(10)
})

const isloading = (loading)=>{
    const loaderSection = document.getElementById('loader');
    if(loading===true){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

// show all btn
document.getElementById('show-all-btn').addEventListener('click', function(){
    processerSearch();
})
loadPhone();