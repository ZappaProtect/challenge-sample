import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ZappaComponent } from '@zappahq/react';
import { Challenge } from '../src';

export default {
  title: 'Testing',
  component: ZappaComponent,
} as ComponentMeta<typeof ZappaComponent>;

const Template: ComponentStory<typeof ZappaComponent> = args => (
  <div style={{ height: '400px', display: 'flex', alignItems: 'center' }}>
    <ZappaComponent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  siteKey: '11111111',
  challenges: [Challenge, Challenge],
  acceptableScore: 84,
  verifyCallback: (score, recommendation, passed) => {
    console.log(`Score of ${score} has a recommendation of ${recommendation}`);
  },
};
