import { Modal } from "@mantine/core"
import styled from "styled-components"

export const AddFavApp = styled(Modal)`
  .mantine-Modal-content {
    background-color: rgba(0, 0, 0, 0.4) !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
  }

  .mantine-Modal-header {
    background-color: transparent !important;
  }

  .mantine-Modal-title {
    color: white !important;
  }
`
