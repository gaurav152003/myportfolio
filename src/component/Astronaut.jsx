import React, { useEffect, useRef, useMemo } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function Model(props) {
  const group = useRef();

  const { scene, animations } = useGLTF("/models/optimized.glb");

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { nodes, materials } = useGraph(clone);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const firstAction = actions?.[Object.keys(actions || {})[0]];

    if (firstAction) {
      firstAction.reset().fadeIn(0.5).play();
    }

    return () => firstAction?.fadeOut(0.5);
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />

        <skinnedMesh
          geometry={nodes.Object_102.geometry}
          material={materials.material0}
          skeleton={nodes.Object_102.skeleton}
          scale={0.013}
        />

        <skinnedMesh
          geometry={nodes.Object_103.geometry}
          material={materials.material0}
          skeleton={nodes.Object_103.skeleton}
          scale={0.013}
        />

        <skinnedMesh
          geometry={nodes.Object_106.geometry}
          material={materials.material1}
          skeleton={nodes.Object_106.skeleton}
          scale={0.013}
        />

        <skinnedMesh
          geometry={nodes.Object_109.geometry}
          material={materials.material2}
          skeleton={nodes.Object_109.skeleton}
          scale={0.013}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/optimized.glb");
