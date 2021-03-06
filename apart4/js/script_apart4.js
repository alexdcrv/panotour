
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


//////////////////////////////////////////////
//PANORAMA


const panorama  = new PANOLENS.ImagePanorama('asset/коридор.jpg'); //corridor
const panorama2  = new PANOLENS.ImagePanorama('asset/санузел.jpg'); //bath
const panorama3  = new PANOLENS.ImagePanorama('asset/гостиная.jpg'); //hall
const panorama4  = new PANOLENS.ImagePanorama('asset/спальня.jpg'); //room
const panorama5  = new PANOLENS.ImagePanorama('asset/кухня.jpg'); //kitch






//from corr1
panorama.link( panorama3, new THREE.Vector3(3200, 0, 500));//to bath
panorama.link( panorama5, new THREE.Vector3(1000, 0, -3000)); //to room
panorama.link( panorama4, new THREE.Vector3(-500, 0, 1900)); //to corr2



//from bath


// panorama2.link( panorama, new THREE.Vector3(5000, 0, 1000));
panorama2.link( panorama5, new THREE.Vector3(-1500, 0, -1000));//to corridor2
// panorama2.link( panorama3, new THREE.Vector3(-3000, 0, 3000));
// panorama2.link( panorama6, new THREE.Vector3(-3800, 0, -1000)); //to guest






//corr2

panorama3.link( panorama, new THREE.Vector3(500, 0, 2900));//to kitchen
//room



panorama4.link( panorama, new THREE.Vector3(-800, 0, 900));//to corr1


// //guest
panorama5.link( panorama, new THREE.Vector3(-1600, 0, 2200));//to corridor
panorama5.link( panorama2, new THREE.Vector3(-3600, 0, -200));//to corridor
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
    footInfo.innerHTML = "Коридор"
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
    footInfo.innerHTML = "Гостинная"
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




/////////////////////////////////////////////////// guestroom

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
    footInfo.innerHTML = "Коридор"
}
foot1.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Коридор"
})





//guest
foot2.onclick = () => { 
    viewer.setPanorama(panorama2)
    footInfo.innerHTML = "Санузел"
}
foot2.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Санузел"
})


//////////////room
foot3.onclick = () => { 
    viewer.setPanorama(panorama3)
    footInfo.innerHTML = "Гостинная"
}
foot3.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Гостинная"
})





//kitchen
foot4.onclick = () => { 
    viewer.setPanorama(panorama4)
    footInfo.innerHTML = "Спальня"
}
foot4.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Спальня"
})




//////////////toilet
foot5.addEventListener('mouseover', () => {
    footInfo.innerHTML = "Кухня"
})

foot5.onclick = () => { 
    viewer.setPanorama(panorama5)
    footInfo.innerHTML = "Кухня"
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

viewer.add( panorama, panorama2, panorama3, panorama4, panorama5);



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