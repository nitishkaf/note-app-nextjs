import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <Flex
      justifyContent='space-between'
      bg='blue.300'
    >
      <Link href="/">
        <Text>Post Notes</Text>
      </Link>

      <Link href='/notes'>
        <Text>Notes</Text>
      </Link>
    </Flex>
  )
}

export default Navigation
