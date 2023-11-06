import { type SchemaTypeDefinition } from 'sanity';
import wishlist from './schemas/wishlist';
import product from './schemas/product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [wishlist, product],
};
