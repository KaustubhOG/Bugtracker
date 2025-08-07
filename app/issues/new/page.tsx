'use client'
import React, { useState } from 'react'
import { TextField, Button } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import './editor-dark.css'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface IssueForm {
  title: string
  description: string
}

const NewIssuePage = () => {
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<IssueForm>()
  const [markdown, setmarkdown] = useState('')

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data)
        router.push('/issues')
      })}
    >
      <TextField.Root placeholder="Issue Title" {...register('title')} />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE
            {...field}
            value={markdown}
            onChange={(value) => {
              setmarkdown(value)
              field.onChange(value)
            }}
            options={{ autofocus: true }}
          />
        )}
      />

      <Button type="submit">Submit Issue</Button>
    </form>
  )
}

export default NewIssuePage
