import Block from './index';
import lorem from '../../constants/lorem';

export default {
  title: 'Components/Block',
  component: Block,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'text' },
    center: { control: 'boolean' },
  },
};

export const DefaultStory = {
  render: () => <Block>{lorem}</Block>,
  args: { color: null, center: false },
};

export const PrimaryBrand = {
  render: (args) => <Block {...args}>{lorem}</Block>,
  args: {
    color: 'primaryBrand',
    center: false,
  },
};
