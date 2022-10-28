import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { IDrawerProps } from './Drawer.intefaces';
import * as S from './Drawer.styles';

export const Drawer = ({
  children,
  isOpen,
  onOpenChange,
  triggerComponent,
  triggerClassName
}: IDrawerProps) => {
  // const dragDirection = React.useRef<'x' | 'y'>();

  // const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
  //   if (dragDirection.current === 'x' && info.offset.x < -100) {
  //     onOpenChange(false);
  //   }
  // };

  return (
    <S.DrawerContainer open={isOpen} onOpenChange={onOpenChange}>
      <S.DrawerTrigger className={triggerClassName}>{triggerComponent}</S.DrawerTrigger>
      <AnimatePresence mode="wait">
        {isOpen && (
          <S.DrawerPortal forceMount>
            <S.DrawerOverlay forceMount asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, backdropFilter: 'blur(2px)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </S.DrawerOverlay>
            <S.DrawerContent forceMount asChild>
              <motion.div
                initial="hide"
                exit="hide"
                animate={isOpen ? 'show' : 'hide'}
                transition={{ duration: 0.3 }}
                // drag="x"
                // dragConstraints={{ left: 0, right: 0 }}
                // dragDirectionLock
                // onDirectionLock={(axis) => {
                //   dragDirection.current = axis;
                // }}
                // onDragEnd={onDragEnd}
                variants={{
                  show: { opacity: 1, translateX: 0 },
                  hide: { opacity: 0, translateX: '-100%' }
                }}
              >
                {children}
              </motion.div>
            </S.DrawerContent>
          </S.DrawerPortal>
        )}
      </AnimatePresence>
    </S.DrawerContainer>
  );
};
