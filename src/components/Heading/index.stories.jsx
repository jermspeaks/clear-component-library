import Heading from './index';

export default {
  title: 'Components/Heading',
  component: Heading,
};

export const Overview = () => (
  <>
    <Heading level={1} fontWeight="bold">
      Heading 1 - 24/32 - B
    </Heading>
    <Heading level={1} fontWeight="normal">
      Heading 1 - 24/32 - N
    </Heading>
    <Heading level={2} fontWeight="bold">
      Heading 2 - 20/26 - B
    </Heading>
    <Heading level={2} fontWeight="normal">
      Heading 2 - 20/26 - N
    </Heading>
    <Heading level={3} fontWeight="bold">
      Heading 3 - 16/16 - B
    </Heading>
    <Heading level={3} fontWeight="normal">
      Heading 3 - 16/16 - N
    </Heading>
    <Heading level={4} fontWeight="bold">
      Heading 4 - 12/12 - B
    </Heading>
    <Heading level={4} fontWeight="normal">
      Heading 4 - 12/12 - N
    </Heading>
    <Heading level={5} fontWeight="bold">
      Heading 5 - 10/10 - B
    </Heading>
    <Heading level={5} fontWeight="normal">
      Heading 5 - 10/10 - N
    </Heading>
    <Heading level={6} fontWeight="bold">
      Heading 6 - 8/8 - B
    </Heading>
    <Heading level={6} fontWeight="normal">
      Heading 6 - 8/8 - N
    </Heading>
  </>
);

export const Level7 = () => <Heading level={7}>Fallback Heading</Heading>;
