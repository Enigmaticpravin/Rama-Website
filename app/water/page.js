'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function BookPage() {
  const mountRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined' && mountRef.current) {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      // Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Texture loader
      const textureLoader = new THREE.TextureLoader();

      // Book dimensions
      const bookWidth = 3;
      const bookHeight = 5;
      const bookDepth = 0.5;

      // Materials
      const createBookMaterials = () => {
        const materials = [
          // Spine side
          new THREE.MeshStandardMaterial({ map: textureLoader.load('https://i.imgur.com/V18UIom.png'),
            side: THREE.FrontSide }),
          // Right side (when book is closed)
          new THREE.MeshStandardMaterial({ map: textureLoader.load('https://i.imgur.com/V18UIom.png'),
            side: THREE.FrontSide }),
          // Front cover
          new THREE.MeshStandardMaterial({ 
            map: textureLoader.load('https://i.imgur.com/V18UIom.png'),
            side: THREE.FrontSide
          }),
          // Back cover
          new THREE.MeshStandardMaterial({ 
            map: textureLoader.load('https://i.imgur.com/V18UIom.png'),
            side: THREE.BackSide 
          }),
          // Top and bottom
          new THREE.MeshStandardMaterial({ color: 0xffffff })
        ];

        // Ensure textures are loaded correctly
        materials.forEach(material => {
          if (material.map) {
            material.map.wrapS = THREE.ClampToEdgeWrapping;
            material.map.wrapT = THREE.ClampToEdgeWrapping;
            material.needsUpdate = true;
          }
        });

        return materials;
      };

      // Create book geometry
      const bookGeometry = new THREE.BoxGeometry(
        bookWidth, 
        bookHeight, 
        bookDepth
      );

      // Create book mesh
      const bookMaterials = createBookMaterials();
      const bookMesh = new THREE.Mesh(bookGeometry, bookMaterials);
      scene.add(bookMesh);

      // Camera positioning
      camera.position.set(0, 0, 10);
      camera.lookAt(scene.position);

      // Orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      // Animation loop
      let animationFrameId;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        // Subtle rotation
        bookMesh.rotation.y += 0.005;
        
        // Update controls
        controls.update();
        
        // Render scene
        renderer.render(scene, camera);
      };

      // Start animation
      animate();

      // Resize handler
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        mountRef.current?.removeChild(renderer.domElement);
      };
    }
  }, []);

  return (
    <main 
      ref={mountRef} 
      className="fixed inset-0 z-0 bg-gradient-to-b from-gray-100 to-gray-300"
    >
      <div className="fixed bottom-4 left-4 bg-white/50 p-2 rounded z-10">
        <p>3D Book Viewer</p>
      </div>
    </main>
  );
}