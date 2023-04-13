import Paragraph from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  render: (args) => (
    <Paragraph {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
      diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
    </Paragraph>
  ),
  args: {
    small: false,
    fade: false,
  },
};

export const Fade = {
  render: (args) => (
    <Paragraph {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
      diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
    </Paragraph>
  ),
  args: {
    small: false,
    fade: true,
  },
};

export const Small = {
  render: (args) => (
    <Paragraph {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
      diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
    </Paragraph>
  ),
  args: {
    small: true,
    fade: false,
  },
};
