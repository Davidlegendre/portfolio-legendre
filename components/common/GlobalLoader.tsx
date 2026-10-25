// components/GlobalLoader.tsx
'use client'
import { Overlay, Loader, Center } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { useLoadingStore } from '@/lib/Stores/useLoadingStore';

export function GlobalLoader() {
  const { isLoading } = useLoadingStore();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) {
      // Guardar el elemento que tenía focus antes
      const previouslyFocusedElement = document.activeElement as HTMLElement;
      
      // Enfocar el overlay
      if (overlayRef.current) {
        overlayRef.current.focus();
      }
      
      // Función para capturar el Tab y mantener el focus
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab' || e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          // Mantener el focus en el overlay
          if (overlayRef.current) {
            overlayRef.current.focus();
          }
        }
      };

      // Agregar el event listener
      document.addEventListener('keydown', handleKeyDown, true);
      
      // Cleanup: restaurar focus y remover listener
      return () => {
        document.removeEventListener('keydown', handleKeyDown, true);
        // Restaurar el focus al elemento anterior si existe
        if (previouslyFocusedElement && previouslyFocusedElement.focus) {
          previouslyFocusedElement.focus();
        }
      };
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <Overlay
      ref={overlayRef}
      fixed
      zIndex={99999999}
      backgroundOpacity={0.7}
      tabIndex={0} // Hacer el overlay focuseable
      style={{ outline: 'none' }} // Quitar el outline del focus
    >
      <Center h="100vh">
        <Loader color="rgba(204, 0, 0, 1)" />
      </Center>
    </Overlay>
  );
}