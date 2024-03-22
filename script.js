const cardsContainer = document.getElementById('cards-container');
const btnContainer = document.getElementById('btn-container');

// // All Cetagory btn access ---------
// const allBtnId = document.getElementById('all-btn');
// const musicBtnId = document.getElementById('music-btn');
// const comedyBtnId = document.getElementById('comedy-btn');
// const drawingBtnId = document.getElementById('drawing-btn');


// fetch all videos api ----------------

const categoryId = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const info = data.data;
    // console.log(info)
    displayCards(info)
}


const allVideos =async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const data = datas.data;
    console.log(data);
    // displayCards(data)
    loadCategories(data)
}



const loadCategories = (data)=>{
    console.log(data)
    
    categoryId(1000)
    data.forEach(d =>{
        console.log(d.category)
        const btn = document.createElement('button');
        btn.classList = `btn btn-goast text-lg font-semibold mr-5 hover:bg-auto focus:bg-red-600`
        btn.innerText = d.category;
        btnContainer.appendChild(btn)
        console.log(btn.innerText)

        

        console.log()

        btn.addEventListener('click', function(){
            categoryId(d.category_id);

        })
    })

}








const displayCards = (data)=>{


    cardsContainer.textContent= ''
    data.forEach(d=>{
        // console.log(d)
        console.log(data)

        const {authors, category_id, others, thumbnail, title}= d;
        // console.log(authors[0]?.verified)


        const div = document.createElement('div');

        div.innerHTML=`
        
        <figure><img class="mb-5 h-[200px] w-full rounded-lg"
                src="${thumbnail}" alt="Shoes" />
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


