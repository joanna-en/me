import { Box, Container, Typography } from '@mui/material'
import { client } from '@santiyConfigs/lib/client'
import { groq } from 'next-sanity'
import { Suspense } from 'react'
import WishlistItem from '../components/WishlistItem'
import { Metadata } from 'next'

const getWishlist = async (): Promise<Sanity.Default.Schema.Wishlist> => {
  const wishlist = await client.fetch(groq`*[_type == 'wishlist'][0] {
      ...,
      products[] -> {
        name,
        price,
        location,
        size,
        picture {
          asset -> {
            url
          }
        }
      }
    }`)
  return wishlist
}

export const metadata: Metadata = {
  title: 'Chris Wishlist',
  description: 'Chris wishlist',
}

export default async function WishList() {
  const wishlist = await getWishlist()
  return (
    <Container sx={{ my: 4 }}>
      <Typography mb={4} variant="h3">
        Chris&apos;s Wishlist
      </Typography>
      <Suspense fallback={<div>Loading wishlist...</div>}>
        <Box display="flex" flexWrap="wrap" gap={4}>
          {wishlist?.products?.map((product: NonNullable<Sanity.Default.Schema.Product>) => (
            <WishlistItem item={product} key={product?.name} />
          ))}
        </Box>
      </Suspense>
    </Container>
  )
}
