import React from "react";
import * as THREE from "three";
import img from "../images/earthMap2.png";
import './css/three.css'
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Earth from '../images/Earth/Moon.glb'



//import  night_light from '../images/Globe/textures/Night_light_2K.png'

// const threeGLStyle = {
//   position:"absolute",
//   top:"-100px",
//   left:"0",
//   outline:"none",
//   mixBlendMode:"normal",
//   fontSize: "50px",
//   maxHeight: "80vh",
//   zIndex: -10

// }
class three extends React.Component {
  componentDidMount() {
    //Sizes
      const sizes =
      {
        width: window.innerWidth,
        height: window.innerHeight
      }
      //Create a scene with camera view and set size
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1 , 1000);

      //Texture loader (Have to import img above before being used here)
      const textureLoader = new THREE.TextureLoader()
      const normalTexture = textureLoader.load(img)

      const renderer = new THREE.WebGLRenderer({alpha : true});
      renderer.setSize( sizes.width, sizes.height );
      document.body.appendChild( renderer.domElement );

      const geometry = new THREE.SphereBufferGeometry(2.5, 100, 100);

      //Material for object
      var material = new THREE.MeshStandardMaterial({ color: 0x220022, depthTest: true });
      material.normalMap = normalTexture;
      material.metalness = 2
      material.roughness = 3
      material.color = new THREE.Color(0x220022)
      const sphere = new THREE.Mesh( geometry, material );
      scene.add( sphere );
      //Load 3D object using GLB

      const loader = new GLTFLoader()
      loader.load(Earth,function(glb){
        const sphere = glb.scene
        //scene.add(sphere);
      })

      //Load 3D object Material (must come first)
      // const mtlloader = new MTLLoader();
      //mtlloader.setPath('../images/Globe/')
      // mtlloader.load(mtlGlobe, function( materials){
      //     materials.preload();

      //     //Loading 3D object
      //     const objLoader = new OBJLoader();
      //     objLoader.setMaterials(materials);
      //     //objLoader.setPath('../images/Globe/')
      //     objLoader.load(objGlobe, function(object){
      //     object.position.y = -60;
      //     scene.add(object);
      //   })
      // })
      //Load 3d texture
      //const globetexture = textureLoader.load(night_light)


      //camera positions
      camera.position.z = 8;

      //Auto update (eg when screen minimise)
      window.addEventListener('resize', () =>
      {
      // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

      // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

      // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      })

      //Light 1
      const pointLight1 = new THREE.PointLight(0xffffff, 0.2)
      pointLight1.intensity = 1;
      pointLight1.position.set(3.95,-10,20)
      scene.add(pointLight1)

      // //Light 2 w/GUI
      const pointLight2 = new THREE.PointLight(0xffffff, .2)
      pointLight2.intensity = 5;
      pointLight2.position.set(-10,4.2,-4)
      scene.add(pointLight2)

      //Light 3 w/GUI
      const pointLight3 = new THREE.PointLight(0x120027, .2)
      pointLight3.intensity = 1.1;
      pointLight3.position.set(20,-10,-10)
      scene.add(pointLight3)



      //Add Mouse controls
      // const controls = new OrbitControls(camera, renderer.domElement);
      // controls.enableDamping = true;
      // controls.campingFactor = 0.25;
      // controls.enableZoom = true;

      //Animate on mouse move
      document.addEventListener('mousemove', onDocumentMouseMove)

      let mouseX = 0
      let mouseY = 0

      let targetX = 0
      let targetY = 0

      const windowX = window.innerWidth/2;
      const windowY = window.innerHeight/2;

      function onDocumentMouseMove(event)
      {
        mouseX = (event.clientX - windowX)
        mouseY = (event.clientY - windowY)
      }

      const clock = new THREE.Clock()

      const updateSphere = (event) =>
      {
        sphere.position.y = window.scrollY * .001
      }
      window.addEventListener('scroll', updateSphere);

      //update
      var update = function( )
      {
        const elapsedTime = clock.getElapsedTime()
        //sphere follows mouse
        targetX = mouseX * .001
        targetY = mouseY * .001

        sphere.rotation.y = 0.1 * elapsedTime;
        //sphere.rotation.x = -0.015 * elapsedTime;
        sphere.rotation.y += .05 * (targetX - sphere.rotation.y)
        sphere.rotation.x += .05 * (targetY - sphere.rotation.x)
        sphere.position.z += -.05 * (targetY - sphere.rotation.x)
      };

      const animate = function()
      {
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
        //controls.update();
        update()
      };

      animate();
    }
    render()
    {
      return <div ref={ref => (this.mount = ref)}/>;
    }
}

export default three