import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface WishlistItemProps {
  item: NonNullable<Sanity.Default.Schema.Product>
}

const WishlistItem: React.FC<WishlistItemProps> = ({ item }) => {
  const { name, picture, price, location = '', size } = item
  return (
    <Card
      sx={{
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea
        href={location}
        target="_blank"
        sx={{ minHeight: 350, flex: 1, display: 'flex', alignItems: 'center' }}
      >
        <CardMedia
          component="img"
          image={picture?.asset.url}
          alt={name}
          sx={{
            height: 'auto',
            maxWidth: 500,
          }}
        />
      </CardActionArea>
      <CardContent sx={{ minHeight: 115, flex: 0 }}>
        {name && <Typography>{name}</Typography>}
        {price && <Typography>${price}</Typography>}
        {size && <Typography>{size}</Typography>}
      </CardContent>
    </Card>
  )
}

export default WishlistItem
