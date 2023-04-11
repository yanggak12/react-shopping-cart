import { Meta, StoryFn } from '@storybook/react';
import ProductItem from '.';

export default {
  title: 'Products/ProductItem',
  component: ProductItem,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta<typeof ProductItem>;

const Template: StoryFn<typeof ProductItem> = args => <ProductItem {...args} />;

export const Default = Template.bind({});
