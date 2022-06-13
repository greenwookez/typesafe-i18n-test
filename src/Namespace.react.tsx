import React from "react"
import { Nav } from "./Nav.react"
import { useLocalization } from "./packages/localization/localization"

export const Namespace: React.FC = () => {
  const { tReady, LL } = useLocalization("namespace")

  if (!tReady) return <span>Loading...</span>

  return (
    <>
      <Nav />
      <div>{LL.namespace.PAGE_TITLE()}</div>
    </>
  )
}
