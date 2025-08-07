
import React from 'react'
import { TextArea, TextField, Button } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className="space-y-4">
      <TextField.Root placeholder="Issue Title" />
      <TextArea placeholder="Issue Description" />
      <Button>Submit Issue</Button>
    </div>
  )
}

export default NewIssuePage
