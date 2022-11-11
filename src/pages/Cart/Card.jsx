import { Box } from '@chakra-ui/react'
import React from 'react'

const Card = () => {
  return (
    <Box w={"100%"} h={"100px"} className='flex flex-col p-4 shadow-lg rounded-lg'>
      <div className="flex justify-between">
        Card
      </div>
    </Box>
  )
}

export default Card