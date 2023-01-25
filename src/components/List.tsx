import React, { useEffect, useState } from 'react'
import { database as db, ref, onValue } from '@/config/firebase'
import { Box, Center, Spinner, Text, VStack } from '@chakra-ui/react';

const List = () => {

  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    onValue(ref(db, "notes"), (snapshot) => {
      let data = snapshot.val();
      let tempList:any = [];

      for (let key in data) {
        // Rules of Hooks
        // Don’t call Hooks inside loops, conditions, or nested functions.
        tempList.push(data[key])
      }
      setList(tempList);
      setIsLoading(false);

    })

  },[])

  return (
    <Center>
      {isLoading ? (
        <Spinner boxSize="30px" />
      ) : list ? (
          list.map((data: any, index) => {
            let date = new Date(data.createdAt);
            return (
              <Box
                key={index}
                bgColor='green.200'
                h='auto'
                w='200px'
                border='1px solid black'
                mr='10px'
                borderRadius='10px'
              >
                <Text>{`${date.getFullYear()} Year`}</Text>
                <Text>{data.note}</Text>
              </Box>
            )
          })

        ) : (
            <Text>There is no note! Please post note to view!</Text>
      )}
    </Center>
  )
}

export default List
