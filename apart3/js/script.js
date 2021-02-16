
//cointeiner for panorama viewer
const container = document.querySelector('#container');

//points
//////////////////
const points = document.querySelectorAll('.point')


const point = document.getElementById("1")

//
const point4 = document.getElementById("2")

//
const point3 = document.getElementById("5")
const point2 = document.getElementById("3")
const point5 = document.getElementById("4")
// const point6 = document.getElementById("6")
// const point7 = document.getElementById("7")


//////////////////////////////////////////////
//PANORAMA

const pano  = new PANOLENS.ImagePanorama('asset/3k_corridor.jpg'); //hall
const panorama2  = new PANOLENS.ImagePanorama('asset/3k_kitchen.jpg'); //kitchen
const panorama3  = new PANOLENS.ImagePanorama('asset/3k_bath.jpg'); //toilet
const panorama4  = new PANOLENS.ImagePanorama('asset/3k_bedroom.jpg'); //bedroom
const panorama5  = new PANOLENS.ImagePanorama('asset/3k_hall.jpg'); //зал
// const panorama6  = new PANOLENS.ImagePanorama('asset/1_bad-min.jpg'); //зал
// const panorama7  = new PANOLENS.ImagePanorama('asset/2_hall-min.jpg'); //зал



// 3 - зал //5 ce

//from hall
// pano.link( panorama2, new THREE.Vector3(-900.48, 0, 3500));
pano.link( panorama3, new THREE.Vector3(-2100, 0, 300) );
pano.link( panorama2, new THREE.Vector3(-1000, 0, -2300) );
pano.link( panorama5, new THREE.Vector3(4500, 0, 0) );
pano.link( panorama4, new THREE.Vector3(2800, 0, -1100) );

//hall 2
// panorama7.link( panorama3, new THREE.Vector3(-4100.48, 0, -500) );
// panorama7.link( panorama5, new THREE.Vector3(4000, 0, -500) );
// panorama7.link( panorama4, new THREE.Vector3(300, 0, -2000) );
// panorama7.link( pano, new THREE.Vector3(4500, 0, 1000) );
// panorama7.link( panorama6, new THREE.Vector3(-2000, 0, 4500) );






//kitchen
panorama2.link( pano, new THREE.Vector3(-2700, 0, 2200));
//toilet
panorama3.link( pano, new THREE.Vector3(-2000, 0, -200));
//room
panorama4.link( pano, new THREE.Vector3(-2000, 0, -300));
//guest
panorama5.link( pano, new THREE.Vector3(-1000, 0, -2000));

// panorama6.link( panorama7, new THREE.Vector3(-2000, 0, 2000));



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
    footInfo.innerHTML = "Прихожая"
    viewer.panorama.rotation.y = 0;
    
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point.classList.add('pointH')
})




//kitchen

panorama2.addEventListener('enter', () => {
    footInfo.innerHTML = "Кухня"
    viewer.panorama.rotation.y = 0;
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point2.classList.add('pointH')

})



//////////////////////////////////////////////////////////
//toilet
panorama3.addEventListener('enter', () => {
    footInfo.innerHTML ="Санузел"
    viewer.panorama.rotation.y = 0;
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point3.classList.add('pointH')

})




/////////////////////////////////////////////////////////// bedroom
panorama4.addEventListener('enter', () => {
    footInfo.innerHTML = "Спальня"
    viewer.panorama.rotation.y = 0;
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point4.classList.add('pointH')

})




///////////////////////////////////////////////////// guestroom

panorama5.addEventListener('enter', () => {
    footInfo.innerHTML = "Зал"
    viewer.panorama.rotation.y = 0;
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point5.classList.add('pointH')

})



// panorama6.addEventListener('enter', () => {
//     footInfo.innerHTML = "Спальня"
//     viewer.panorama.rotation.y = 0;
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point6.classList.add('pointH')

// })

// panorama7.addEventListener('enter', () => {
//     footInfo.innerHTML = "Коридор"
//     viewer.panorama.rotation.y = 0;
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point7.classList.add('pointH')

// })


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


// point7.onclick = () => {
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point7.classList.add('pointH')
//     viewer.setPanorama(panorama7)

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
// const foot6 = document.getElementById('room6')
// const foot7 = document.getElementById('room7')

////////////////
//hall
foot1.onclick = () => { 
    viewer.setPanorama(pano)
    footInfo.innerHTML = "Прихожая"
}
foot1.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Прихожая"
})





//guest
foot2.onclick = () => { 
    viewer.setPanorama(panorama5)
    footInfo.innerHTML = "Зал"
}
foot2.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Зал"
})


//////////////room
foot3.onclick = () => { 
    viewer.setPanorama(panorama4)
    footInfo.innerHTML = "Спальня"
}
foot3.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Спальня"
})





//kitchen
foot4.onclick = () => { 
    viewer.setPanorama(panorama2)
    footInfo.innerHTML = "Кухня"
}
foot4.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Кухня"
})




//////////////toilet
foot5.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Санузел"
})

foot5.onclick = () => { 
    viewer.setPanorama(panorama3)
    footInfo.innerHTML = "Санузел"
}

// foot6.addEventListener('mouseover', () => {
//     footInfo.innerHTML = "Холл"
// })

// foot6.onclick = () => { 
//     viewer.setPanorama(panorama7)
//     footInfo.innerHTML = "Холл"
// }

// foot7.addEventListener('mouseover', () => {
//     footInfo.innerHTML = "Спальня"
// })
// foot7.onclick = () => { 
//     viewer.setPanorama(panorama6)
//     footInfo.innerHTML = "Спальня"
// }
/////////////////////////////////////

viewer.add( pano, panorama2, panorama3, panorama4, panorama5 );



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
//footer body 
//events to close expand forms


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






const apart2  = document.getElementById('1k')

apart2.onclick = function(){
    window.location ="../apart2/1kk.html"
}


const apart3  = document.getElementById('2k')

apart3.onclick = function(){
    window.location ="../apart1/2kk.html"
}




const apart4  = document.getElementById('3k')

apart4.onclick = function(){
    window.location ="../apart3/3kk.html"
}






