import { Metadata } from 'next'
import { Suspense } from 'react'
import { groq } from 'next-sanity'
import { Box, Container, Typography } from '@mui/material'
import { client } from '@santiyConfigs/lib/client'
import WishlistItem from '@components/WishlistItem'

const getWishlist = async (): Promise<Sanity.Default.Schema.Wishlist> => {
  const wishlist = await client.fetch<Sanity.Default.Schema.Wishlist>(
    groq`*[_type == 'wishlist'][0] {
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
    }`,
    { revalidate: 30 }
  )
  return wishlist
}

export const metadata: Metadata = {
  title: 'jo wishlist',
  description: 'jo&apos;s wishlist',
}

export default async function WishList() {
  const wishlist = await getWishlist()
  return (
    <Container sx={{ my: 4 }}>
      <Typography mb={4} variant="h3" color="white">
        jo&apos;s wishlist
      </Typography>
      <Suspense fallback={<div>Loading wishlist...</div>}>
        <Box display="flex" flexWrap="wrap" gap={4} justifyContent="center">
          {wishlist?.products?.map((product: NonNullable<Sanity.Default.Schema.Product>) => (
            <WishlistItem item={product} key={product?.name} />
          ))}
        </Box>
      </Suspense>
    </Container>
  )
}
