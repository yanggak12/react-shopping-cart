import { Meta, StoryFn } from '@storybook/react';
import ProductDetail from '.';

export default {
  title: 'Products/ProductDetail',
  component: ProductDetail,
} as Meta<typeof ProductDetail>;

const Template: StoryFn<typeof ProductDetail> = args => (
  <ProductDetail {...args} />
);

export const Default = Template.bind({});
