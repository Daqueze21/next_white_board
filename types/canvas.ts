export type ColorType = {
  r: number;
  g: number;
  b: number;
};

export type CameraType = {
  x: number;
  y: number;
};

export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note,
}

export interface IPoint {
  x: number;
  y: number;
}

export interface IXYWHCoordinates extends IPoint {
  height: number;
  width: number;
}

export interface ILayers extends IXYWHCoordinates {
  type: LayerType;
  fill: ColorType;
  value?: string;
}

export interface IRectangleLayer extends ILayers {
  type: LayerType.Rectangle;
}

export interface IEllipseLayer extends ILayers {
  type: LayerType.Ellipse;
}

export interface IPathLayer extends ILayers {
  type: LayerType.Path;
  points: number[][];
}

export interface ITextLayer extends ILayers {
  type: LayerType.Text;
}

export interface INoteLayer extends ILayers {
  type: LayerType.Note;
}

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export enum CanvasMode {
  None,
  Pressing,
  SectionNet,
  Translating,
  Pencil,
  Resizing,
  Inserting,
}

export type CanvasState =
  | {
      mode: CanvasMode.Pressing;
      origin: IPoint;
    }
  | {
      mode: CanvasMode.SectionNet;
      origin: IPoint;
      current?: IPoint;
    }
  | {
      mode: CanvasMode.Translating;
      current?: IPoint;
    }
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.Pencil;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBounds: IXYWHCoordinates;
      corner: Side;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Rectangle
        | LayerType.Ellipse
        | LayerType.Text
        | LayerType.Note
    };


