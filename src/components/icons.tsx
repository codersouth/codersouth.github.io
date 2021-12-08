import React from 'react'
import { createIcon } from '@chakra-ui/react'

export const MessagesIcon = createIcon({
  displayName: 'MessagesIcon',
  viewBox: '0 0 24 24',
  path: [
    <path d="M0 0h24v24H0z" fill="none" key="firstMessageIcon" />,
    <path
      d="M8 18h10.237L20 19.385V9h1a1 1 0 0 1 1 1v13.5L17.545 20H9a1 1 0 0 1-1-1v-1zm-2.545-2L1 19.5V4a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455z"
      key="seccondMessageIcon"
    />,
  ],
})
