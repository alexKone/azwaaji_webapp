import type { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonForm from './button-form';

const Story: ComponentMeta<typeof ButtonForm> = {
  component: ButtonForm,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof ButtonForm> = (args) => (
  <ButtonForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
