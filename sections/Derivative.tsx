export interface KeyBenefit {
  icon: string;
  text: string;
}

export interface Props {
  subtitle?: string;
  keyBenefits?: KeyBenefit[];
}

export default function Derivative({
  subtitle = "Criado a partir da união de redes de pesca interceptadas antes de virarem redes fantasmas e resíduos têxteis pré-consumo",
  keyBenefits = [
    {
      icon: "https://assets.decocache.com/derivative/59a05c46-dd77-42a0-b6d5-d8cdf3244268/Frame-(1).svg",
      text: "Novo destino para ameaças ambientais"
    }
  ]
}: Props) {
  return (
    <div id="derivative" style="background-color: #1d1b1d; min-height: 100vh;">
      <section class="relative py-20 lg:py-32 mx-4 lg:mx-8" style="background-color: #fcfafc; border-radius: 24px; overflow: hidden; background-image: url('https://assets.decocache.com/derivative/59fbafa1-c394-4fac-a866-06ea2cad64a8/background_nets.svg'); background-size: cover; background-position: center; background-repeat: no-repeat;">
      {/* Background Pattern */}
      <div class="absolute inset-0 opacity-15">
        <img 
          src="https://assets.decocache.com/derivative/59fbafa1-c394-4fac-a866-06ea2cad64a8/background_nets.svg" 
          alt="Net pattern background"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div class="order-2 lg:order-1 opacity-0 translate-y-8 transition-all duration-1000 ease-out scroll-animate">
            {/* UnicornStudio Interactive Component with DERIVATIVE title */}
            <div class="mb-0">
              <div 
                class="relative w-full overflow-hidden"
                style="aspect-ratio: 1440/900; max-height: 150px; transform: translateX(-40px) !important;"
              >
                <div 
                  data-us-project="CfUBNRWqqovof8qgj5r4" 
                  class="absolute inset-0 w-full h-full"
                  style="width: 100%; height: 100%;"
                ></div>
              </div>
            </div>

            {/* Subtitle */}
            <p class="text-xl lg:text-2xl leading-relaxed mb-6 font-sans max-w-2xl" style="margin-top: -10px; color: #4A4A4A !important;">
              Criado a partir da união de <strong style="font-weight: 600 !important; font-style: italic !important; color: #4A4A4A !important;">redes de pesca</strong> interceptadas antes de virarem redes fantasmas e <strong style="font-weight: 600 !important; font-style: italic !important; color: #4A4A4A !important;">resíduos têxteis</strong> pré-consumo
            </p>

            {/* Key Benefits */}
            <div class="mb-16">
              {keyBenefits.map((benefit, index) => (
                <div key={index} class="flex items-center gap-4 px-6 py-4 rounded-xl border-2 inline-block" style="border: 2px solid #E5E5E5 !important; border-radius: 12px !important; width: fit-content;">
                  <div class="flex-shrink-0">
                    <img 
                      src={benefit.icon} 
                      alt=""
                      style="width: 32px !important; height: 32px !important;"
                    />
                  </div>
                  <span style="color: #4A4A4A !important; font-family: sans-serif !important; font-size: 18px !important; font-weight: 500 !important; line-height: 1.5 !important;">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - UnicornStudio Element */}
          <div class="order-1 lg:order-2 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200 scroll-animate">
            <div 
              data-us-project="AI2KbKFrSjPoQHEs6hQK" 
              style="width: 100%; height: 450px; max-width: 600px; aspect-ratio: 1440/900;"
            ></div>
          </div>
        </div>

      </div>

      {/* Material Flow Cards - 3 Column Layout - Full Width - SEPARATE SECTION */}
      <div class="container mx-auto px-4 lg:px-8 relative z-10" style="margin-top: 100px;">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-400 scroll-animate">
            
            {/* Card 1 - Redes Danificadas */}
          <div class="bg-mineral-black rounded-2xl h-[400px] flex flex-col items-center" style="width: 380px;">
            <div class="flex flex-col justify-center flex-1 gap-2 px-6 py-3 w-full">
                <p class="text-fog-gray font-bold text-sm">Resíduo</p>
                <h3 class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                  REDES DANIFICADAS
                </h3>
              </div>
            {/* Interference Pattern Animation Container */}
            <div style="width: 95%; height: 340px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative;">
              <div id="redes-animation" style="width: 100%; height: 100%;"></div>
            </div>
            </div>

          {/* Seta 1 - Resíduos → Matéria-prima */}
          <div class="flex items-center justify-center">
            <img 
              src="https://assets.decocache.com/derivative/3d40778e-d8d1-47f1-925d-9ba8717d50d8/Arrow-1.svg" 
              alt="Fluxo para Matéria-prima"
              style="width: 40px; height: 40px; transform: rotate(0deg);"
            />
            </div>

          {/* Card 2 - Pellets */}
          <div class="bg-mineral-black rounded-2xl h-[400px] flex flex-col items-center" style="width: 380px;">
              <div class="flex flex-col gap-2 px-6 py-3 w-full">
                <p class="text-fog-gray font-bold text-sm">Matéria-prima</p>
                <h3 class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                  PELLETS
                </h3>
              </div>
            {/* 3D Animation Container */}
            <div style="width: 83.333333%; height: 320px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative; background-color: transparent;">
              <div id="pellets-animation" style="width: 100%; height: 100%;"></div>
            </div>
            </div>

          {/* Seta 2 - Matéria-prima → Produtos */}
          <div class="flex items-center justify-center">
            <img 
              src="https://assets.decocache.com/derivative/3d40778e-d8d1-47f1-925d-9ba8717d50d8/Arrow-1.svg" 
              alt="Fluxo para Produtos"
              style="width: 40px; height: 40px; transform: rotate(0deg);"
            />
            </div>

          {/* Card 3 - Produtos */}
          <div class="bg-mineral-black rounded-2xl h-[400px] flex flex-col items-center" style="width: 380px;">
              <div class="flex flex-col gap-2 px-6 py-3 w-full">
                <p class="text-fog-gray font-bold text-sm">PRODUTOS</p>
                <h3 class="text-snow-white font-mono font-medium text-base tracking-tight leading-tight">
                  ARMAÇÃO DE ÓCULOS
                </h3>
              </div>
            {/* Video Container */}
            <div style="width: 83.333333%; height: 320px; border-radius: 0.5rem; margin-bottom: 0.5rem; overflow: hidden; position: relative; background-color: transparent;">
              <video 
                style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem;"
                autoplay 
                muted 
                loop 
                playsinline
              >
                <source src="https://assets.decocache.com/derivative/489370b4-faa2-450e-83a3-3b092e3eea2d/sunglasses.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
                </video>
            </div>
          </div>

        </div>
      </div>

            {/* 3D Animation Script for Pellets Card */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Pellets 3D Animation
            (function() {
              let animationFrameId = null;
              let scene = null;
              let camera = null;
              let renderer = null;
              let sphereGroups = [];
              let cameraZoom = 6;
              
              const createWaveSources = (time, scale) => {
                const result = [];
                const count = 5;
                for (let i = 0; i < count; i++) {
                  const angle = (i / count) * Math.PI * 2;
                  const radius = scale * (1 + Math.sin(angle * 3) * 0.2);
                  result.push({
                    position: [
                      Math.cos(angle) * radius,
                      0,
                      Math.sin(angle) * radius
                    ],
                    frequency: 1.5 + Math.sin(angle * 2) * 0.3,
                    amplitude: 0.2 + Math.cos(angle) * 0.05,
                    phase: time * 2 + angle
                  });
                }
                result.push({
                  position: [0, 0, 0],
                  frequency: 1.8,
                  amplitude: 0.25,
                  phase: time * 2.5
                });
                return result;
              };
              
              const createWireframeSphere = (radius, position, opacity) => {
                const cylinderGeometry = new THREE.CylinderGeometry(radius * 1.2, radius * 1.2, radius * 1.8, 20, 8);
                
                const positionAttribute = cylinderGeometry.attributes.position;
                for (let i = 0; i < positionAttribute.count; i++) {
                  const x = positionAttribute.getX(i);
                  const y = positionAttribute.getY(i);
                  const z = positionAttribute.getZ(i);
                  
                  const height = radius * 1.8;
                  const normalizedY = y / (height / 2);
                  
                  if (Math.abs(normalizedY) > 0.7) {
                    const edgeFactor = (Math.abs(normalizedY) - 0.7) / 0.3;
                    const roundingFactor = 1 - edgeFactor * 0.3;
                    positionAttribute.setX(i, x * roundingFactor);
                    positionAttribute.setZ(i, z * roundingFactor);
                  }
                }
                positionAttribute.needsUpdate = true;
                
                const sphereMaterial = new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  wireframe: true,
                  transparent: true,
                  opacity: opacity
                });
                const cylinder = new THREE.Mesh(cylinderGeometry, sphereMaterial);
                cylinder.position.set(position[0], position[1], position[2]);
                return cylinder;
              };
              
              const createFloatingSpheres = (sources, size, resolution, time) => {
                const step = size / resolution;
                const spheresGroup = new THREE.Group();
                sphereGroups.push(spheresGroup);
                
                for (let i = 0; i <= resolution; i += 5) {
                  for (let j = 0; j <= resolution; j += 5) {
                    for (let k = 0; k <= resolution; k += 6) {
                      const baseX = (i * step) - (size / 2);
                      const baseY = (j * step) - (size / 2);
                      const baseZ = (k * step) - (size / 2);
                      
                      const organicOffset = Math.sin(baseX * 0.5 + baseY * 0.3 + baseZ * 0.7) * 0.2;
                      const x = baseX + organicOffset;
                      const y = baseY + Math.cos(baseX * 0.4 + baseZ * 0.6) * 0.15;
                      const z = baseZ + Math.sin(baseY * 0.8 + baseX * 0.2) * 0.18;
                      
                      let waveHeight = 0;
                      sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                        const dx = x - sx;
                        const dy = y - sy;
                        const dz = z - sz;
                        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                        waveHeight += Math.sin(distance * frequency - time * 3 + phase) * amplitude * Math.exp(-distance * 0.15);
                      });
                      
                      const sphereRadius = 0.35;
                      const sphereOpacity = Math.max(0.2, Math.min(0.8, Math.abs(waveHeight) * 1.5 + 0.4));
                      
                      const floatX = Math.sin(time * 1.2 + x * 0.8 + y * 0.3) * 0.15;
                      const floatY = Math.cos(time * 0.9 + z * 0.5 + x * 0.2) * 0.12;
                      const floatZ = Math.sin(time * 1.1 + y * 0.4 + z * 0.6) * 0.18;
                      
                      const sphere = createWireframeSphere(sphereRadius, [
                        x + floatX + waveHeight * 0.3,
                        y + waveHeight * 0.6 + floatY,
                        z + floatZ + waveHeight * 0.2
                      ], sphereOpacity);
                      
                      sphere.rotation.x = time * 0.3 + x * 0.05;
                      sphere.rotation.y = time * 0.2 + y * 0.05;
                      sphere.rotation.z = time * 0.25 + z * 0.05;
                      
                      spheresGroup.add(sphere);
                    }
                  }
                }
                
                return spheresGroup;
              };
              
              const init = () => {
                const container = document.getElementById('pellets-animation');
                if (!container) return;
                
                const width = container.offsetWidth;
                const height = container.offsetHeight;
                
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
                renderer = new THREE.WebGLRenderer({ 
                  antialias: true, 
                  alpha: true,
                  powerPreference: "high-performance"
                });
                renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                renderer.setSize(width, height);
                renderer.setClearColor(0x000000, 0);
                container.appendChild(renderer.domElement);
                
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
                directionalLight.position.set(5, 5, 5);
                const pointLight = new THREE.PointLight(0xffffff, 0.4);
                pointLight.position.set(-5, 3, -5);
                
                scene.add(ambientLight);
                scene.add(directionalLight);
                scene.add(pointLight);
                
                camera.position.set(0, 0, cameraZoom + 2);
                camera.lookAt(0, 0, 0);
                
                const mainGroup = new THREE.Group();
                scene.add(mainGroup);
                
                let time = 0;
                const animate = () => {
                  animationFrameId = requestAnimationFrame(animate);
                  time += 0.005;
                  
                  mainGroup.children.forEach((child) => {
                    if (child instanceof THREE.Group) {
                      child.children.forEach((sphere) => {
                        if (sphere.geometry) sphere.geometry.dispose();
                        if (sphere.material) sphere.material.dispose();
                      });
                      mainGroup.remove(child);
                    }
                  });
                  sphereGroups = [];
                  
                  const sources1 = createWaveSources(time, 1.2);
                  const field1 = createFloatingSpheres(sources1, 1.2 * 3, 8, time);
                  mainGroup.add(field1);
                  
                  const sources2 = createWaveSources(time + 0.5, 0.8);
                  const field2 = createFloatingSpheres(sources2, 0.8 * 3, 6, time + 0.5);
                  field2.position.set(0, 1.0, 0);
                  field2.rotation.set(Math.PI/8, 0, Math.PI/6);
                  mainGroup.add(field2);
                  
                  mainGroup.rotation.y = Math.sin(time * 0.08) * 0.2;
                  mainGroup.rotation.x = Math.cos(time * 0.06) * 0.15;
                  
                  renderer.render(scene, camera);
                };
                
                animate();
              };
              
              const handleResize = () => {
                if (!camera || !renderer || !container) return;
                
                const width = container.offsetWidth;
                const height = container.offsetHeight;
                
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
              };
              
              // Load THREE.js and initialize
              if (typeof THREE !== 'undefined') {
                init();
              } else {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                script.onload = init;
                document.head.appendChild(script);
              }
              
              // Cleanup
              window.addEventListener('beforeunload', () => {
                if (animationFrameId) {
                  cancelAnimationFrame(animationFrameId);
                }
                if (renderer) {
                  renderer.dispose();
                }
              });
            })();
          `
        }}
      />

      {/* Interference Pattern Animation Script for Redes Danificadas Card */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Redes Danificadas Interference Pattern Animation
            (function() {
              let animationFrameId = null;
              let scene = null;
              let camera = null;
              let renderer = null;
              let lineGroups = [];
              let time = 0;

              function createWaveSources(time, scale) {
                const result = [];
                const count = 5;
                
                for (let i = 0; i < count; i++) {
                  const angle = (i / count) * Math.PI * 2;
                  const radius = scale * (1 + Math.sin(angle * 3) * 0.2);
                  result.push({
                    position: [
                      Math.cos(angle) * radius,
                      0,
                      Math.sin(angle) * radius
                    ],
                    frequency: 2 + Math.sin(angle * 2),
                    amplitude: 0.3 + Math.cos(angle) * 0.1,
                    phase: time * 3 + angle
                  });
                }
                
                result.push({
                  position: [0, 0, 0],
                  frequency: 3,
                  amplitude: 0.4,
                  phase: time * 4
                });
                
                return result;
              }

              const createInterferenceLines = (sources, size, resolution, time) => {
                const step = size / resolution;
                const linesGroup = new THREE.Group();
                lineGroups.push(linesGroup);

                const linesMaterial = new THREE.LineBasicMaterial({
                  color: 0xffffff,
                  transparent: true,
                  opacity: 1.0,
                  linewidth: 2
                });

                // Cria linhas horizontais ondulantes
                for (let i = 0; i <= resolution; i += 1) {
                  const geometry = new THREE.BufferGeometry();
                  const points = [];
                  const x = (i * step) - (size / 2);
                  
                  for (let j = 0; j <= resolution; j += 1) {
                    const z = (j * step) - (size / 2);
                    let height = 0;
                    
                    sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                      const dx = x - sx;
                      const dz = z - sz;
                      const distance = Math.sqrt(dx * dx + dz * dz);
                      height += Math.sin(distance * frequency - time * 5 + phase) * 
                               amplitude * Math.exp(-distance * 0.3);
                    });
                    
                    points.push(x, height * 0.5, z);
                  }
                  
                  if (points.length > 2) {
                    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
                    const line = new THREE.Line(geometry, linesMaterial);
                    linesGroup.add(line);
                  }
                }

                // Cria linhas verticais ondulantes
                for (let j = 0; j <= resolution; j += 1) {
                  const geometry = new THREE.BufferGeometry();
                  const points = [];
                  const z = (j * step) - (size / 2);
                  
                  for (let i = 0; i <= resolution; i += 1) {
                    const x = (i * step) - (size / 2);
                    let height = 0;
                    
                    sources.forEach(({ position: [sx, sy, sz], frequency, amplitude, phase }) => {
                      const dx = x - sx;
                      const dz = z - sz;
                      const distance = Math.sqrt(dx * dx + dz * dz);
                      height += Math.sin(distance * frequency - time * 5 + phase) * 
                               amplitude * Math.exp(-distance * 0.3);
                    });
                    
                    points.push(x, height * 0.5, z);
                  }
                  
                  if (points.length > 2) {
                    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
                    const line = new THREE.Line(geometry, linesMaterial);
                    linesGroup.add(line);
                  }
                }

                return linesGroup;
              };

              function init() {
                const container = document.getElementById('redes-animation');
                if (!container) return;
                
                const width = container.offsetWidth;
                const height = container.offsetHeight;

                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
                renderer = new THREE.WebGLRenderer({ 
                  antialias: true, 
                  alpha: true,
                  powerPreference: "high-performance"
                });
                
                renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
                renderer.setSize(width, height);
                renderer.setClearColor(0x000000, 0);
                container.appendChild(renderer.domElement);

                const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
                directionalLight.position.set(5, 5, 5);
                const pointLight = new THREE.PointLight(0xffffff, 0.4);
                pointLight.position.set(-5, 3, -5);

                scene.add(ambientLight);
                scene.add(directionalLight);
                scene.add(pointLight);

                camera.position.set(0, 0, 8);
                camera.lookAt(0, 0, 0);

                const mainGroup = new THREE.Group();
                scene.add(mainGroup);

                function animate() {
                  animationFrameId = requestAnimationFrame(animate);
                  time += 0.005;

                  mainGroup.children.forEach((child) => {
                    if (child instanceof THREE.Group) {
                      child.children.forEach((line) => {
                        if (line.geometry) line.geometry.dispose();
                        if (line.material) line.material.dispose();
                      });
                      mainGroup.remove(child);
                    }
                  });
                  lineGroups = [];

                                    const sources1 = createWaveSources(time, 1.6);
                  const field1 = createInterferenceLines(sources1, 1.6 * 3.5, 18, time);
                  mainGroup.add(field1);
                  
                  const sources2 = createWaveSources(time + 0.5, 1.2);
                  const field2 = createInterferenceLines(sources2, 1.2 * 3.5, 14, time + 0.5);
                  field2.position.set(0, 1.2, 0);
                  field2.rotation.set(Math.PI/6, 0, Math.PI/4);
                  mainGroup.add(field2);

                  mainGroup.rotation.y = Math.sin(time * 0.08) * 0.2;
                  mainGroup.rotation.x = Math.cos(time * 0.06) * 0.15;

                  renderer.render(scene, camera);
                }

                animate();
              }

              // Load THREE.js and initialize
              if (typeof THREE !== 'undefined') {
                init();
              } else {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                script.onload = init;
                document.head.appendChild(script);
              }
              
              // Cleanup
              window.addEventListener('beforeunload', () => {
                if (animationFrameId) {
                  cancelAnimationFrame(animationFrameId);
                }
                if (renderer) {
                  renderer.dispose();
                }
              });
            })();
          `
        }}
      />

      {/* Scroll Animation Script */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            // Scroll Animation for elements
            (function() {
              function animateOnScroll() {
                const elements = document.querySelectorAll('.scroll-animate');
                
                elements.forEach((element) => {
                  const elementTop = element.getBoundingClientRect().top;
                  const elementVisible = 150;
                  
                  if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                  }
                });
              }
              
              // Throttle scroll events for performance
              let ticking = false;
              function requestTick() {
                if (!ticking) {
                  requestAnimationFrame(function() {
                    animateOnScroll();
                    ticking = false;
                  });
                  ticking = true;
                }
              }
              
              // Add event listeners
              window.addEventListener('scroll', requestTick, { passive: true });
              window.addEventListener('resize', animateOnScroll);
              
              // Initial check
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', animateOnScroll);
              } else {
                setTimeout(animateOnScroll, 100);
              }
              
              // Also check on load
              window.addEventListener('load', animateOnScroll);
            })();
          `
        }}
      />

      {/* UnicornStudio Script */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          `
        }}
      />
      </section>
    </div>
  );
}