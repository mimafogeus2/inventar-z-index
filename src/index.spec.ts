import test from 'ava'
import makeInventar from 'inventar'

import inventarZIndex from './'

test('inventarZIndex basics', t => {
	const inventarConfig = {
		z: { value: 100, transformers: [inventarZIndex(['header', 'modal', 'toaster'])] },
	}
	const { jsInventar } = makeInventar(inventarConfig)
	const jsInventarKeys = Object.keys(jsInventar)

	t.is(jsInventarKeys.length, 3)

	t.true(jsInventarKeys.includes('zHeader'))
	t.is(jsInventar.zHeader, 100)

	t.true(jsInventarKeys.includes('zModal'))
	t.is(jsInventar.zModal, 200)

	t.true(jsInventarKeys.includes('zToaster'))
	t.is(jsInventar.zToaster, 300)
})
