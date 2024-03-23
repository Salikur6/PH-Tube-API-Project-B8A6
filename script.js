const cardsContainer = document.getElementById('cards-container');
const noContainer = document.getElementById('no-content');
const btnContainer = document.getElementById('btn-container');
const sortBtn = document.getElementById('sort-btn');
const loading = document.getElementById('loading');

// // All Cetagory btn access ---------
// const allBtnId = document.getElementById('all-btn');
// const musicBtnId = document.getElementById('music-btn');
// const comedyBtnId = document.getElementById('comedy-btn');
// const drawingBtnId = document.getElementById('drawing-btn');


// fetch all videos api ----------------
let dataDetails;
const categoryId = async (id, isClicked) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const info = data.data;
    
    
    dataDetails = info;
    displayCards(info)
   
}


const allVideos = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const data = datas.data;
    // console.log(data);
    // displayCards(data)
    loadCategories(data)
     loadingFunc(true)
}


const loadCategories = ( data) => {
    // console.log(data)

    categoryId(1000)
    data.forEach(d => {
        // console.log(d.category)
        const btn = document.createElement('button');
        btn.classList = `btn btn-goast text-lg font-semibold mr-5 hover:bg-auto focus:bg-red-600`
        btn.innerText = d.category;
        btnContainer.appendChild(btn)

        console.log()

        btn.addEventListener('click', function (event) {
            categoryId(d.category_id);
            const allBtn = document.querySelectorAll(".btn")
            allBtn.forEach(eachBtn =>{
                eachBtn.classList.remove('active')
            })
            event.target.classList.add('active')


        })
       
    })

}


const displayCards = (data) => {
    console.log()

    console.log(data[0])

    if (data.length === 0) {
        cardsContainer.textContent = ''
        noContainer.innerHTML = `
    
    <div class="flex flex-col items-center my-[150px]">
    <figure><img class="mb-5 w-[140px] h-[140px] rounded-lg"
                            src="images/Icon.png" alt="Shoes" />
                    </figure>

                    <h4 class="font-bold text-4xl">Oops!! Sorry, There is no content here</h4>

    </div>
    
    `
    } else {

        cardsContainer.textContent = ''
        noContainer.textContent=''
        data.forEach(d => {
            // console.log(d)

            const { authors, category_id, others, thumbnail, title } = d;
            // console.log(authors[0]?.verified)
            // console.log(others.posted_date)
            const min = Math.floor(others.posted_date % 3600 / 60);
            
            const hour = Math.floor(others.posted_date / 3600);
            console.log('Sec:',others.posted_date, 'Min:',min, 'Hour:',hour)

            // 3hrs 56 min ago
            const div = document.createElement('div');

            div.innerHTML = `
        
        <figure class="relative"><img class="mb-5 h-[200px] w-full rounded-lg "
                src="${thumbnail}" alt="Shoes" />

                ${others.posted_date ?  `<div class="absolute bottom-3 right-3 inline-block"><p class="text-[10px] text-white p-1 bg-[#171717] rounded">${hour + 'hrs ' + min +'min ago'}</p></div>` : '' }

               
        </figure>

        <div class="">
            <div class="flex items-center mb-2">
                <img class="w-10 h-10 rounded-full mr-3"
                    src="${authors[0]?.profile_picture
                }" alt="">
                <h3 class="font-bold">
                   ${title}
                </h3>
            </div>

            <div class="ml-12">

                <div class="flex mb-[10px]">
                    <p class="mr-2">${authors[0]?.profile_name}</p>
                    <span>
                    ${authors[0].verified ? `<img class="w-5 h-5"
                    src="images/blue_tik.png" alt=""></img>`: ''}
            
                    </span>
                </div>
                <p>${others.views} views</p>

            </div>
        </div>
        
        `
            cardsContainer.appendChild(div)
        })
        
    loadingFunc(false)
    }
}

const sortBtnFunc=()=>{
    // console.log(dataDetails)
    event.target.classList.add('active')
    dataDetails.sort((items1, items2) =>{
        // console.log(items1, items2)

        const views1 = Object.values(items1.others.views);
        const views2 = Object.values(items2.others.views);


        // console.log(views1, views2)
        // console.log(views1.join(""), views2.join(""))
        return parseFloat(views1.join("")) - parseFloat(views2.join(""));
        
        
    })
    dataDetails.sort().reverse()
    loadingFunc(true)
    displayCards(dataDetails)
}


function loadingFunc(isLoading){
    
    if(isLoading){
        loading.classList.remove('hidden')
    }else{

        loading.classList.add('hidden')
    }
    
}


























// const allBtn = ()=>{

//     allBtnId.classList.add('active');
//     musicBtnId.classList.remove('active')
//     comedyBtnId.classList.remove('active')
//     drawingBtnId.classList.remove('active')
// }



// const musicBtn=()=>{

//     allBtnId.classList.remove('active');
//     musicBtnId.classList.add('active')
//     comedyBtnId.classList.remove('active')
//     drawingBtnId.classList.remove('active')
// }



// const comedyBtn =()=>{
//     allBtnId.classList.remove('active');
//     musicBtnId.classList.remove('active')
//     comedyBtnId.classList.add('active')
//     drawingBtnId.classList.remove('active')
// }

// const drawingBtn = ()=>{


//     allBtnId.classList.remove('active');
//     musicBtnId.classList.remove('active')
//     comedyBtnId.classList.remove('active')
//     drawingBtnId.classList.add('active')
// }






allVideos()
// displayCards()


