import { AppShell, Flex } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import React from "react"

import { Calendar } from "~src/Components/Clock"
import { FavoritesApp } from "~src/Components/FavApp"
import { MainContext } from "~src/Main"
import { WrapperContainer } from "~src/tabs/style"

export const HeroLayout: React.FC = () => {
  const [opened] = useDisclosure()

  return (
    <WrapperContainer>
      <AppShell
        header={{ height: 100 }}
        navbar={{
          width: 400,
          breakpoint: "sm",
          collapsed: { mobile: !opened }
        }}
        styles={{
          root: { width: "100%" },
          main: { background: "transparent" },
          header: { background: "transparent", borderBottom: "none" },
          navbar: { background: "transparent", borderRight: "none" }
        }}>
        <AppShell.Header>
          <MainContext />
        </AppShell.Header>
        <AppShell.Navbar>
          <Flex
            gap={"lg"}
            direction={"column"}
            justify={"space-evenly"}
            align={"start"}>
            <Calendar />
            <FavoritesApp />
          </Flex>
        </AppShell.Navbar>
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </WrapperContainer>
  )
}
