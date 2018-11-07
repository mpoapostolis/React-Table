import { css } from "emotion";
import { mq } from "./breakPoints";

const ROW_HEIGHT = `45px`;

export const container = css`
  width: 80%;
  ${mq.large(css`
    font-size: normal;
  `)}

  ${mq.medium(css`
    font-size: small;
  `)}

  ${mq.small(css`
    font-size: small;
  `)}

  ${mq.tallPhone(css`
    font-size: xx-small;
  `)}
`;

export const filters = css``;

export const table = css`
  position: relative;
  width: 100%;
  border: solid 1px red;
  height: calc(60vh + ${ROW_HEIGHT});
  border-spacing: 0px;
`;

export const thead = css``;

export const th = css`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const tbody = css`
  position: absolute;
  width: 100%;
  scroll-behavior: smooth;
  max-height: 60vh;
  overflow-y: scroll;
  box-shadow: inset -2px -2px 2px 2px #0001, inset 2px 2px 2px 2px #0001;
`;

export const tr = css`
  display: flex;
  height: ${ROW_HEIGHT};
  align-items: center;
`;

export const trBody = css`
  ${tr};
  &:hover {
    box-shadow: 1px 1px 1px 1px #0005;
  }
  &:nth-child(odd) {
    background: #0001;
  }
`;

export const td = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
