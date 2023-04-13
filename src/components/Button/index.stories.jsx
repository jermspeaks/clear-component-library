import styled from 'styled-components';

import {
  BUTTON_SIZE_LARGE,
  BUTTON_SIZE_MEDIUM,
  BUTTON_SIZE_SMALL,
  BUTTON_VARIANT_PRIMARY_DANGER,
  BUTTON_VARIANT_PRIMARY,
  BUTTON_VARIANT_SECONDARY_DANGER,
  BUTTON_VARIANT_SECONDARY,
  BUTTON_VARIANT_TERTIARY_WHITE,
  BUTTON_VARIANT_TERTIARY_DANGER,
  BUTTON_VARIANT_TERTIARY,
} from '../../constants/button';
import Button from '.';
import Spacer from '../Spacer';

export default {
  title: 'Components/Button',
  component: Button,
  // argTypes: { onClick: { action: 'Button Click' } },
  args: {
    id: 'unique-button',
  },
};

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 40rem;

  & > button {
    margin-bottom: 1rem;
  }
`;

const AllVariantsTemplate = (args) => (
  <>
    <ButtonWrapper>
      <Button {...args} id="unique-button-1" variant={BUTTON_VARIANT_PRIMARY}>
        Primary
      </Button>
      <Button {...args} id="unique-button-2" variant={BUTTON_VARIANT_SECONDARY}>
        Secondary
      </Button>
      <Button {...args} id="unique-button-4" variant={BUTTON_VARIANT_TERTIARY}>
        Tertiary (Brand)
      </Button>
      <Button {...args} id="unique-button-3" variant={BUTTON_VARIANT_TERTIARY_WHITE}>
        Tertiary (White)
      </Button>
    </ButtonWrapper>
    <Spacer />
    <ButtonWrapper>
      <Button {...args} id="unique-button-5" variant={BUTTON_VARIANT_PRIMARY_DANGER}>
        Primary Danger
      </Button>
      <Button
        {...args}
        id="unique-button-6"
        variant={BUTTON_VARIANT_SECONDARY_DANGER}
        icon="design-icon-bell"
      >
        Secondary Danger
      </Button>
      <Button {...args} id="unique-button-7" variant={BUTTON_VARIANT_TERTIARY_DANGER}>
        Tertiary Danger (Brand)
      </Button>
    </ButtonWrapper>
    <Spacer />
    <ButtonWrapper>
      <Button {...args} id="unique-button-1" variant={BUTTON_VARIANT_PRIMARY}>
        Primary Left Icon
      </Button>
      <Button {...args} id="unique-button-1" variant={BUTTON_VARIANT_PRIMARY} iconRight>
        Primary Right Icon
      </Button>
    </ButtonWrapper>
    <Spacer />
    <ButtonWrapper>
      <Button
        {...args}
        id="unique-button-6"
        variant={BUTTON_VARIANT_SECONDARY_DANGER}
        icon="design-icon-bell"
        iconOnly
      />
      <Button
        {...args}
        id="unique-button-6"
        variant={BUTTON_VARIANT_TERTIARY_DANGER}
        icon="design-icon-bell"
        iconOnly
      />
      <Button
        {...args}
        id="unique-button-6"
        variant={BUTTON_VARIANT_TERTIARY_DANGER}
        icon="design-icon-bell"
        iconOnly
        loading
      />
    </ButtonWrapper>
  </>
);

const SingleButton = (args) => <Button {...args}>Button</Button>;
const ButtonWithIcon = (args) => <Button {...args} />;

export const AllVariants = AllVariantsTemplate.bind({});

AllVariants.args = {
  disabled: false,
};

export const AllVariantsSmall = AllVariantsTemplate.bind({});

AllVariantsSmall.args = {
  disabled: false,
  size: BUTTON_SIZE_SMALL,
};

export const AllVariantsMedium = AllVariantsTemplate.bind({});

AllVariantsMedium.args = {
  disabled: false,
  size: BUTTON_SIZE_MEDIUM,
};

export const AllVariantsLarge = AllVariantsTemplate.bind({});

AllVariantsLarge.args = {
  disabled: false,
  size: BUTTON_SIZE_LARGE,
};

export const SingleButtonComponent = SingleButton.bind({});
SingleButtonComponent.args = {
  variant: BUTTON_VARIANT_PRIMARY,
  title: 'Button Title',
};

export const DisabledButton = SingleButton.bind({});
DisabledButton.args = {
  ...SingleButtonComponent.args,
  disabled: true,
};

export const IconLeftButton = SingleButton.bind({});
IconLeftButton.args = {
  icon: 'design-icon-bell',
};

export const IconRightButton = SingleButton.bind({});
IconRightButton.args = {
  icon: 'design-icon-bell',
  iconRight: true,
};

export const IconOnlyButton = ButtonWithIcon.bind({});
IconOnlyButton.args = {
  icon: 'design-icon-bell',
  iconOnly: true,
};

export const SmallButton = SingleButton.bind({});
SmallButton.args = {
  ...SingleButtonComponent.args,
  size: BUTTON_SIZE_SMALL,
};

export const MediumButton = SingleButton.bind({});
MediumButton.args = {
  ...SingleButtonComponent.args,
  size: BUTTON_SIZE_MEDIUM,
};

export const LargeButton = SingleButton.bind({});
LargeButton.args = {
  ...SingleButtonComponent.args,
  size: BUTTON_SIZE_LARGE,
};

export const MinWidthButton = SingleButton.bind({});
MinWidthButton.args = {
  ...SingleButtonComponent.args,
  minWidth: true,
};

export const AnchorButton = SingleButton.bind({});
AnchorButton.args = {
  ...SingleButtonComponent.args,
  to: 'https://app.clearlabs.com',
};

export const LinkButton = SingleButton.bind({});
LinkButton.args = {
  ...SingleButtonComponent.args,
  href: 'https://app.clearlabs.com',
};
