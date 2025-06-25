import type { Meta, StoryObj } from '@storybook/react-vite';

import TimeTable from './TimeTable';

const meta = {
  component: TimeTable,
} satisfies Meta<typeof TimeTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    events: []
  }
};