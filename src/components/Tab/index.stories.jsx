import Tab from '.';

export default {
  title: 'Components/Tab',
  component: Tab,
};

export const DefaultStory = () => (
  <div>
    <Tab>Option A</Tab>
    <Tab>Option B</Tab>
    <Tab>Option C</Tab>
  </div>
);

DefaultStory.storyName = 'default';

export const HighlightedStory = () => (
  <div>
    <Tab>Option A</Tab>
    <Tab highlighted>Tab B</Tab>
    <Tab>Option C</Tab>
  </div>
);

HighlightedStory.storyName = 'highlighted';
