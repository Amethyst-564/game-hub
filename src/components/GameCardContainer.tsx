import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow='hidden' pb={1} transition="transform .15s ease-in"
      _hover={{ transform: "scale(1.03)" }}>
      {children}
    </Box>
  )
}

export default GameCardContainer