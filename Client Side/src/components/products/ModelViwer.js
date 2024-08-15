import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './ModelViewer.module.css';
import Footer from '../common/Footer';
import { useParams } from 'react-router-dom';
{/*
const ModelViewer = () => {
  const containerRef = useRef(null);
  const objectRef = useRef(null);

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is mounted

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const loader = new GLTFLoader();

    loader.load(
      'model/BlackShadeAviator/result.gltf',
      function (gltf) {
        if (!isMounted) return; // Check if the component is still mounted

        const object = gltf.scene;
        scene.add(object);
        objectRef.current = object;
        object.scale.set(25, 25, 25); // Set scale to (3, 3, 3)
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      function (error) {
        console.error(error);
      }
    );

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.z = 500;

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    const animate = () => {
      if (!isMounted) return; // Check if the component is still mounted

      requestAnimationFrame(animate);

      // Rotate the object continuously
      if (objectRef.current) {
        objectRef.current.rotation.y += 0.009; // Adjust the speed as needed
      }

      renderer.render(scene, camera);
    };

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();

    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <div id="container3D" ref={containerRef}></div>;
};

*/}

{/*
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './../../assets/styles/ModelViewer.css';
*/}
// 




// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
  const containerRef = useRef(null);
  const objectRef = useRef(null);
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let isMouseDown = false;
const {productId} = useParams()
console.log(productId)

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is mounted

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const handlePointerMove = (event) => {
      if (isMouseDown) {
        const { clientX, clientY } = event.touches ? event.touches[0] : event;
        mouseX = clientX;
        mouseY = clientY;
      }
    };

    const handlePointerDown = () => {
      isMouseDown = true;
    };

    const handlePointerUp = () => {
      isMouseDown = false;
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('pointerup', handlePointerUp);

    const loader = new GLTFLoader();
 
    loader.load(
      `${productId}.glb`, // Change the file extension to .glb

      function (gltf) {
        if (!isMounted) return; // Check if the component is still mounted

        const object = gltf.scene;
        scene.add(object);
        objectRef.current = object;
        object.scale.set(30, 30, 30); // Set scale to (30, 30, 30) instead of (3, 3, 3)
      },
      function (xhr) {
        // console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      function (error) {
        // console.error(error);
      }
    );

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.z = 500;

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    const animate = () => {
      if (!isMounted) return; // Check if the component is still mounted

      requestAnimationFrame(animate);

      if (objectRef.current && isMouseDown) {
        objectRef.current.rotation.y = -3 + mouseX / window.innerWidth * 3;
        objectRef.current.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
      }

      renderer.render(scene, camera);
    };

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();

    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className='container'>
      <div ref={containerRef}></div>
    </div>
  );
};

export default ModelViewer;



