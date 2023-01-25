import { Button, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { database as db, set, ref } from '../config/firebase';
//@ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Post = () => {
  const [text, setText] = useState("")

  const postNote = () => {

    if (text) {
      set(ref(db, 'notes/' + uuidv4()), {
        note: text,
        createdAt: Date.now()
      }).then((err) => {
        // @ts-ignore
        if (!err) {
          const notify = () => toast("Note Added")
          notify();
          setText("")
        } else {
          const notify = () => toast("Failed")
          notify();

        }
      })
    }
  }


  return (
    <VStack mt={8}>
      <Textarea
        placeholder='Write your notes here'
        value={text}
        rows={10}
        cols={85}
        onChange={(e)=> setText(e.target.value)}
      />
      <Button onClick={()=>{postNote()}}>Post</Button>
    <ToastContainer />
    </VStack>
  )
}

export default Post
