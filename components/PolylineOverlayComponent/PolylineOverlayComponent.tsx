import { CanvasOverlay } from 'react-map-gl';
import React from 'react';
import { Location } from 'modules/domains/models/Itinerary';

export type PolylineOverlayType = {
  points: number[][];
  color?: string;
  lineWidth?: number;
  renderWhileDragging?: boolean;
};

const PolylineOverlay = (props: PolylineOverlayType) => {
  // @ts-ignore
  const handleRedraw = ({ width, height, ctx, isDragging, project }) => {
    const {
      points,
      color = 'red',
      lineWidth = 2,
      renderWhileDragging = true
    } = props;

    const context = ctx as CanvasRenderingContext2D;
    context.clearRect(0, 0, width, height);
    context.globalCompositeOperation = 'lighter';

    if ((renderWhileDragging || !isDragging) && points) {
      context.lineWidth = lineWidth;
      context.strokeStyle = color;
      context.beginPath();
      points.forEach((point) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
        const pixel = project([point[0], point[1]]);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        context.lineTo(pixel[0], pixel[1]);
      });
      context.stroke();
    }
  };
  return <CanvasOverlay redraw={handleRedraw} />;
};

export default PolylineOverlay;
