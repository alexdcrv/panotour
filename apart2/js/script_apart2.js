
//cointeiner for panorama viewer
const container = document.querySelector('#container');

//points
//////////////////
const points = document.querySelectorAll('.point')


const point = document.getElementById("1")
//
const point2 = document.getElementById("2")

//3 toilet / 2 bedroom /  4 kitchen / 1 hall / 5
// const point3 = document.getElementById("3")
// const point4 = document.getElementById("4")
//////////////////////////////////////////////
//PANORAMA


const panorama2  = new PANOLENS.ImagePanorama('assets/1_bath.jpg'); //kitchen
const pano  = new PANOLENS.ImagePanorama('assets/1_hall.jpg'); //hall

//const panorama  = new PANOLENS.ImagePanorama('assets/kitchen.jpg'); //kitchen
// const panorama3  = new PANOLENS.ImagePanorama('assets/1_bath.jpg'); //toilet
// const panorama4  = new PANOLENS.ImagePanorama('assets/1_bed.jpg'); //bedroom





//from hall
pano.link( panorama2, new THREE.Vector3(-3000, 0,-1000));
// pano.link(panorama3, new THREE.Vector3(3000.48, 0, -500) );
// pano.link(panorama4, new THREE.Vector3(2000.48, 0, 2000) );


//kitchen
panorama2.link( pano, new THREE.Vector3(-2000, 0, 0));
//toilet

// panorama4.link( pano, new THREE.Vector3(0, 0, -3100));
// panorama3.link( pano, new THREE.Vector3(1500, 0, 3100));

//guest




//viewer
const viewer = new PANOLENS.Viewer({
    container: container,
    autoHideInfospot: false,
    
})

viewer.OrbitControls.noZoom = true; // Disable scrollwheel zoom
viewer.OrbitControls.maxFov = 50; // Set max zoom
viewer.getControl().rotateSpeed *= 2; // rotation speed
viewer.getControl().momentumScalingFactor *= 0.3; // inertia/spring after drag



//panorama event listener 
//hall
pano.addEventListener('enter', () => {
    footInfo.innerHTML = "Комната"
    viewer.panorama.rotation.y = 0;
    
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point.classList.add('pointH')
})




//kitchen

panorama2.addEventListener('enter', () => {
    footInfo.innerHTML = "Санузел"
    viewer.panorama.rotation.y = 0;
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point2.classList.add('pointH')

})



//////////////////////////////////////////////////////////
//toilet
// panorama3.addEventListener('enter', () => {
//     footInfo.innerHTML = "С/у"
//     viewer.panorama.rotation.y = 0;
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point3.classList.add('pointH')

// })




/////////////////////////////////////////////////////////// bedroom
// panorama4.addEventListener('enter', () => {
//     footInfo.innerHTML = "Зал"
//     viewer.panorama.rotation.y = 0;
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point4.classList.add('pointH')

// })




///////////////////////////////////////////////////// guestroom



/////////////////////////////////////////////////////////////
//ADD CUSTOM PANORAMA LINKING TO MAP
///////////////////////////////////////

point.onclick = () => {
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point.classList.add('pointH')
    viewer.setPanorama(pano)

}


point2.onclick = () => {
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point2.classList.add('pointH')
    viewer.setPanorama(panorama2)

}


// point3.onclick = () => {
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point3.classList.add('pointH')
//     viewer.setPanorama(panorama3)

// }

// point4.onclick = () => {
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point4.classList.add('pointH')
//     viewer.setPanorama(panorama4)

// }





//////////////////////////////
//CUSTOM LINK FOOTER
////////////////////////
let footInfo = document.getElementById('footerContent');


///////////////////////////
const foot1 = document.getElementById('room1')
// const foot2 = document.getElementById('room2')
// const foot3 = document.getElementById('room3')
const foot4 = document.getElementById('room4')
////////////////
//hall
foot1.onclick = () => { 
    viewer.setPanorama(pano)
    footInfo.innerHTML = "Комната"
}
foot1.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Комната"
})





//guest
// foot2.onclick = () => { 
//     // viewer.setPanorama(panorama3)
//     footInfo.innerHTML = "С/у"
// }
// foot2.addEventListener('mouseover', () => {
//     footInfo.innerHTML = "С/у"
// })


// //////////////room
// foot3.onclick = () => { 
//     viewer.setPanorama(panorama4)
//     footInfo.innerHTML = "Зал"
// }
// foot3.addEventListener('mouseover', () => {
//     footInfo.innerHTML = "Зал"
// })





//kitchen
foot4.onclick = () => { 
    viewer.setPanorama(panorama2)
    footInfo.innerHTML = "Санузел"
}
foot4.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Санузел"
})






/////////////////////////////////////

viewer.add( pano, panorama2 );



///////////////rotation 
let rotationIcon = document.getElementById('rotate');
let rotate = false;
rotationIcon.onclick = () => {
    if(rotate == false){
        rotate = true
    } else {
        rotate = false;
    }
}
viewer.addUpdateCallback(() =>{
    if(rotate){
        
        viewer.panorama.rotation.y -= 0.001;
    } else {
       
    }
    
    
    
});


/////////////////////////////////////// footer
let bottom = document.getElementById('bottomInfo');
let icon = document.getElementById("icon");
let footer = document.getElementById("footer");
let footerI = document.getElementById('footerI')




footer.addEventListener('click', () => {
    if(icon.className === 'fas fa-arrow-up' ){
        bottom.classList.add("expand")
        footer.classList.add("new")
        footerI.classList.add('new')
        icon.className = "fas fa-arrow-down"
    } else{
        icon.className = "fas fa-arrow-up"
        bottom.classList.remove("expand")
        footer.classList.remove("new")
        footerI.classList.remove('new')
    }
})




//header 
let header = document.getElementById('header');
let headerArrow = document.getElementById('iconUP')
let expandHeader = document.getElementById('info')

header.addEventListener('click', () => {
    if(headerArrow.className === 'fas fa-arrow-down'){
        
        expandHeader.classList.add('infoExpand')
        headerArrow.className = 'fas fa-arrow-up'
    } else { 
        expandHeader.classList.remove('infoExpand')
        headerArrow.className = 'fas fa-arrow-down'
    }
})

//header, links to another apartment page

let expItems = document.querySelectorAll('.exp_item')





//show plan

let plan = document.getElementById('plan')
let map = document.getElementById('map2')

plan.onclick = () =>{
    map.classList.toggle('map')
}

map.onclick = () => {
    setTimeout(function(){map.classList.remove('map');}, 1500);
}



const apart1  = document.getElementById('1k')

apart1.onclick = function(){
    window.location ="../apart1/1room1.html"
}


const apart2  = document.getElementById('2k')

apart2.onclick = function(){
    window.location ="../apart2/1room2.html"
}


const apart3  = document.getElementById('3k')

apart3.onclick = function(){
    window.location ="../apart3/2room1.html"
}




const apart4  = document.getElementById('4k')

apart4.onclick = function(){
    window.location ="../apart4/2room2.html"
}
