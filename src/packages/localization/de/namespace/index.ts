import en_namespace from '../../en/namespace'
import type { NamespaceNamespaceTranslation } from '../../i18n-types'

const de_namespace: NamespaceNamespaceTranslation = {
	// единственная проблема здесь в том,
	// что при загрузке ресурсов под этот язык,
	// они все равно буду грузиться отдельным чанком,
	// несмотря на то, что английский уже загружен
	...en_namespace,
}

export default de_namespace
