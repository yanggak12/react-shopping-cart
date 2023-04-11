import TopNav from '.';

export default {
  title: 'Layouts/TopNav',
  component: TopNav,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <TopNav />;

export const Primary = Template.bind({});
