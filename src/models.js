import { types, getParent } from 'mobx-state-tree';

// Tile Model
const Tile = types
	.model('Tile', {
		id: 0,
		bgColor: 'black'
	})
	.actions(self => ({
		toggleNeighbors() {
			getParent(self, 2).toggleAt(self.id - 1);
			getParent(self, 2).toggleAt(self.id + 1);
		}
	}));

// Root Model
const AppModel = types
	.model('AppModel', {
		tiles: types.array(Tile), // <--- Model Composition
	})
	.actions(self => ({
		addBox() {
			const currentSize = self.tiles.length;
			self.tiles.push({ id: currentSize });  // <--- Duck typing
		},
		toggleAt(id) {
			if (id < 0 || id === self.tiles.length) return;

			const current = self.tiles[id].bgColor;
			self.tiles.splice(id, 1, Tile.create({
				id,
				bgColor: current === 'black' ? 'yellow' : 'black'
			}));
		}
	}))
	.views(self => ({
		numberOn() {
			return self.tiles.filter(box => box.bgColor === 'yellow').length;
		},
		numberOff() {
			return self.tiles.filter(box => box.bgColor === 'black').length;
		}
	}));

const appModel = AppModel.create({
	tiles: []
});

export default appModel;
