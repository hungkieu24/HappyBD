
function checkWidth() {
    if (window.matchMedia("(max-width: 63.9375em)").matches) {
        document.querySelectorAll('.container').forEach(function(element) {
            element.classList.remove('container');
        });
    } else {
        document.querySelectorAll('.letter').forEach(function(element) {
            if (!element.classList.contains('container')) {
                element.classList.add('container');
            }
        });
    }
}

// Kiểm tra kích thước khi tải trang
checkWidth();

// Kiểm tra kích thước khi thay đổi kích thước cửa sổ
window.addEventListener('resize', checkWidth);

function handleEvent() {
    var letter = document.querySelector('.container.letter');
    letter.style.display = 'none';

    const audio = document.getElementById("backgroundMusic");
    var letter = document.querySelector('.container.letter');
    audio.play().catch(error => {
        // Audio autoplay was blocked by the browser, handle it if needed
        console.error("Autoplay was blocked:", error);
    });

    const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
            import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
            import { OrbitControls } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";

            var defined = 'QXV0aG9yOiBMdWMg';
            var datacenter = ['aHR0cHM6L', 'y93d3cuZmF', 'jZWJvb2suY29t'];
            let scene = new THREE.Scene();
            scene.background = new THREE.Color('#160016');
            let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
            camera.position.set(0, 4, 21);
            let renderer = new THREE.WebGLRenderer();
            renderer.setSize(innerWidth, innerHeight);
            document.body.appendChild(renderer.domElement);
            window.addEventListener("resize", event => {
                camera.aspect = innerWidth / innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(innerWidth, innerHeight);
            })
            datacenter.push('L3Byb2ZpbGUu');
            let controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.enablePan = false;
            datacenter.push('cGhwP2lkPTEw');
            let gu = {
                time: { value: 0 }
            }
            defined = defined.concat('VGhpZW4gUGhvbmc=');
            let sizes = [];
            let shift = [];
            let pushShift = () => {
                shift.push(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI * 2,
                    (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
                    Math.random() * 0.9 + 0.1
                );
            }
            datacenter.push('MDA0NTQwNj');
            var context = atob(defined);
            let pts = new Array(50000).fill().map(p => {
                sizes.push(Math.random() * 1.5 + 0.5);
                pushShift();
                return new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
            })
            for (let i = 0; i < 100000; i++) {
                let r = 10, R = 40;
                let rand = Math.pow(Math.random(), 1.5);
                let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
                pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2));
                sizes.push(Math.random() * 1.5 + 0.5);
                pushShift();
            }
            console.log(context);
            datacenter.push('I2MTQ5MQ' + '==');
            let g = new THREE.BufferGeometry().setFromPoints(pts);
            g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
            g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));
            let m = new THREE.PointsMaterial({
                size: 0.125,
                transparent: true,
                depthTest: false,
                blending: THREE.AdditiveBlending,
                onBeforeCompile: shader => {
                    shader.uniforms.time = gu.time;
                    shader.vertexShader = \`
                        uniform float time;
                        attribute float sizes;
                        attribute vec4 shift;
                        varying vec3 vColor;
                        \${shader.vertexShader}
                    \`.replace(
                        \`gl_PointSize = size;\`,
                        \`gl_PointSize = size * sizes;\`
                    ).replace(
                        \`#include <color_vertex>\`,
                        \`#include <color_vertex>
                        float d = length(abs(position) / vec3(40., 10., 40));
                        d = clamp(d, 0., 1.);
                        vColor = mix(vec3(42,40,154), vec3(209,124,196), d) / 255.;
                    \`).replace(
                            \`#include <begin_vertex>\`,
                            \`#include <begin_vertex>
                        float t = time;
                        float moveT = mod(shift.x + shift.z * t, PI2);
                        float moveS = mod(shift.y + shift.z * t, PI2);
                        transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.a;
                    \`);
                    // console.log(shader.vertexShader);
                    shader.fragmentShader = \`
                    varying vec3 vColor;
                    \${shader.fragmentShader}
                    \`.replace(
                        \`#include <clipping_planes_fragment>\`,
                        \`#include <clipping_planes_fragment>
                        float d = length(gl_PointCoord.xy - 0.5);
                        if (d > 0.5) discard;
                    \`).replace(
                            \`vec4 diffuseColor = vec4( diffuse, opacity );\`,
                            \`vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d) );\`
                        );
                    // console.log(shader.fragmentShader);
                }
            });

             // Load multiple texture images
             const textureLoader = new THREE.TextureLoader();
            const texture1 = textureLoader.load('./image/p1.jpg'); // Replace with the path to your first image
            const texture2 = textureLoader.load('./image/p2.jpg'); // Replace with the path to your second image
            const texture3 = textureLoader.load('./image/p3.jpg'); // Replace with the path to your third image
            const texture4 = textureLoader.load('./image/p4.jpg'); // Replace with the path to your second image
            const texture5 = textureLoader.load('./image/p5.jpg'); // Replace with the path to your second image
            const texture6 = textureLoader.load('./image/p6.jpg'); // Replace with the path to your second image
            const texture7 = textureLoader.load('./image/p7.jpg'); // Replace with the path to your second image
            const texture8 = textureLoader.load('./image/p8.jpg'); // Replace with the path to your second image
            const texture9 = textureLoader.load('./image/p9.jpg'); // Replace with the path to your second image
            const texture10 = textureLoader.load('./image/p10.jpg'); // Replace with the path to your second image
            const texture11 = textureLoader.load('./image/p11.jpg'); // Replace with the path to your second image
            const texture12 = textureLoader.load('./image/p12.jpg'); // Replace with the path to your second image
            const texture13 = textureLoader.load('./image/p13.jpg'); // Replace with the path to your second image
            const texture14 = textureLoader.load('./image/p14.jpg'); // Replace with the path to your second image
            const texture15 = textureLoader.load('./image/p15.jpg'); // Replace with the path to your second image
            const texture16 = textureLoader.load('./image/p16.jpg'); // Replace with the path to your second image
            const texture17 = textureLoader.load('./image/p17.jpg'); // Replace with the path to your second image
            const texture18 = textureLoader.load('./image/p18.jpg'); // Replace with the path to your second image
            const texture19 = textureLoader.load('./image/p19.jpg'); // Replace with the path to your second image
            const texture20 = textureLoader.load('./image/p20.jpg'); // Replace with the path to your second image
            const texture21 = textureLoader.load('./image/p21.jpg'); // Replace with the path to your second image
            const texture22 = textureLoader.load('./image/p22.jpg'); // Replace with the path to your second image
            const texture23 = textureLoader.load('./image/p23.jpg'); // Replace with the path to your second image
            const texture24 = textureLoader.load('./image/p24.jpg'); // Replace with the path to your second image
            const texture25 = textureLoader.load('./image/p25.jpg'); // Replace with the path to your second image

            // Create multiple objects with different textures
            const objects = [];

            const geometry = new THREE.BoxGeometry(1, 1, 1); // You can use different geometries
            const materials = [
                texture1, texture2, texture3, texture4,
                texture5, texture6, texture7, texture8, 
                texture9, texture10, texture11,texture12,
                texture10, texture11, texture12,texture13,
                texture14, texture15, texture16,texture17, 
                texture18,texture19, texture20, texture21,
                texture22, texture23, texture24, texture25,
             ]; // Add more textures as needed

            for (let i = 0; i < 1000; i++) {
                const phi = Math.acos(-1 + (2 * i) / 100);
                const theta = Math.sqrt(100 * Math.PI) * (i + 1);
                
                const x = 10 * Math.cos(theta) * Math.sin(phi);
                const y = 10 * Math.sin(theta) * Math.sin(phi);
                const z = 10 * Math.cos(phi);

                const randomTexture = materials[Math.floor(Math.random() * materials.length)];
                const material = new THREE.MeshBasicMaterial({ map: randomTexture });
                
                const sphere = new THREE.Mesh(geometry, material);
                sphere.position.set(x, y, z);
                objects.push(sphere);
            }

            objects.forEach(object => {
                scene.add(object);
            });
            
            

            const light = new THREE.DirectionalLight(0xffffff);
            light.position.set(1, 1, 1);
            scene.add(light);

            let clock_1 = new THREE.Clock();

            renderer.setAnimationLoop(() => {
                controls.update();
                let t = clock_1.getElapsedTime() * 0.5;
                objects.forEach(object => {
                    object.rotation.x = t;
                    object.rotation.y = t;
                });
                renderer.render(scene, camera);
            })

                   

            let p = new THREE.Points(g, m);
            p.rotation.order = "ZYX";
            p.rotation.z = 0.2;
            scene.add(p)
            const data = atob(datacenter.join(''));
            let clock = new THREE.Clock();
            console.log(data);
            renderer.setAnimationLoop(() => {
                controls.update();
                let t = clock.getElapsedTime() * 0.5;
                gu.time.value = t * Math.PI;
                p.rotation.y = t * 0.05;
                renderer.render(scene, camera);
            });

            // Get the audio element
            const audio = document.getElementById("backgroundMusic");

            // Play the audio when the page is loaded
            window.addEventListener("load", () => {
                audio.play().catch(error => {
                    // Audio autoplay was blocked by the browser, handle it if needed
                    console.error("Autoplay was blocked:", error);
                });
            });

            // Stop the audio when the page is closed or unloaded
            window.addEventListener("beforeunload", () => {
                audio.pause();
            });

            
        `;
        document.body.appendChild(script);
}


