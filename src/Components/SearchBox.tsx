import {
  ActionIcon,
  TextInput,
  useMantineTheme,
  type TextInputProps
} from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react"
import { FcGoogle } from "react-icons/fc"

export const InputWithButton = (props: TextInputProps) => {
  const theme = useMantineTheme()

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search questions"
      rightSectionWidth={42}
      leftSection={<FcGoogle size={18} />}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
          aria-label="Search">
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      aria-label="Search questions"
      {...props}
    />
  )
}
