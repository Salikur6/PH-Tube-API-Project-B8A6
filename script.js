

// All Cetagory btn access ---------
const allBtnId = document.getElementById('all-btn');
const musicBtnId = document.getElementById('music-btn');
const comedyBtnId = document.getElementById('comedy-btn');
const drawingBtnId = document.getElementById('drawing-btn');


const allBtn = ()=>{
    allBtnId.classList.add('active');
    musicBtnId.classList.remove('active')
    comedyBtnId.classList.remove('active')
    drawingBtnId.classList.remove('active')
}

const musicBtn=()=>{
    allBtnId.classList.remove('active');
    musicBtnId.classList.add('active')
    comedyBtnId.classList.remove('active')
    drawingBtnId.classList.remove('active')
}

const comedyBtn =()=>{
    allBtnId.classList.remove('active');
    musicBtnId.classList.remove('active')
    comedyBtnId.classList.add('active')
    drawingBtnId.classList.remove('active')
}

const drawingBtn = ()=>{
    allBtnId.classList.remove('active');
    musicBtnId.classList.remove('active')
    comedyBtnId.classList.remove('active')
    drawingBtnId.classList.add('active')
}






