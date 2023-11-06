import { Rule } from 'sanity';

const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'picture',
      type: 'image',
      title: 'Picture',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'location',
      type: 'url',
      title: 'Location',
      validation: (Rule: Rule) => Rule.required(),
    },

    {
      name: 'size',
      type: 'string',
      title: 'Size',
    },
  ],
};

export default product;
