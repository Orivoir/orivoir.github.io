import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function Overview() {

  return (
    <Card sx={{maxWidth: 600}}>
      <CardMedia 
        sx={{height: 400}}
        image="https://placehold.co/600x400"
        title="Placeholder design"
      />

      <CardContent>
        <Typography variant='h5'>
                    Lorem ipsum
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Maecenas suscipit elit ut arcu mattis, nec gravida lorem dictum.
                    Sed bibendum et est ut aliquam. Donec ultricies ipsum metus, sagittis aliquam mauris fringilla vel.
                    Nullam tincidunt sem vulputate tristique venenatis.
                    Pellentesque consectetur gravida congue.
                    Etiam ut elit ut metus dictum sagittis et ac massa.
                    Etiam sagittis lacus velit, vitae bibendum magna posuere a.
        </Typography>
      </CardContent>
    </Card>
  )
}