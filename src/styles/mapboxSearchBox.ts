import { css } from 'styled-components';

export const MapboxSearchBoxStyles = css`
  .mapboxgl-ctrl-geocoder {
    width: 100%;
    font-size: 1rem;
    line-height: 100%;
    max-width: none;
    background: transparent;
    display: flex;
    align-items: center;

    .mapboxgl-ctrl-geocoder--icon-search {
      top: 50%;
      transform: translateY(-50%);

      fill: ${({ theme }) => theme.colors.body};
      transition: ${({ theme }) => theme.transitions.preset.default};

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    &:focus-within {
      color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};

      svg {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }

    &:focus {
      box-shadow: none !important;
    }
  }

  .mapboxgl-ctrl-geocoder--input {
    max-height: 3rem;
    min-height: 2.5rem;
    height: 100%;

    border: 0;
    outline: 0;
    font-size: 0.875rem;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.title};
    background: ${({ theme }) => theme.colors.tertiary};

    text-overflow: ellipsis;
    transition: ${({ theme }) => theme.transitions.preset.default};

    &::placeholder {
      color: ${({ theme }) => theme.colors.body};
      transition: ${({ theme }) => theme.transitions.preset.default};
    }

    &:focus {
      color: ${({ theme }) => theme.colors.primary} !important;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};

      &::placeholder {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .mapboxgl-ctrl-geocoder--button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    color: inherit;

    svg {
      margin-top: 4px;
      fill: ${({ theme }) => theme.colors.body};
      transition: ${({ theme }) => theme.transitions.preset.default};
    }

    &:not(:disabled):hover {
      background: transparent !important;
      color: ${({ theme }) => theme.colors.primary};

      .mapboxgl-ctrl-geocoder--icon-close {
        fill: ${({ theme }) => theme.colors.primary};

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .mapboxgl-ctrl-geocoder--icon {
    color: inherit;
    fill: inherit;
  }

  .mapboxgl-ctrl-geocoder .suggestions {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 4px;
    left: 0;
    list-style: none;
    margin: 0;
    position: absolute;
    width: 100%;
    top: calc(100% + 1rem);
    overflow: hidden;
    font-size: 1rem;

    transition: ${({ theme }) => theme.transitions.preset.default};

    > li {
      & + li {
        border-top: 1px solid ${({ theme }) => theme.colors.body};
      }

      &.active > a,
      & > a:hover {
        color: ${({ theme }) => theme.colors.tertiary};
        background-color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        cursor: pointer;
      }

      > a {
        cursor: default;
        display: block;
        padding: 8px 12px;
        color: ${({ theme }) => theme.colors.title};
        transition: ${({ theme }) => theme.transitions.preset.default};
      }
    }
  }

  .mapboxgl-ctrl-geocoder--powered-by {
    display: none !important;
  }

  .mapboxgl-ctrl-geocoder--icon-loading {
    fill: ${({ theme }) => theme.colors.primary} !important;

    path {
      fill: ${({ theme }) => theme.colors.primary} !important;
    }

    path:last-child {
      fill: ${({ theme }) => theme.colors.white} !important;
    }
  }
`;

export const MapboxControlsStyles = css`
  .mapboxgl-ctrl-group {
    background: transparent !important;
  }

  button.mapboxgl-ctrl-zoom-in {
    background: ${({ theme }) => theme.colors.tertiary} !important;
    transition: ${({ theme }) => theme.transitions.preset.default} !important;

    > span {
      background-image: url("data:image/svg+xml,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%0A%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z' /%3E%3C/svg%3E%0A") !important;
      transition: ${({ theme }) => theme.transitions.preset.default};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary} !important;

      > span {
        background-image: url("data:image/svg+xml,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23000'%0A%3E%3Cpath d='M14.5 8.5c-.75 0-1.5.75-1.5 1.5v3h-3c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h3v3c0 .75.75 1.5 1.5 1.5S16 19.75 16 19v-3h3c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-3v-3c0-.75-.75-1.5-1.5-1.5z' /%3E%3C/svg%3E%0A") !important;
      }
    }
  }

  button.mapboxgl-ctrl-zoom-out {
    background: ${({ theme }) => theme.colors.tertiary} !important;
    transition: ${({ theme }) => theme.transitions.preset.default} !important;

    > span {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23fff'%3E %3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E %3C/svg%3E") !important;
      transition: ${({ theme }) => theme.transitions.preset.default} !important;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary} !important;

      > span {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='29' height='29' viewBox='0 0 29 29' xmlns='http://www.w3.org/2000/svg' fill='%23000'%3E %3Cpath d='M10 13c-.75 0-1.5.75-1.5 1.5S9.25 16 10 16h9c.75 0 1.5-.75 1.5-1.5S19.75 13 19 13h-9z'/%3E %3C/svg%3E") !important;
      }
    }
  }

  button.mapboxgl-ctrl-fullscreen {
    background: ${({ theme }) => theme.colors.tertiary} !important;
    transition: ${({ theme }) => theme.transitions.preset.default} !important;

    > span {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23fff' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='168 48 208 48 208 88' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3Cline x1='152' y1='104' x2='208' y2='48' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3Cpolyline points='88 208 48 208 48 168' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3Cline x1='104' y1='152' x2='48' y2='208' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3Cpolyline points='208 168 208 208 168 208' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3Cline x1='152' y1='152' x2='208' y2='208' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3Cpolyline points='48 88 48 48 88 48' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3Cline x1='104' y1='104' x2='48' y2='48' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3C/svg%3E") !important;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary} !important;

      > span {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='%23000' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='168 48 208 48 208 88' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3Cline x1='152' y1='104' x2='208' y2='48' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3Cpolyline points='88 208 48 208 48 168' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3Cline x1='104' y1='152' x2='48' y2='208' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3Cpolyline points='208 168 208 208 168 208' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3Cline x1='152' y1='152' x2='208' y2='208' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3Cpolyline points='48 88 48 48 88 48' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/polyline%3E%3Cline x1='104' y1='104' x2='48' y2='48' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'%3E%3C/line%3E%3C/svg%3E") !important;
      }
    }
  }
`;
