import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import WrappedButton from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WrappedButton',
  component: WrappedButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof WrappedButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WrappedButton> = () => <WrappedButton />;

export const Original = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
