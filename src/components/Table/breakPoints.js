import { css } from "emotion";

const breakpoints = {
  tallPhone: 360,
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200
};

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = "max-width:";
  let suffix = "px";
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});
