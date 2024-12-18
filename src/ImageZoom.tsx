"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImageZoomBaseProps = {
  textMessage?: string;
  textBoxStyle?: React.CSSProperties;
} & React.ImgHTMLAttributes<HTMLImageElement>;

type ImageZoomProps<TAs extends React.ElementType = "img"> = ImageZoomBaseProps & {
  as?: TAs;
} & Omit<React.ComponentPropsWithRef<TAs>, keyof ImageZoomBaseProps>;

function ImageZoom<TAs extends React.ElementType = "img">({
  as,
  textMessage = "Click outside the image to close the zoom.",
  textBoxStyle,
  ...props
}: ImageZoomProps<TAs>) {
  const [isZoomed, setIsZoomed] = useState(false);

  const ImageComponent = as || "img";

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <>
      <ImageComponent
        style={{
          cursor: "zoom-in",
        }}
        onClick={toggleZoom}
        {...props}
      />

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: "0",
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            }}
            onClick={toggleZoom}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                position: "relative",
                maxHeight: "100%",
                maxWidth: "100%",
                overflow: "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={props.src}
                  alt={props.alt}
                  style={{
                    maxHeight: "90vh",
                    maxWidth: "90vw",
                    objectFit: "contain",
                    cursor: "zoom-out",
                  }}
                />

                {textMessage && (
                  <p
                    style={{
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "8px",
                      borderRadius: "8px",
                      textAlign: "center",
                      ...props.textBoxStyle,
                    }}
                  >
                    {textMessage}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ImageZoom;