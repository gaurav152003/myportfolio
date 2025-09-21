import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/animated_astronaut_in_space_suit_loop.glb"
  );
  const { actions } = useAnimations(animations, group);

  const [rotation, setRotation] = useState([0, 0, 0]); // state for rotation

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play(); // Auto-play first animation
    }
  }, [actions, animations]);

  // Handle keyboard arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      setRotation((prev) => {
        const step = 0.1; // rotation step
        switch (e.key) {
          case "ArrowUp":
            return [prev[0] - step, prev[1], prev[2]];
          case "ArrowDown":
            return [prev[0] + step, prev[1], prev[2]];
          case "ArrowLeft":
            return [prev[0], prev[1] - step, prev[2]];
          case "ArrowRight":
            return [prev[0], prev[1] + step, prev[2]];
          default:
            return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={rotation} // dynamic rotation
      scale={1.323}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="root">
            <group name="GLTF_SceneRootNode">
              <group name="Walking_astronaut_94">
                <group name="Walking_astronaut_Skeleton_93" scale={0.01}>
                  <group name="geo1_0">
                    <group name="astronaut2_1" />
                  </group>
                  <group name="skeletal3_2">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_102"
                        geometry={nodes.Object_102.geometry}
                        material={materials.material0}
                        skeleton={nodes.Object_102.skeleton}
                      />
                      <skinnedMesh
                        name="Object_103"
                        geometry={nodes.Object_103.geometry}
                        material={materials.material0}
                        skeleton={nodes.Object_103.skeleton}
                      />
                      <skinnedMesh
                        name="Object_106"
                        geometry={nodes.Object_106.geometry}
                        material={materials.material1}
                        skeleton={nodes.Object_106.skeleton}
                      />
                      <skinnedMesh
                        name="Object_109"
                        geometry={nodes.Object_109.geometry}
                        material={materials.material2}
                        skeleton={nodes.Object_109.skeleton}
                      />
                      <group name="node3_95_correction">
                        <group name="node3_95" />
                      </group>
                      <group name="node4_96_correction">
                        <group name="node4_96" />
                      </group>
                      <group name="node5_97_correction">
                        <group name="node5_97" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/animated_astronaut_in_space_suit_loop.glb");
