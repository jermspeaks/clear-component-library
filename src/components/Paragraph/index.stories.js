import Paragraph from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Paragraph',
  },
};

export const Secondary = {
  args: {
    label: 'Paragraph',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Paragraph',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Paragraph',
  },
};
