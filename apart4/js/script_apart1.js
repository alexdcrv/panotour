
//cointeiner for panorama viewer
const container = document.querySelector('#container');

//points
//////////////////
const points = document.querySelectorAll('.point')


const point = document.getElementById("1")
const point2 = document.getElementById("2")
const point5 = document.getElementById("3")
const point6 = document.getElementById("4")
const point3 = document.getElementById("5")
const point4 = document.getElementById("6")


//////////////////////////////////////////////
//PANORAMA


const panorama  = new PANOLENS.ImagePanorama('asset/2k_corr.jpg'); //corridor
const panorama2  = new PANOLENS.ImagePanorama('asset/2k_bath.jpg'); //bath
const panorama3  = new PANOLENS.ImagePanorama('asset/2k_corr2.jpg'); //corridor2
const panorama4  = new PANOLENS.ImagePanorama('asset/2k_hall.jpg'); //room
const panorama5  = new PANOLENS.ImagePanorama('asset/2k_kitchen.jpg'); //kitch






//from corr1
panorama.link( panorama2, new THREE.Vector3(4200, 0, 2000));//to bath
panorama.link( panorama4, new THREE.Vector3(2500, 0, -400)); //to room
panorama.link( panorama3, new THREE.Vector3(3200, -2000, 1700)); //to corr2



//from bath


// panorama2.link( panorama, new THREE.Vector3(5000, 0, 1000));
panorama2.link( panorama3, new THREE.Vector3(-1500, 0, -1000));//to corridor2
// panorama2.link( panorama3, new THREE.Vector3(-3000, 0, 3000));
// panorama2.link( panorama6, new THREE.Vector3(-3800, 0, -1000)); //to guest






//corr2
panorama3.link( panorama, new THREE.Vector3(-2700, -1600, -1100));//to corr1
panorama3.link( panorama2, new THREE.Vector3(2000, 0, 400));//to bath
panorama3.link( panorama4, new THREE.Vector3(-1700, 0, -2300));//to room
panorama3.link( panorama5, new THREE.Vector3(1700, 0, -2300));//to kitchen
//room



panorama4.link( panorama, new THREE.Vector3(-1800, 0, 1900));//to corr1


//guest
panorama5.link( panorama3, new THREE.Vector3(-1600, 0, 1200));//to corridor2

// panorama6.link( panorama2, new THREE.Vector3(-2200, 0, -500));




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
panorama.addEventListener('enter', () => {
    footInfo.innerHTML = "Прихожая"
    viewer.panorama.rotation.y = 0;
    
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point.classList.add('pointH')
})





//hall 2

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
panorama3.addEventListener('enter', () => {
    footInfo.innerHTML = "Коридор"
    viewer.panorama.rotation.y = 0;
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point3.classList.add('pointH')

})




/////////////////////////////////////////////////////////// bedroom
panorama4.addEventListener('enter', () => {
    footInfo.innerHTML = "Комната"
    viewer.panorama.rotation.y = 0;
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point4.classList.add('pointH')

})




///////////////////////////////////////////////////// guestroom

panorama5.addEventListener('enter', () => {
    footInfo.innerHTML = "Кухня"
    viewer.panorama.rotation.y = 0;
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point5.classList.add('pointH')

})


// panorama6.addEventListener('enter', () => {
//     footInfo.innerHTML = "Гостинная"
//     viewer.panorama.rotation.y = 0;
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point6.classList.add('pointH')

// })


/////////////////////////////////////////////////////////////
//ADD CUSTOM PANORAMA LINKING TO MAP
///////////////////////////////////////

point.onclick = () => {
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point.classList.add('pointH')
    viewer.setPanorama(panorama)

}


point2.onclick = () => {
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point2.classList.add('pointH')
    viewer.setPanorama(panorama2)

}


point3.onclick = () => {
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point3.classList.add('pointH')
    viewer.setPanorama(panorama3)

}

point4.onclick = () => {
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point4.classList.add('pointH')
    viewer.setPanorama(panorama4)

}


point5.onclick = () => {
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point5.classList.add('pointH')
    viewer.setPanorama(panorama5)

}

// point6.onclick = () => {
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point6.classList.add('pointH')
//     viewer.setPanorama(panorama6)

// }


//////////////////////////////
//CUSTOM LINK FOOTER
////////////////////////
let footInfo = document.getElementById('footerContent');


///////////////////////////
const foot1 = document.getElementById('room1')
const foot2 = document.getElementById('room2')
const foot3 = document.getElementById('room3')
const foot4 = document.getElementById('room4')
const foot5 = document.getElementById('room5')


////////////////
//hall
foot1.onclick = () => { 
    viewer.setPanorama(panorama)
    footInfo.innerHTML = "Прихожая"
}
foot1.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Прихожая"
})





//guest
foot2.onclick = () => { 
    viewer.setPanorama(panorama5)
    footInfo.innerHTML = "Кухня"
}
foot2.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Кухня"
})


//////////////room
foot3.onclick = () => { 
    viewer.setPanorama(panorama4)
    footInfo.innerHTML = "Комната"
}
foot3.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Комната"
})





//kitchen
foot4.onclick = () => { 
    viewer.setPanorama(panorama2)
    footInfo.innerHTML = "Санузел"
}
foot4.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Санузел"
})




//////////////toilet
foot5.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Коридор"
})

foot5.onclick = () => { 
    viewer.setPanorama(panorama3)
    footInfo.innerHTML = "Коридор"
}

/////////////////////////////////////


// foot6.addEventListener('mouseover', () => {
//     footInfo.innerHTML = "Гостиная"
// })

// foot6.onclick = () => { 
//     viewer.setPanorama(panorama6)
//     footInfo.innerHTML = "Гостиная"
// }

/////////////////////////////////////

viewer.add( panorama, panorama2, panorama3, panorama4, panorama5 );



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


/////////////////////////////////////// css
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

expItems.forEach(item => {
    //window.location ="./apart2/apart2.html"
    item.addEventListener('click', () => {
        console.log(item.getAttribute('value'))
    })
})



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