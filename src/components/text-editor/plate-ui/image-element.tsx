'use client';

import React from 'react';

import { cn, withRef } from '@udecode/cn';
import { withHOC } from '@udecode/plate-common/react';
import { useDraggable } from '@udecode/plate-dnd';
import { Image, ImagePlugin, useMediaState } from '@udecode/plate-media/react';
import { ResizableProvider, useResizableStore } from '@udecode/plate-resizable';

import { Caption, CaptionTextarea } from './caption';
import { MediaPopover } from './media-popover';
import { PlateElement } from './plate-element';
import {
  Resizable,
  ResizeHandle,
  mediaResizeHandleVariants,
} from './resizable';

export const ImageElement = withHOC(
  ResizableProvider,
  withRef<typeof PlateElement>(
    ({ children, className, nodeProps, ...props }, ref) => {
      const { align = 'center', focused, readOnly, selected } = useMediaState();

      const width = useResizableStore().get.width();

      const { isDragging, handleRef } = useDraggable({
        element: props.element,
      });

      return (
        <MediaPopover plugin={ImagePlugin}>
          <PlateElement
           ref={ref as React.Ref<HTMLDivElement>}
            className={cn(className, 'py-2.5')}
            {...props}
          >
            <figure className="group relative m-0" contentEditable={false}>
              <Resizable
                align={align}
                options={{
                  align,
                  readOnly,
                }}
              >
                <ResizeHandle
                  className={mediaResizeHandleVariants({ direction: 'left' })}
                  options={{ direction: 'left' }}
                />
                <Image
                  ref={handleRef}
                  className={cn(
                    'block w-full max-w-full cursor-pointer object-cover px-0',
                    'rounded-sm',
                    focused && selected && 'ring-2 ring-ring ring-offset-2',
                    isDragging && 'opacity-50'
                  )}
                  alt=""
                  {...nodeProps}
                />
                <ResizeHandle
                  className={mediaResizeHandleVariants({
                    direction: 'right',
                  })}
                  options={{ direction: 'right' }}
                />
              </Resizable>

              <Caption style={{ width }} align={align}>
                <CaptionTextarea
                  readOnly={readOnly}
                  onFocus={(e) => {
                    e.preventDefault();
                  }}
                  placeholder="Write a caption..."
                />
              </Caption>
            </figure>

            {children}
          </PlateElement>
        </MediaPopover>
      );
    }
  )
);
