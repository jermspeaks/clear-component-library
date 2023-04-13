import { forwardRef } from 'react';
// import { ifProp, switchProp } from 'styled-tools';
import PropTypes from 'prop-types';
// import ReactGA from 'react-ga';
import styled, { css } from 'styled-components';

import {
  BUTTON_ICON_SIZE,
  BUTTON_SIZE_LARGE,
  BUTTON_SIZE_MEDIUM,
  BUTTON_SIZE_SMALL,
  BUTTON_VARIANT_PRIMARY_DANGER,
  BUTTON_VARIANT_PRIMARY,
  BUTTON_VARIANT_SECONDARY_DANGER,
  BUTTON_VARIANT_SECONDARY,
  BUTTON_VARIANT_TERTIARY_DANGER,
  BUTTON_VARIANT_TERTIARY_WHITE,
  BUTTON_VARIANT_TERTIARY,
  BUTTON_VARIANT_TERTIARY_DARK,
} from '../../constants/button';
import fonts from '../../constants/themes/fonts';
import palette from '../../constants/themes/palette';
// import Icon from '../Icon';
// import SpinnerIcon from '../SpinnerIcon';

const handleButtonSize = ({ iconOnly, size }) => {
  switch (size) {
    case BUTTON_ICON_SIZE:
      return css`
        height: ${(props) => props.iconSize}rem;
        width: ${(props) => props.iconSize}rem;
      `;
    case BUTTON_SIZE_SMALL:
      return iconOnly
        ? css`
            height: 2.4rem;
            font-size: 1.2rem;
            line-height: 1.6rem;
            padding-left: 0.4rem;
            padding-right: 0.4rem;
          `
        : css`
            height: 2.4rem;
            font-size: 1.2rem;
            line-height: 1.6rem;
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          `;
    case BUTTON_SIZE_MEDIUM:
      return iconOnly
        ? css`
            height: 3.2rem;
            font-size: 1.2rem;
            line-height: 1.6rem;
            padding-left: 0.8rem;
            padding-right: 0.8rem;
          `
        : css`
            height: 3.2rem;
            font-size: 1.2rem;
            line-height: 1.6rem;
            padding-left: 2rem;
            padding-right: 2rem;
          `;
    case BUTTON_SIZE_LARGE:
      return iconOnly
        ? css`
            height: 4.8rem;
            font-size: 1.4rem;
            line-height: 1.8rem;
            padding-left: 1.2rem;
            padding-right: 1.2rem;
          `
        : css`
            height: 4.8rem;
            font-size: 1.4rem;
            line-height: 1.8rem;
            padding-left: 3.2rem;
            padding-right: 3.2rem;
          `;
    default:
      return css``;
  }
};

const baseStyles = css`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  align-items: center;
  appearance: none;
  border-radius: 0.25em;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  font-family: ${fonts.primary};
  font-weight: 800;
  justify-content: center;
  min-width: ${({ minwidth }) => (minwidth ? '25.6rem' : 'auto')};
  text-decoration: none;
  transition: all 0.1s;
  white-space: nowrap;

  ${handleButtonSize}

  &:focus-visible {
    outline-offset: 0;
    outline-style: solid;
    outline-color: ${palette.buttonPrimaryOutline};
  }
`;

// const RightIcon = styled(Icon)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 0.4rem;
//   color: inherit;
//   height: 1.6rem;
// `;

// const LeftIcon = styled(RightIcon)`
//   margin-right: 0.4rem;
//   margin-left: 0;
// `;

// const IconOnly = styled(Icon)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: inherit;
//   ${switchProp('size', {
//     [BUTTON_ICON_SIZE]: css`
//       height: ${(props) => props.iconSize}rem;
//       width: ${(props) => props.iconSize}rem;
//     `,
//     [BUTTON_SIZE_SMALL]: css`
//       height: 1.6rem;
//       width: 1.6rem;
//     `,
//     [BUTTON_SIZE_MEDIUM]: css`
//       height: 1.6rem;
//       width: 1.6rem;
//     `,
//     [BUTTON_SIZE_LARGE]: css`
//       height: 2.4rem;
//       width: 2.4rem;
//     `,
//   })}
// `;

// Loading Button
// const LoadingButton = styled.button`
//   ${baseStyles};

//   background-color: ${palette.buttonLoading};
//   border: 0.01rem solid ${palette.buttonLoading};

//   & > svg {
//     color: ${palette.primaryBrand};

//     ${switchProp('size', {
//       [BUTTON_SIZE_SMALL]: css`
//         height: 1.6rem;
//         width: 1.6rem;
//       `,
//       [BUTTON_SIZE_MEDIUM]: css`
//         height: 2.4rem;
//         width: 2.4rem;
//       `,
//       [BUTTON_SIZE_LARGE]: css`
//         height: 3.2rem;
//         width: 3.2rem;
//       `,
//     })}
//   }
// `;

// Primary Button
const PrimaryButton = styled.button`
  ${baseStyles};

  background-color: ${palette.primaryBrand};
  color: ${palette.buttonTextPrimary};
  border: 0.01rem solid ${palette.primaryBrand};

  &:hover {
    background-color: ${palette.buttonPrimaryHover};
    border: 0.01rem solid ${palette.buttonPrimaryHover};
  }

  &:focus {
    border: 0.02rem solid ${palette.buttonPrimaryFocused};
  }

  &:active {
    background-color: ${palette.buttonPrimaryPressed};
    border: 0.01rem solid ${palette.buttonPrimaryPressed};
  }

  &[disabled] {
    background-color: ${palette.buttonPrimaryDisabled};
    border: 0.01rem solid ${palette.buttonPrimaryDisabled};
    color: ${palette.buttonTextPrimaryDisabled};
  }
`;

// Secondary Button
const SecondaryButton = styled.button`
  ${baseStyles};

  background: transparent;
  border: 0.01rem solid ${palette.primaryBrand};
  color: ${palette.buttonTextSecondary};

  &:hover {
    border: 0.02rem solid ${palette.buttonSecondaryHover};
  }

  &:focus {
    border: 0.02rem solid ${palette.buttonSecondaryFocused};
  }

  &:active {
    border: 0.02rem solid ${palette.buttonSecondaryPressed};
  }

  &[disabled] {
    border: 0.02rem solid ${palette.buttonTextSecondaryDisabled};
    color: ${palette.buttonTextSecondaryDisabled};
  }
`;

// Tertiary Button (Brand)
const TertiaryBrandButton = styled.button`
  ${baseStyles};

  color: ${palette.primaryBrand};
  border: 0.01rem solid transparent;
  background: transparent;

  &:hover {
    background-color: ${palette.buttonTertiaryBrandHover};
    border: 0.01rem solid ${palette.buttonTertiaryBrandHover};
  }

  &:active {
    background-color: ${palette.buttonTertiaryBrandPressed};
    border: 0.01rem solid ${palette.buttonTertiaryBrandPressed};
  }

  &[disabled] {
    color: ${palette.buttonTextSecondaryDisabled};
  }
`;

// Tertiary Button (White)
const TertiaryWhiteButton = styled.button`
  ${baseStyles};

  color: ${palette.primaryText};
  border: 0.01rem solid transparent;
  background: transparent;

  &:hover {
    background-color: ${palette.buttonTertiaryWhiteHover};
    border: 0.01rem solid ${palette.buttonTertiaryWhiteHover};
  }

  &:active {
    background-color: ${palette.buttonTertiaryWhitePressed};
    border: 0.01rem solid ${palette.buttonTertiaryWhitePressed};
    color: ${palette.buttonTextTertiary};
  }

  &[disabled] {
    color: ${palette.buttonTextTertiaryDisabled};
  }
`;

// Primary Danger Button
const PrimaryDangerButton = styled.button`
  ${baseStyles};

  color: ${palette.buttonTextPrimary};
  border: 0.01rem solid ${palette.buttonDanger};
  background-color: ${palette.buttonDanger};

  &:hover {
    background-color: ${palette.buttonDangerHover};
    border: 0.01rem solid ${palette.buttonDangerHover};
  }

  &:focus {
    background-color: ${palette.buttonDangerFocused};
    border: 0.02rem solid ${palette.buttonDangerFocused};
  }

  &:active {
    background-color: ${palette.buttonDangerPressed};
    border: 0.01rem solid ${palette.buttonDangerPressed};
  }

  &[disabled] {
    background-color: ${palette.buttonDangerDisabled};
    border: 0.01rem solid ${palette.buttonDangerDisabled};
    color: ${palette.buttonTextPrimaryDisabled};
  }
`;

// Secondary Danger Button
const SecondaryDangerButton = styled.button`
  ${baseStyles};

  color: ${palette.buttonDanger};
  border: 0.01rem solid ${palette.buttonDanger};
  background-color: transparent;

  &:hover {
    border: 0.01rem solid ${palette.buttonDangerHover};
    color: ${palette.buttonDangerHover};
  }

  &:focus {
    border: 0.02rem solid ${palette.buttonDangerFocused};
  }

  &:active {
    background-color: transparent;
    border: 0.01rem solid ${palette.buttonDangerPressed};
  }

  &[disabled] {
    color: ${palette.buttonTextPrimaryDisabled};
    border: 0.01rem solid ${palette.buttonTextPrimaryDisabled};
  }
`;

// Tertiary Danger Button (Brand)
const TertiaryDangerButton = styled.button`
  ${baseStyles};

  color: ${palette.buttonDanger};
  border: 0.01rem solid transparent;
  background: transparent;

  &:hover {
    background: ${palette.buttonTertiaryWhiteHover};
  }

  &:active {
    background-color: ${palette.buttonTertiaryWhitePressed};
    border: 0.02rem solid ${palette.buttonTertiaryWhitePressed};
  }

  &[disabled] {
    color: ${palette.buttonTextPrimaryDisabled};
  }
`;

// Tertiary Danger Button (Brand)
const TertiaryDarkButton = styled.button`
  ${baseStyles};

  color: ${palette.primaryText};
  border: 0.01rem solid transparent;
  background: transparent;

  &:hover {
    background-color: ${palette.buttonTertiaryDarkHover};
    border: 0.01rem solid ${palette.buttonTertiaryDarkHover};
  }

  &:active {
    background-color: ${palette.buttonTertiaryDarkPressed};
    border: 0.01rem solid ${palette.buttonTertiaryDarkPressed};
    color: ${palette.buttonTextTertiary};
  }

  &[disabled] {
    color: ${palette.buttonTextTertiaryDisabled};
  }
`;

const Button = forwardRef(
  (
    {
      children,
      disabled,
      // gaEvent,
      onClick,
      type,
      variant,
      // icon,
      // iconRight,
      // loading,
      // iconOnly,
      ...props
    },
    ref,
  ) => {
    const noop = () => {};
    const handleClick = (event) => {
      // !disabled && gaEvent && ReactGA.event(gaEvent);

      return !disabled && onClick ? onClick(event) : noop;
    };

    // Remove title and id from icons since only the button needs it
    // const { title, id, ...iconProps } = props || {};

    // const buttonContent = (
    //   <>
    //     {icon && !iconRight && children && <LeftIcon icon={icon} {...iconProps} />}
    //     {children || <IconOnly icon={icon} {...iconProps} />}
    //     {icon && iconRight && <RightIcon icon={icon} {...iconProps} />}
    //   </>
    // );
    const buttonContent = children;

    // if (loading) {
    //   return (
    //     <LoadingButton {...props} type={type} ref={ref} disabled>
    //       <SpinnerIcon />
    //     </LoadingButton>
    //   );
    // }

    if (variant === BUTTON_VARIANT_PRIMARY) {
      return (
        <PrimaryButton {...props} onClick={handleClick} type={type} disabled={disabled} ref={ref}>
          {buttonContent}
        </PrimaryButton>
      );
    }

    if (variant === BUTTON_VARIANT_SECONDARY) {
      return (
        <SecondaryButton {...props} onClick={handleClick} type={type} disabled={disabled} ref={ref}>
          {buttonContent}
        </SecondaryButton>
      );
    }

    if (variant === BUTTON_VARIANT_TERTIARY) {
      return (
        <TertiaryBrandButton
          {...props}
          onClick={handleClick}
          type={type}
          disabled={disabled}
          ref={ref}
        >
          {buttonContent}
        </TertiaryBrandButton>
      );
    }

    if (variant === BUTTON_VARIANT_TERTIARY_WHITE) {
      return (
        <TertiaryWhiteButton
          {...props}
          onClick={handleClick}
          type={type}
          disabled={disabled}
          ref={ref}
        >
          {buttonContent}
        </TertiaryWhiteButton>
      );
    }

    if (variant === BUTTON_VARIANT_PRIMARY_DANGER) {
      return (
        <PrimaryDangerButton
          {...props}
          onClick={handleClick}
          type={type}
          disabled={disabled}
          ref={ref}
        >
          {buttonContent}
        </PrimaryDangerButton>
      );
    }

    if (variant === BUTTON_VARIANT_SECONDARY_DANGER) {
      return (
        <SecondaryDangerButton
          {...props}
          onClick={handleClick}
          type={type}
          disabled={disabled}
          ref={ref}
        >
          {buttonContent}
        </SecondaryDangerButton>
      );
    }

    if (variant === BUTTON_VARIANT_TERTIARY_DANGER) {
      return (
        <TertiaryDangerButton
          {...props}
          onClick={handleClick}
          type={type}
          disabled={disabled}
          ref={ref}
        >
          {buttonContent}
        </TertiaryDangerButton>
      );
    }

    // Only used for the notification button
    if (variant === BUTTON_VARIANT_TERTIARY_DARK) {
      return (
        <TertiaryDarkButton
          {...props}
          onClick={handleClick}
          type={type}
          disabled={disabled}
          ref={ref}
        >
          {buttonContent}
        </TertiaryDarkButton>
      );
    }

    return (
      <PrimaryButton {...props} onClick={handleClick} type={type} disabled={disabled} ref={ref}>
        {buttonContent}
      </PrimaryButton>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  gaEvent: PropTypes.object,
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  iconRight: PropTypes.bool,
  iconSize: PropTypes.number,
  id: PropTypes.string.isRequired, // for selenium tests
  loading: PropTypes.bool,
  minwidth: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    BUTTON_ICON_SIZE,
    BUTTON_SIZE_SMALL,
    BUTTON_SIZE_MEDIUM,
    BUTTON_SIZE_LARGE,
  ]),
  transparent: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    BUTTON_VARIANT_PRIMARY_DANGER,
    BUTTON_VARIANT_PRIMARY,
    BUTTON_VARIANT_SECONDARY_DANGER,
    BUTTON_VARIANT_SECONDARY,
    BUTTON_VARIANT_TERTIARY_DANGER,
    BUTTON_VARIANT_TERTIARY_DARK,
    BUTTON_VARIANT_TERTIARY_WHITE,
    BUTTON_VARIANT_TERTIARY,
  ]),
};

Button.defaultProps = {
  size: BUTTON_SIZE_MEDIUM,
  type: 'button',
  variant: BUTTON_VARIANT_PRIMARY,
};

export default Button;

export const ModalSubmitButton = styled(Button)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.2rem;
  width: 24.8rem;
`;
