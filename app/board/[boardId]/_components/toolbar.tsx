import { Skeleton } from '@/components/ui/skeleton';
import { ToolButton } from './tool-button';
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from 'lucide-react';
import { CanvasMode, CanvasState, LayerType } from '@/types/canvas';

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
}

export const Toolbar = ({
  canvasState,
  setCanvasState,
  canUndo,
  canRedo,
  undo,
  redo,
}: ToolbarProps) => {
  return (
    <div className='absolute top-[50%] left-2 -translate-y-[50%] flex flex-col gap-y-4'>
      <div className='flex flex-col items-center gap-y-1 p-1 rounded-md shadow-md bg-white'>
        <ToolButton
          label='Select'
          icon={MousePointer2}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.SectionNet ||
            canvasState.mode === CanvasMode.Resizing
          }
          onClick={() => {
            setCanvasState({
              mode: CanvasMode.None,
            });
          }}
        />
        <ToolButton
          label='Text'
          icon={Type}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
        />
        <ToolButton
          label='Sticky note'
          icon={StickyNote}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
        />
        <ToolButton
          label='Pencil'
          icon={Pencil}
          isActive={canvasState.mode === CanvasMode.Pencil}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
        />
        <ToolButton
          label='Rectangle'
          icon={Square}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
        />
        <ToolButton
          label='Ellipse'
          icon={Circle}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
          onClick={() => {
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            });
          }}
        />
      </div>
      <div className='flex flex-col items-center p-2 shadow-md rounded-md bg-white'>
        <ToolButton
          label='Undo'
          icon={Undo2}
          isActive={false}
          onClick={undo}
          isDisabled={!canUndo}
        />
        <ToolButton
          label='Redo'
          icon={Redo2}
          isActive={false}
          onClick={redo}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className='absolute top-[50%] left-2 -translate-y-[50%] flex flex-col gap-y-4'>
      <div className='h-[100px] w-[60px] flex flex-col items-center gap-y-1 p-1 rounded-md shadow-md bg-white'>
        <Skeleton className='h-full w-full bg-muted-400' />
      </div>
      <div className='h-[70px] w-[60px] flex flex-col items-center p-2 shadow-md rounded-md bg-white'>
        <Skeleton className='h-full w-full bg-muted-400' />
      </div>
    </div>
  );
};
