
//cointeiner for panorama viewer
const container = document.querySelector('#container');


//points
//////////////////
const point = document.getElementById("1")
const point2 = document.getElementById("2")
const point3 = document.getElementById("3")
const point4 = document.getElementById("4")
const point5 = document.getElementById("5")
const point6 = document.getElementById("6")


///////////////////////

const points = document.querySelectorAll('.st0')


//panorams 
const panorama  = new PANOLENS.ImagePanorama('https://i.ibb.co/FJDZZWn/entrance2-fin-min.jpg');
const panorama2 = new PANOLENS.ImagePanorama( 'https://i.ibb.co/FmZQqSR/kitchen-min-1.jpg' );


const panorama5 = new PANOLENS.ImagePanorama( 'https://i.ibb.co/mSVpn7L/entrance22-min.jpg' );
const panorama3 = new PANOLENS.ImagePanorama( 'https://i.ibb.co/Z6y62BB/white-bedfin-min.jpg' );

const panorama4 = new PANOLENS.ImagePanorama( 'https://i.ibb.co/mSjxMkg/blue-child-min-1.jpg' );

const panorama6 = new PANOLENS.ImagePanorama( 'https://i.ibb.co/THRWhwR/hall-fin-min-1.jpg' );




//viewer
const viewer = new PANOLENS.Viewer({
    container: container,
    autoHideInfospot: false,
    
})

viewer.OrbitControls.noZoom = true; // Disable scrollwheel zoom
viewer.OrbitControls.maxFov = 50; // Set max zoom
viewer.getControl().rotateSpeed *= 2; // rotation speed
viewer.getControl().momentumScalingFactor *= 0.3; // inertia/spring after drag
//controls




var northposition_start = 0;

viewer.getControl().addEventListener('change',function() {
    let  y = viewer.getCamera().rotation.y*(1);
 
	if (y<0) var dy = THREE.Math.radToDeg(y + (2 * Math.PI));
	else var dy = THREE.Math.radToDeg(y);
    dy = Math.round(dy) - northposition_start;
    console.log(dy)
});



//pan 1
panorama.link( panorama2, new THREE.Vector3(1800, 100, 1100) );
panorama.link( panorama3, new THREE.Vector3(1400.94, 250, -2000.32) );
panorama.link( panorama5, new THREE.Vector3(1000.48, 250, -4000) );
//to 1
panorama2.link( panorama, new THREE.Vector3(-3500.48, 400, -2000.46) );
panorama3.link( panorama, new THREE.Vector3(-1400.48, 130.67, -1500) );
panorama5.link( panorama4, new THREE.Vector3(800, 250.67, 3000) );


// pan 5
panorama5.link( panorama, new THREE.Vector3(-2520, 50, 0) );


panorama5.link( panorama6, new THREE.Vector3(0.48, 250.67, -4000) );



//to 5
panorama4.link( panorama5, new THREE.Vector3(-2500.48, 250.67, -600) );

panorama6.link( panorama5, new THREE.Vector3(-3500, 250, 0.46) );



//event listen




panorama2.addEventListener('enter', function(){
    console.log('hey works')

    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point2.classList.add('pointH')

})



panorama.addEventListener('enter', function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point.classList.add('pointH')

})


panorama3.addEventListener('enter', function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point3.classList.add('pointH')

})



panorama4.addEventListener('enter', function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point4.classList.add('pointH')

})



panorama5.addEventListener('enter', function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point5.classList.add('pointH')

})






panorama6.addEventListener('enter', function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point6.classList.add('pointH')

})


//custom link 
let infospot1 = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot1.position.set(-5000, 100, 1500 );
infospot1.addHoverText( "Выход" );
infospot1.addEventListener( 'click', function(){
    window.location.assign('../full/copy/full.html')
} );

panorama.add( infospot1)







//map
//
point.onclick = function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point.classList.add('pointH')
    viewer.setPanorama(panorama)
}
/////////////////////////////////
point2.onclick = function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point2.classList.add('pointH')
    viewer.setPanorama(panorama2)
}

/////////////////////////////////
point3.onclick = function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point3.classList.add('pointH')
    viewer.setPanorama(panorama3)
}

//////////////

point4.onclick = function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point4.classList.add('pointH')
    viewer.setPanorama(panorama4)
}

//////////////

point5.onclick = function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point5.classList.add('pointH')
    viewer.setPanorama(panorama5)
}


//////////////

point6.onclick = function(){
    points.forEach(point => {
        point.classList.remove('pointH')
    })
    point6.classList.add('pointH')
    viewer.setPanorama(panorama6)
}








//
//initial viewer
viewer.add( panorama, panorama2, panorama3, panorama4, panorama5, panorama6 );




viewer.addUpdateCallback(function(){
    
});