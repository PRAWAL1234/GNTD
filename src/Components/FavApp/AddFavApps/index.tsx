import { Button, Flex, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import React from "react"

import { AddFavApp } from "./FavStlye"

type props = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
  opened: boolean
  onAddApp: (app: { name: string; url: string }) => void
}

export const AddFavAppModal: React.FC<props> = ({
  opened,
  setOpened,
  onAddApp
}) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      url: ""
    },
    validate: {
      name: (value) =>
        value.length < 3 ? "Name must be at least 3 characters long" : null,
      url: (value) =>
        value.length < 3 ? "Url must be at least 3 characters long" : null
    }
  })

  const handleSubmit = (values: any) => {
    onAddApp({ name: values.name, url: values.url })
    setOpened(false)
    form.reset()
  }

  return (
    <AddFavApp
      opened={opened}
      onClose={() => setOpened(false)}
      title="Add Favorite App">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex gap={"md"} direction={"column"}>
          <Flex direction={"column"} gap={"md"}>
            <TextInput
              {...form.getInputProps("name")}
              placeholder="Name"
              label="Name"
              required
            />
            <TextInput
              {...form.getInputProps("url")}
              placeholder="Url"
              label="Url"
              required
            />
          </Flex>
          <Button w={"100%"} type="submit" variant="outline" color="green">
            Add
          </Button>
        </Flex>
      </form>
    </AddFavApp>
  )
}
