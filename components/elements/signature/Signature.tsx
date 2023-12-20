import React, { useRef, useEffect, FC } from "react";

import { cn } from "@/components/util";
// @ts-ignore
import SignaturePad, { SignaturePadOptions } from "signature_pad";
// @ts-ignore
import trimCanvas from "trim-canvas";

import { Label, LabelProps } from "@elements/label";

export interface SignatureCanvasProps extends SignaturePadOptions {
  canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
  clearOnResize?: boolean;
  onGetImage?: any;
  texts?: { clear?: string };
  labelProps?: LabelProps;
  label?: any;
}

export const Signature: FC<SignatureCanvasProps> = ({
  canvasProps,
  clearOnResize = false,
  onGetImage,
  texts,
  label,
  labelProps,
  ...sigPadProps
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sigPadRef = useRef<SignaturePad | null>(null);

  const checkClearOnResize = () => {
    if (!clearOnResize) {
      return;
    }
    resizeCanvas();
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas && canvas.parentElement) {
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      if (typeof canvasProps?.width === "undefined") {
        // Full width of the parent element
        canvas.width = canvas.parentElement.offsetWidth * ratio;
      } else {
        // Use specified width
        canvas.width = Number(canvasProps.width) * ratio;
      }
      if (typeof canvasProps?.height === "undefined") {
        canvas.height = canvas.parentElement.offsetHeight * ratio;
      } else {
        canvas.height = Number(canvasProps.height) * ratio; // Ensure it's treated as a number
      }

      canvas.getContext("2d")?.scale(ratio, ratio);
      clear();
    }
  };
  const getTrimmedCanvas = (): HTMLCanvasElement => {
    const canvas = canvasRef.current;
    if (!canvas) {
      throw new Error("Canvas reference is null");
    }
    const copy = document.createElement("canvas");
    copy.width = canvas.width;
    copy.height = canvas.height;
    copy.getContext("2d")?.drawImage(canvas, 0, 0);
    return trimCanvas(copy);
  };
  const getSignatureImage = () => {
    const trimmedCanvas = getTrimmedCanvas();
    return trimmedCanvas.toDataURL();
  };
  useEffect(() => {
    if (onGetImage) {
      onGetImage(getSignatureImage);
    }
  }, [onGetImage]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      sigPadRef.current = new SignaturePad(canvas, sigPadProps);
      resizeCanvas();
      window.addEventListener("resize", checkClearOnResize);
    }

    return () => {
      window.removeEventListener("resize", checkClearOnResize);
    };
  }, [sigPadProps]);

  const clear = () => sigPadRef.current?.clear();
  const isEmpty = () => !!sigPadRef.current?.isEmpty();
  const fromDataURL = (dataURL: string, options?: any) =>
    sigPadRef.current?.fromDataURL(dataURL, options);
  const toDataURL = (type?: string, encoderOptions?: any) =>
    sigPadRef.current?.toDataURL(type, encoderOptions);
  const fromData = (pointGroups: any[]) =>
    sigPadRef.current?.fromData(pointGroups);
  const toData = () => sigPadRef.current?.toData();

  return (
    <div className="hawa-w-full">
      {label && (
        <Label {...labelProps} className="hawa-mb-2">
          {label || "Signature"}
        </Label>
      )}
      <canvas
        ref={canvasRef}
        {...canvasProps}
        className={cn("hawa-rounded", canvasProps?.className)}
      />

      <div className="clickable-link hawa-w-fit" onClick={() => clear()}>
        {texts?.clear || "Clear"}
      </div>
    </div>
  );
};
