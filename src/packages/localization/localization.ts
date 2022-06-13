import { useEffect, useState } from "react"
import { useI18nContext } from "./i18n-react"
import { Namespaces } from "./i18n-types"
import { loadNamespaceAsync } from "./i18n-util.async"

export const useLocalization = (namespace: Namespaces) => {
  const [ tReady, setTReady] = useState(false)
  const context = useI18nContext()

  useEffect(() => {
    const loadResources = async () => {
      setTReady(false)

      await loadNamespaceAsync(context.locale, namespace)
      context.setLocale(context.locale)

      setTReady(true)
    }

    loadResources()
  }, [context.locale])

  return { ...context, tReady }
}