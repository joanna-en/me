const wishlist = {
  name: 'wishlist',
  type: 'document',
  title: 'WishList',
  fields: [
    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [
        {
          type: 'reference',
          to: { type: 'product' },
        },
      ],
    },
  ],
};

export default wishlist;
