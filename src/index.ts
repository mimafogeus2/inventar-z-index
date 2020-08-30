import { InventarTransformer } from 'inventar'

const zIndex: (layers: string[]) => InventarTransformer = (layers: string[]) => ([name, value]) => {
	return layers.map((layerName, index) => {
		const capitalizedLayerName = layerName.charAt(0).toUpperCase() + layerName.slice(1)
		const varName = `${name}${capitalizedLayerName}`
		const varValue = (value as number) * (index + 1)

		return [varName, varValue]
	})
}

export default zIndex
