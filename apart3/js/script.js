
//cointeiner for panorama viewer
const container = document.querySelector('#container');

//points
//////////////////
const points = document.querySelectorAll('.point')


const point = document.getElementById("1")
const point2 = document.getElementById("2")
const point3 = document.getElementById("3")
const point4 = document.getElementById("4")
const point5 = document.getElementById("5")
//

// const point5 = document.getElementById("4")
// const point6 = document.getElementById("6")
// const point7 = document.getElementById("7")


//////////////////////////////////////////////
//PANORAMA
const enter = new PANOLENS.ImagePanorama('asset/коридор.jpg')
const pano  = new PANOLENS.ImagePanorama('asset/гостиная.jpg'); //hall
const panorama2  = new PANOLENS.ImagePanorama('asset/кухня.jpg'); //kitchen
const panorama3  = new PANOLENS.ImagePanorama('asset/спальня.jpg'); //toilet
const panorama4  = new PANOLENS.ImagePanorama('asset/санузел.jpg'); //bedroom
// const panorama5  = new PANOLENS.ImagePanorama('asset/3k_hall.jpg'); //зал
// const panorama6  = new PANOLENS.ImagePanorama('asset/1_bad-min.jpg'); //зал
// const panorama7  = new PANOLENS.ImagePanorama('asset/2_hall-min.jpg'); //зал



// 3 - зал //5 ce

//from hall
enter.link( panorama4, new THREE.Vector3(-500.48, 0, 1500));
enter.link( panorama3,      new THREE.Vector3(-3500, 0, -1400) );
enter.link( pano, new THREE.Vector3(-1000, 0, -2000) );
enter.link( panorama2, new THREE.Vector3(-3000, 0, -900) );


//room
pano.link( enter, new THREE.Vector3(-2000, 0, 400) );

//hall 2
// panorama7.link( panorama3, new THREE.Vector3(-4100.48, 0, -500) );
// panorama7.link( panorama5, new THREE.Vector3(4000, 0, -500) );
// panorama7.link( panorama4, new THREE.Vector3(300, 0, -2000) );
// panorama7.link( pano, new THREE.Vector3(4500, 0, 1000) );
// panorama7.link( panorama6, new THREE.Vector3(-2000, 0, 4500) );






//kitchen
panorama2.link( enter, new THREE.Vector3(-1700, 0, 200));
//toilet
panorama3.link( enter, new THREE.Vector3(-2000, 0, -1200));
//room
panorama4.link( enter, new THREE.Vector3(-1500, 0, 0));
//guest
// panorama5.link( pano, new THREE.Vector3(-1000, 0, -2000));

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

enter.addEventListener('enter', () => {
    footInfo.innerHTML = "Коридор"
    viewer.panorama.rotation.y = 0;
    
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point5.classList.add('pointH')
})


pano.addEventListener('enter', () => {
    footInfo.innerHTML = "Гостинная"
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

// panorama5.addEventListener('enter', () => {
//     footInfo.innerHTML = "Зал"
//     viewer.panorama.rotation.y = 0;
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point5.classList.add('pointH')

// })



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
    viewer.setPanorama(enter)

}


// point5.onclick = () => {
//     points.forEach(point => {
//         point.classList.remove('pointH')
//     })
//     point5.classList.add('pointH')
//     viewer.setPanorama(panorama5)

// }

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
    viewer.setPanorama(enter)
    footInfo.innerHTML = "Коридор"
}
foot1.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Коридор"
})





// guest
foot2.onclick = () => { 
    viewer.setPanorama(pano)
    footInfo.innerHTML = "Гостинная"
}
foot2.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Гостинная"
})


//////////////room
foot3.onclick = () => { 
    viewer.setPanorama(panorama3)
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
    viewer.setPanorama(panorama4)
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

viewer.add(enter, pano, panorama2, panorama3, panorama4 );



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

map.onclick = (e) => {
    console.log(e.target)
    if(e.target.id==='mapImg'){
        map.classList.contains('map')? map.classList.remove('map') :  map.classList.toggle('map')
    } else {
        map.classList.contains('map') && setTimeout(function(){map.classList.remove('map');}, 500)
    }

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

