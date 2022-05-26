import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Challenge } from '../src';

export default {
  title: 'Development',
  component: Challenge,
} as ComponentMeta<typeof Challenge>;

const Template: ComponentStory<typeof Challenge> = args => (
  <div
    style={{
      width: '300px',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      border: '1px solid black',
      borderRadius: '15px 0 0 15px',
      backgroundColor: '#22206a',
      overflow: 'hidden',
    }}
  >
    <Challenge {...args} />
  </div>
);

export const ChallengeContainer = Template.bind({});
ChallengeContainer.args = {
  markComplete: () => alert('Challenge submitted'),
};
