# 🎮 Custom 3D Models Directory

Place your custom 3D model files into the corresponding subdirectories below:

## 📁 Folder Structure

| Folder | Intended Models | Examples |
| :--- | :--- | :--- |
| `characters/` | Player character models, skins, armor sets | `player_knight.glb`, `mage_robes.gltf` |
| `npcs/` | Friendly NPCs, shopkeepers, villagers, monsters, skeletons | `sorcerer.glb`, `skeleton_warrior.glb`, `goblin.obj` |
| `items/` | Weapons, shields, torches, potions, tools, relics, keys | `claymore.glb`, `tower_shield.gltf`, `magic_wand.obj` |
| `buildings/` | Castle keeps, watchtowers, houses, crypts, shrines, arches | `stone_keep.glb`, `wooden_cabin.gltf`, `crypt_gate.obj` |
| `environment/` | Trees, rocks, vegetation, lanterns, chests, barrels, fences | `pine_tree.glb`, `granite_boulder.glb`, `dungeon_chest.gltf` |

---

## 📦 Supported 3D Formats
1. **`.glb` / `.gltf`** *(Recommended)*: Binary or JSON glTF 2.0 with embedded textures, normals, and animations.
2. **`.obj` (+ `.mtl`)**: Standard Wavefront OBJ geometry and materials.
3. **`.fbx`**: Filmbox 3D models and skeletal animations.
4. **`.vox`**: MagicaVoxel voxel models.

---

## 🚀 How Models are Loaded in Code
The engine includes `src/loaders/CustomModelLoader.ts` which automatically parses, scales, and caches any model placed in these folders:

```typescript
import { customModelLoader } from '../loaders/CustomModelLoader';

// Load a character / NPC model
const npcModel = await customModelLoader.loadModel('/models/npcs/skeleton_warrior.glb');
scene.add(npcModel.clone());

// Load an item model for the player hand
const swordModel = await customModelLoader.loadModel('/models/items/claymore.glb');
handBone.add(swordModel.clone());

// Load a landmark building
const castleModel = await customModelLoader.loadModel('/models/buildings/stone_keep.glb');
castleModel.position.set(x, y, z);
scene.add(castleModel);
```
