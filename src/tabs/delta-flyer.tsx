import "@mantine/core/styles.css"

import { MantineProvider } from "@mantine/core"
import React from "react"
// Custom Glassmorphic Theme configuration for Mantine

import { Provider } from "react-redux"

import { HeroLayout } from "~src/Layout"
import { store } from "~src/Store/store"
import { glassTheme } from "~src/utility/glassThemeSTyle"

function DeltaFlyerPage() {
  return (
    <Provider store={store}>
      <MantineProvider theme={glassTheme} defaultColorScheme="dark">
        <HeroLayout />
      </MantineProvider>
    </Provider>
  )
}

export default DeltaFlyerPage
