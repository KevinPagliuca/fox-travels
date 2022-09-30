import { css } from 'styled-components';

export const logoAnimation = css`
  @-webkit-keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 157.44732666015625px;
      stroke-dasharray: 157.44732666015625px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 157.44732666015625px;
    }
  }

  @keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 157.44732666015625px;
      stroke-dasharray: 157.44732666015625px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 157.44732666015625px;
    }
  }

  .logo-animation-1 {
    -webkit-animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
      animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
    animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
      animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
  }

  @-webkit-keyframes animate-svg-stroke-2 {
    0% {
      stroke-dashoffset: 59.5580940246582px;
      stroke-dasharray: 59.5580940246582px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 59.5580940246582px;
    }
  }

  @keyframes animate-svg-stroke-2 {
    0% {
      stroke-dashoffset: 59.5580940246582px;
      stroke-dasharray: 59.5580940246582px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 59.5580940246582px;
    }
  }

  @-webkit-keyframes animate-svg-fill-2 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  @keyframes animate-svg-fill-2 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  .logo-animation-2 {
    -webkit-animation: animate-svg-stroke-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s both,
      animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
    animation: animate-svg-stroke-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s both,
      animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
  }

  @-webkit-keyframes animate-svg-stroke-3 {
    0% {
      stroke-dashoffset: 64.4558334350586px;
      stroke-dasharray: 64.4558334350586px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 64.4558334350586px;
    }
  }

  @keyframes animate-svg-stroke-3 {
    0% {
      stroke-dashoffset: 64.4558334350586px;
      stroke-dasharray: 64.4558334350586px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 64.4558334350586px;
    }
  }

  @-webkit-keyframes animate-svg-fill-3 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-3 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-3 {
    -webkit-animation: animate-svg-stroke-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s both,
      animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
    animation: animate-svg-stroke-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s both,
      animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
  }

  @-webkit-keyframes animate-svg-stroke-4 {
    0% {
      stroke-dashoffset: 61.9960823059082px;
      stroke-dasharray: 61.9960823059082px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 61.9960823059082px;
    }
  }

  @keyframes animate-svg-stroke-4 {
    0% {
      stroke-dashoffset: 61.9960823059082px;
      stroke-dasharray: 61.9960823059082px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 61.9960823059082px;
    }
  }

  @-webkit-keyframes animate-svg-fill-4 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-4 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-4 {
    -webkit-animation: animate-svg-stroke-4 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s both,
      animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
    animation: animate-svg-stroke-4 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s both,
      animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
  }

  @-webkit-keyframes animate-svg-stroke-5 {
    0% {
      stroke-dashoffset: 64.38550186157227px;
      stroke-dasharray: 64.38550186157227px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 64.38550186157227px;
    }
  }

  @keyframes animate-svg-stroke-5 {
    0% {
      stroke-dashoffset: 64.38550186157227px;
      stroke-dasharray: 64.38550186157227px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 64.38550186157227px;
    }
  }

  @-webkit-keyframes animate-svg-fill-5 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-5 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-5 {
    -webkit-animation: animate-svg-stroke-5 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s both,
      animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
    animation: animate-svg-stroke-5 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s both,
      animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2000000000000002s both;
  }

  @-webkit-keyframes animate-svg-stroke-6 {
    0% {
      stroke-dashoffset: 60.7785758972168px;
      stroke-dasharray: 60.7785758972168px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 60.7785758972168px;
    }
  }

  @keyframes animate-svg-stroke-6 {
    0% {
      stroke-dashoffset: 60.7785758972168px;
      stroke-dasharray: 60.7785758972168px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 60.7785758972168px;
    }
  }

  @-webkit-keyframes animate-svg-fill-6 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-6 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-6 {
    -webkit-animation: animate-svg-stroke-6 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both,
      animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
    animation: animate-svg-stroke-6 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both,
      animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
  }

  @-webkit-keyframes animate-svg-stroke-7 {
    0% {
      stroke-dashoffset: 41.43526840209961px;
      stroke-dasharray: 41.43526840209961px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 41.43526840209961px;
    }
  }

  @keyframes animate-svg-stroke-7 {
    0% {
      stroke-dashoffset: 41.43526840209961px;
      stroke-dasharray: 41.43526840209961px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 41.43526840209961px;
    }
  }

  @-webkit-keyframes animate-svg-fill-7 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-7 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-7 {
    -webkit-animation: animate-svg-stroke-7 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s both,
      animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
    animation: animate-svg-stroke-7 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s both,
      animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.4000000000000001s both;
  }

  @-webkit-keyframes animate-svg-stroke-8 {
    0% {
      stroke-dashoffset: 70.39457702636719px;
      stroke-dasharray: 70.39457702636719px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 70.39457702636719px;
    }
  }

  @keyframes animate-svg-stroke-8 {
    0% {
      stroke-dashoffset: 70.39457702636719px;
      stroke-dasharray: 70.39457702636719px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 70.39457702636719px;
    }
  }

  @-webkit-keyframes animate-svg-fill-8 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-8 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-8 {
    -webkit-animation: animate-svg-stroke-8 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s both,
      animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
    animation: animate-svg-stroke-8 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s both,
      animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
  }

  @-webkit-keyframes animate-svg-stroke-9 {
    0% {
      stroke-dashoffset: 55.497764587402344px;
      stroke-dasharray: 55.497764587402344px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 55.497764587402344px;
    }
  }

  @keyframes animate-svg-stroke-9 {
    0% {
      stroke-dashoffset: 55.497764587402344px;
      stroke-dasharray: 55.497764587402344px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 55.497764587402344px;
    }
  }

  @-webkit-keyframes animate-svg-fill-9 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-9 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-9 {
    -webkit-animation: animate-svg-stroke-9 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s both,
      animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
    animation: animate-svg-stroke-9 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s both,
      animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
  }

  @-webkit-keyframes animate-svg-stroke-10 {
    0% {
      stroke-dashoffset: 70.26795959472656px;
      stroke-dasharray: 70.26795959472656px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 70.26795959472656px;
    }
  }

  @keyframes animate-svg-stroke-10 {
    0% {
      stroke-dashoffset: 70.26795959472656px;
      stroke-dasharray: 70.26795959472656px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 70.26795959472656px;
    }
  }

  @-webkit-keyframes animate-svg-fill-10 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-10 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-10 {
    -webkit-animation: animate-svg-stroke-10 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s both,
      animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
    animation: animate-svg-stroke-10 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s both,
      animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7000000000000002s both;
  }

  @-webkit-keyframes animate-svg-stroke-11 {
    0% {
      stroke-dashoffset: 44.694332122802734px;
      stroke-dasharray: 44.694332122802734px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 44.694332122802734px;
    }
  }

  @keyframes animate-svg-stroke-11 {
    0% {
      stroke-dashoffset: 44.694332122802734px;
      stroke-dasharray: 44.694332122802734px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 44.694332122802734px;
    }
  }

  @-webkit-keyframes animate-svg-fill-11 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-11 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-11 {
    -webkit-animation: animate-svg-stroke-11 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both,
      animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
    animation: animate-svg-stroke-11 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both,
      animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
  }

  @-webkit-keyframes animate-svg-stroke-12 {
    0% {
      stroke-dashoffset: 64.83242797851562px;
      stroke-dasharray: 64.83242797851562px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 64.83242797851562px;
    }
  }

  @keyframes animate-svg-stroke-12 {
    0% {
      stroke-dashoffset: 64.83242797851562px;
      stroke-dasharray: 64.83242797851562px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 64.83242797851562px;
    }
  }

  @-webkit-keyframes animate-svg-fill-12 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @keyframes animate-svg-fill-12 {
    0% {
      fill: transparent;
    }

    100% {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .logo-animation-12 {
    -webkit-animation: animate-svg-stroke-12 1s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.3199999999999998s both,
      animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
    animation: animate-svg-stroke-12 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s both,
      animate-svg-fill-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.9000000000000001s both;
  }
`;
