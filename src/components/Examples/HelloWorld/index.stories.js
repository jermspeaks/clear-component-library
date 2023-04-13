import HelloWorld from './index';

export default {
  title: 'Example/HelloWorld',
  component: HelloWorld,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const MainExample = {
  args: {
    text: 'Hello World',
  },
};
