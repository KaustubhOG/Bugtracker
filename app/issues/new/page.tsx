'use client'
import React, { useState } from 'react'
import { TextField, Button, Callout, Text } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/createIssueSchema'
import { z } from 'zod'

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
  const router = useRouter()
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })


  const [error, seterror] = useState('')

  return (
    <div>
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className="space-y-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues', data)
            router.push('/issues')
          } catch (error) {
            seterror('Unexpected error occurred')
          }
        })}
      >
        <TextField.Root placeholder="Issue Title" {...register('title')} />
        {errors.title && (
          <Text color="red">{errors.title.message}</Text>
        )}

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              {...field}
              onChange={(value) => {
                field.onChange(value)
              }}
              options={{ autofocus: true }}
            />
          )}
        />
        <div>
          {errors.description && (
            <Text color="red">{errors.description.message}</Text>
          )}</div>


        <Button type="submit">Submit Issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage
