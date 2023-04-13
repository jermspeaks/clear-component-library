import EmptyDisplay from './index';

export default {
  title: 'Components/EmptyDisplay',
  component: EmptyDisplay,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  render: () => (
    <EmptyDisplay>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
      tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
      diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
    </EmptyDisplay>
  ),
};
