import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0,5,0)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement); 


const geometry1 = new THREE.TorusGeometry(3,1,64,64)
const material1 = new THREE.MeshLambertMaterial({color: 0x880808}); 
const shape1 = new THREE.Mesh(geometry1,material1); 
shape1.position.x = -5; 
scene.add(shape1); 

const geometry2 = new THREE.TorusGeometry(3,1,64,64)
const material2 = new THREE.MeshLambertMaterial({color: 0x880808}); 
const shape2 = new THREE.Mesh(geometry2,material2); 
shape2.position.x = 5; 
scene.add(shape2); 

const planeGeometry = new THREE.PlaneGeometry(20,20,10,10)
const planeMat = new THREE.MeshLambertMaterial({color: 0x111111})
const shape3 = new THREE.Mesh(planeGeometry,planeMat)
shape3.rotateX(-1.57)
shape3.position.set(0,-8,-10)
scene.add(shape3)

var light = new THREE.PointLight(0xffffff, 7000);
light.position.set(0, 30, 0);
scene.add(light);

camera.position.z = 15


function animate(){
	requestAnimationFrame( animate );

	shape1.rotation.x += 0.05
	shape1.rotation.y += 0.2

	shape2.rotation.x += 0.2
	shape2.rotation.y += 0.05

	renderer.render(scene,camera); 
}
animate(); 
