"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "./utils";

type ImageZoomBaseProps = {
  textMessage?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

type ImageZoomProps<TAs extends React.ElementType = "img"> = ImageZoomBaseProps & {
  as?: TAs;
} & Omit<React.ComponentPropsWithRef<TAs>, keyof ImageZoomBaseProps>;


function ImageZoom<TAs extends React.ElementType = "img">({
  as,
  textMessage = "Click outside the image to close the zoom.",
  className,
  ...props
}: ImageZoomProps<TAs>) {
  const [isZoomed, setIsZoomed] = useState(false);

  const ImageComponent = as || "img";

  const toggleZoom = () => setIsZoomed(!isZoomed)

  return (
    <>
      <ImageComponent
        className={cn("cursor-zoom-in", className)}
        onClick={toggleZoom}
        {...props}
      />

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={toggleZoom}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-h-full max-w-full overflow-auto"
              onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  src={props.src}
                  alt={props.alt}
                  className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
                />
                
                {textMessage && (
                  <p className="text-white bg-black bg-opacity-50 p-2 rounded-lg">
                    {textMessage}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ImageZoom;