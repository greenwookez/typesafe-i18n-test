import React, { useEffect, useState } from "react"
import { useI18nContext } from "./packages/localization/i18n-react"
import { loadNamespaceAsync } from "./packages/localization/i18n-util.async"
import { Nav } from "./Nav.react"
import { Locales } from "./packages/localization/i18n-types"

export const Namespace: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { LL, locale, setLocale } = useI18nContext()

  useEffect(() => {
    const loadResources = async (locale: Locales) => {
      setIsLoading(true)

      await loadNamespaceAsync(locale, "namespace")
      setLocale(locale) // this is MUST HAVE call

      setIsLoading(false)
    }

    loadResources(locale)
  }, [locale])

  return (
    <>
      <Nav />
      {isLoading ? "Loading..." : <div>{LL.namespace.PAGE_TITLE()}</div>}
    </>
  )
}
