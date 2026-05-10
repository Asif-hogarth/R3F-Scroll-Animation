import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Watch2(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/montana_watch__free_model.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={[10,10,10]} ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="f7ee337d5d7749979b62a9307c4ccfd5fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="������������_��������" position={[5.08, 0, -372.119]}>
                  <mesh
                    name="������������_��������_plane_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['������������_��������_plane_0'].geometry}
                    material={materials.plane}
                  />
                </group>
                <group
                  name="��������_������������"
                  position={[-2.339, 249.539, 20.399]}
                  rotation={[-0.21, 0, -1.6]}>
                  <group name="��������������" position={[2.339, -37.497, -20.399]}>
                    <mesh
                      name="��������������_Metal_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['��������������_Metal_0'].geometry}
                      material={materials.Metal}
                    />
                    <mesh
                      name="��������������_Metal_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['��������������_Metal_0_1'].geometry}
                      material={materials.Metal}
                    />
                    <mesh
                      name="��������������_Metal_0_2"
                      castShadow
                      receiveShadow
                      geometry={nodes['��������������_Metal_0_2'].geometry}
                      material={materials.Metal}
                    />
                  </group>
                  <group
                    name="������������"
                    position={[-0.537, -27.389, -7.123]}
                    rotation={[0, 0, Math.PI]}>
                    <mesh
                      name="������������_Base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['������������_Base_0'].geometry}
                      material={materials.Base}
                    />
                  </group>
                </group>
                <group
                  name="����������_������_��������"
                  position={[-225.854, 258.663, 30.927]}
                  rotation={[-0.215, -0.171, 1.542]}>
                  <mesh
                    name="����������_������_��������_Logo_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['����������_������_��������_Logo_0'].geometry}
                    material={materials.Logo}
                  />
                </group>
                <group
                  name="������������_������������"
                  position={[-19.515, 249.114, -0.367]}
                  rotation={[-0.21, 0, 1.542]}>
                  <mesh
                    name="������������_������������_Back_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['������������_������������_Back_0'].geometry}
                    material={materials.Back}
                  />
                </group>
                <group
                  name="����������������"
                  position={[-29.907, 252.931, 31.162]}
                  rotation={[-0.21, 0, 1.542]}>
                  <mesh
                    name="����������������_Face_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['����������������_Face_0'].geometry}
                    material={materials.Face}
                  />
                </group>
                <group
                  name="������������_1"
                  position={[-29.907, 255.347, 42.507]}
                  rotation={[-0.21, 0, 1.542]}>
                  <mesh
                    name="������������_Glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['������������_Glass_0'].geometry}
                    material={materials.Glass}
                  />
                </group>
                <group
                  name="������������������"
                  position={[-45.047, 250.418, 21.909]}
                  rotation={[-0.21, 0, 1.542]}>
                  <mesh
                    name="������������������_Watch_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['������������������_Watch_0'].geometry}
                    material={materials.Watch}
                  />
                </group>
                <group
                  name="��������_������������_1"
                  position={[-14.327, 359.023, 2.711]}
                  rotation={[-0.21, 0, 1.542]}>
                  <group name="1_1" position={[19.086, -3.244, 0]}>
                    <mesh
                      name="1_1_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['1_1_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="9" position={[11.81, -3.251, -6]}>
                    <mesh
                      name="9_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['9_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="8" position={[11.81, -3.251, -6]}>
                    <mesh
                      name="8_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['8_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="7" position={[12.456, -2.494, -6]}>
                    <mesh
                      name="7_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['7_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="6" position={[11.81, -3.251, -6]}>
                    <mesh
                      name="6_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['6_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="5" position={[11.81, -3.251, -6]}>
                    <mesh
                      name="5_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['5_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="4" position={[11.81, -3.244, -6]}>
                    <mesh
                      name="4_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['4_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="3" position={[12.456, -3.251, -6]}>
                    <mesh
                      name="3_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['3_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="2" position={[11.81, -3.251, -6]}>
                    <mesh
                      name="2_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['2_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="1" position={[19.086, -3.244, 0]}>
                    <mesh
                      name="1_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['1_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="����������" position={[-114.856, 28.489, 0]}>
                    <mesh
                      name="����������_Number_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['����������_Number_0'].geometry}
                      material={materials.Number}
                    />
                  </group>
                  <group name="����������_1" position={[-114.856, 28.489, 0]}>
                    <mesh
                      name="����������_Number_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['����������_Number_0_1'].geometry}
                      material={materials.Number}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/montana_watch__free_model.glb')
