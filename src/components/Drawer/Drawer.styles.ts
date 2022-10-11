import * as DialogPrimitive from '@radix-ui/react-dialog';
// import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DrawerPortal = styled(DialogPrimitive.Portal)``;
export const DrawerContainer = styled(DialogPrimitive.Root)``;
export const DrawerTrigger = styled(DialogPrimitive.Trigger)``;

export const DrawerOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  &:focus {
    box-shadow: none;
  }
`;
// const motionDrawerContent = motion(DialogPrimitive.Content);
export const DrawerContent = styled(DialogPrimitive.Content)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;

  &:focus {
    box-shadow: none;
  }
`;
