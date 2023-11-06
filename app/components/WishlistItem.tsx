import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface WishlistItemProps {
  item: NonNullable<Sanity.Default.Schema.Product>
}

const WishlistItem: React.FC<WishlistItemProps> = ({ item }) => {
  const { name, picture, price, location = '', size } = item
  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardActionArea href={location} target="_blank">
        <CardMedia
          component="img"
          image={picture?.asset.url}
          alt={name}
          sx={{
            height: 'auto',
            maxWidth: 500,
          }}
        />
        <CardContent>
          {name && <Typography>{name}</Typography>}
          {price && <Typography>${price}</Typography>}
          {size && <Typography>{size}</Typography>}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default WishlistItem
