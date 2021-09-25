import { CanvasOverlay } from 'react-map-gl';
import React from 'react';

export type PolylineOverlayType = {
  points: number[][];
  color?: string;
  lineWidth?: number;
  renderWhileDragging?: boolean;
};
export type OverlayType = {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  project: (array: number[]) => number[];
  isDragging: boolean;
};

const PolylineOverlay = (props: PolylineOverlayType) => {
  const handleRedraw = (e: OverlayType) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { width, height, ctx, isDragging, project } = e;
    const {
      points,
      color = 'red',
      lineWidth = 2,
      renderWhileDragging = true
    } = props;

    const context = ctx;
    context.clearRect(0, 0, width, height);
    context.globalCompositeOperation = 'lighter';

    if ((renderWhileDragging || !isDragging) && points) {
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.beginPath();
      points.forEach((point) => {
        const pixel = project([point[0], point[1]]);
        context.lineTo(pixel[0], pixel[1]);
      });
      context.stroke();
    }
  };
  return <CanvasOverlay redraw={handleRedraw} />;
};

export default PolylineOverlay;
