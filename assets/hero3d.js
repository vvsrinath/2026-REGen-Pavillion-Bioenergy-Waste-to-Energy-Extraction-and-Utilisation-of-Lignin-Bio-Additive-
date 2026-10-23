import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

(function initHero3D(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.getElementById('hero-3d');
  if(!container) return;
  if(reduceMotion){
    container.classList.remove('loading');
    container.classList.add('reduced');
    return;
  }
  if(!window.WebGLRenderingContext){
    container.classList.remove('loading');
    container.classList.add('fallback');
    return;
  }
  try{
    container.classList.remove('loading');
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, container.clientWidth/container.clientHeight, 0.1, 40);
    camera.position.set(5.6, 2.8, 9.2);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = !reduceMotion;
    controls.autoRotateSpeed = 0.4;
    controls.minPolarAngle = Math.PI/3.2;
    controls.maxPolarAngle = Math.PI/2.1;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 0.65, 0.36, 0.8);
    composer.addPass(bloom);

    const hemi = new THREE.HemisphereLight(0x43e69a, 0x06110e, 4.2);
    scene.add(hemi);
    const key = new THREE.PointLight(0x8bf5c1, 6.2, 16);
    key.position.set(4, 5, 6);
    scene.add(key);
    const amber = new THREE.PointLight(0xe9aa56, 3.6, 12);
    amber.position.set(-3.2, 2.6, 4);
    scene.add(amber);
    const rim = new THREE.PointLight(0x63d8d1, 2.8, 10);
    rim.position.set(1.6, -2.2, -4);
    scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    const matGlass = new THREE.MeshPhysicalMaterial({color:0x0f2a22, transparent:true, opacity:0.72, roughness:0.12, transmission:0.8, thickness:1.2, ior:1.45, clearcoat:1, clearcoatRoughness:0.08, emissive:0x10251f, emissiveIntensity:0.4});
    const matEmerald = new THREE.MeshStandardMaterial({color:0x43e69a, emissive:0x1f9a66, emissiveIntensity:1.2, metalness:0.18, roughness:0.28});
    const matAmber = new THREE.MeshStandardMaterial({color:0xe9aa56, emissive:0x8a5a1f, emissiveIntensity:0.9, metalness:0.22, roughness:0.32});
    const matCyan = new THREE.MeshStandardMaterial({color:0x63d8d1, emissive:0x1f6f6c, emissiveIntensity:0.8, metalness:0.16, roughness:0.36});

    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.08, 48, 120), new THREE.MeshBasicMaterial({color:0x43e69a, transparent:true, opacity:0.5}));
    ring.rotation.x = Math.PI/2.4;
    group.add(ring);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.05, 40, 140), new THREE.MeshBasicMaterial({color:0x63d8d1, transparent:true, opacity:0.38}));
    ring2.rotation.x = Math.PI/2.6;
    ring2.rotation.y = Math.PI/6;
    group.add(ring2);

    const flask = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.1, 1.8, 48), matGlass);
    body.position.y = 0.2;
    flask.add(body);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 0.8, 40), matGlass);
    neck.position.y = 1.4;
    flask.add(neck);
    const liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.98, 0.9, 40), new THREE.MeshPhysicalMaterial({color:0x43e69a, transparent:true, opacity:0.5, transmission:0.6, roughness:0.18, emissive:0x1f9a66, emissiveIntensity:0.6}));
    liquid.position.y = 0.15;
    flask.add(liquid);
    flask.position.set(0.4, 0.4, 0.2);
    flask.rotation.y = 0.4;
    group.add(flask);

    const vessel = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 1), matGlass);
    vessel.position.set(-1.8, 1.0, -0.6);
    vessel.rotation.set(0.6, 0.8, 0.2);
    group.add(vessel);

    const pod = new THREE.Mesh(new THREE.OctahedronGeometry(0.7, 0), matEmerald);
    pod.position.set(2.0, -0.6, -0.8);
    pod.rotation.set(0.4, 0.2, 0.6);
    group.add(pod);

    const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(0.6, 0), matAmber);
    shard.position.set(-0.8, -1.4, 1.6);
    shard.rotation.set(0.8, 0.4, 0.2);
    group.add(shard);

    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.4, 32, 32), matCyan);
    orb.position.set(1.6, 1.6, -1.2);
    orb.scale.set(1,1,1);
    group.add(orb);

    const leaves = new THREE.Group();
    for(let i=0;i<5;i++){
      const geo = new THREE.ConeGeometry(0.26, 0.8, 24);
      const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color:0x43e69a, emissive:0x1f9a66, emissiveIntensity:0.8, roughness:0.4}));
      const angle = (i/5)*Math.PI*2;
      mesh.position.set(Math.cos(angle)*2.4, Math.sin(i*0.8)*0.4 - 0.8, Math.sin(angle)*2.4);
      mesh.rotation.x = Math.PI/2.4;
      mesh.rotation.y = angle;
      leaves.add(mesh);
    }
    group.add(leaves);

    const particles = new THREE.Group();
    const pgeo = new THREE.SphereGeometry(0.02, 12, 12);
    const pmat = new THREE.MeshBasicMaterial({color:0x8bf5c1, transparent:true, opacity:0.6});
    for(let i=0;i<80;i++){
      const m = new THREE.Mesh(pgeo, pmat);
      const r = 3.6 + Math.random()*1.2;
      const a = Math.random()*Math.PI*2;
      const t = Math.random()*Math.PI;
      m.position.set(Math.sin(t)*Math.cos(a)*r, (Math.random()-0.5)*2.2, Math.sin(t)*Math.sin(a)*r);
      particles.add(m);
    }
    group.add(particles);

    let mouseX=0, mouseY=0;
    const onMove = (e)=>{
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX-rect.left)/rect.width - 0.5)*2;
      mouseY = ((e.clientY-rect.top)/rect.height - 0.5)*2;
    };
    container.addEventListener('pointermove', onMove);

    const clock = new THREE.Clock();
    let frame;
    const tick = ()=>{
      const t = clock.getElapsedTime();
      group.rotation.y = t*0.08 + mouseX*0.12;
      group.rotation.x = Math.sin(t*0.12)*0.08 + mouseY*0.08;
      ring.rotation.z = t*0.14;
      ring2.rotation.z = -t*0.1;
      flask.rotation.y = 0.4 + Math.sin(t*0.6)*0.08;
      flask.position.y = 0.4 + Math.sin(t*0.8)*0.1;
      vessel.rotation.x = 0.6 + t*0.12;
      vessel.rotation.y = 0.8 + t*0.16;
      pod.rotation.x = 0.4 + t*0.18;
      pod.rotation.y = 0.2 + t*0.14;
      shard.rotation.x = 0.8 + t*0.22;
      shard.rotation.y = 0.4 + t*0.18;
      orb.position.y = 1.6 + Math.sin(t*0.9)*0.12;
      leaves.rotation.y = t*0.06;
      particles.rotation.y = t*0.04;
      controls.update();
      composer.render();
      frame = requestAnimationFrame(tick);
    };

    const onResize = ()=>{
      const w = container.clientWidth, h = container.clientHeight;
      camera.aspect = w/h;
      camera.updateProjectionMatrix();
      renderer.setSize(w,h);
      composer.setSize(w,h);
    };
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    let visible = true;
    const io = new IntersectionObserver((entries)=>{
      visible = entries[0].isIntersecting;
      if(visible && !document.hidden){ start(); } else { stop(); }
    }, {threshold:0.12});
    io.observe(container);

    const start = ()=>{ if(!frame && visible && !document.hidden){ frame = requestAnimationFrame(tick); }};
    const stop = ()=>{ if(frame){ cancelAnimationFrame(frame); frame = null; }};
    document.addEventListener('visibilitychange', ()=>{
      if(document.hidden) stop(); else if(visible) start();
    });
    start();
  }catch(err){
    console.warn('Hero 3D init failed', err);
    container.classList.remove('loading');
    container.classList.add('fallback');
  }
})();
