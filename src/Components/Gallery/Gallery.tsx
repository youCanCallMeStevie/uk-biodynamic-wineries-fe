import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

import { GalleryContainer, ImageWrapper, Next, Prev } from "./Gallery.elements";

interface GalleryProps {
  images: ImageData[];
  infiniteLoop?: boolean;
  labelStyle?: React.CSSProperties;
  buttonContainerStyle?: React.CSSProperties;
  buttonLeftStyle?: React.CSSProperties;
}

function Gallery({
  images,
  infiniteLoop = true,
  labelStyle = {},
  buttonContainerStyle = {},
  buttonLeftStyle = {},
}: GalleryProps) {
  const [checked, setChecked] = useState("_0");
  const [indexInfiniteLoop, setIndexInfiniteLoop] = useState(0);

  function getCheckBoxByindexInfiniteLoop(index: number) {
    return document.getElementById(`_${index}`) as HTMLInputElement;
  }

  useEffect(() => {
    const checkBox = getCheckBoxByindexInfiniteLoop(indexInfiniteLoop - 1);

    if (checkBox) {
      checkBox.checked = true;
    }
  }, [indexInfiniteLoop]);

  const setInfiniteLoop = useCallback(() => {
    const next = indexInfiniteLoop % images.length;

    setIndexInfiniteLoop(next + 1);
  }, [images.length, indexInfiniteLoop]);

  useEffect(() => {
    if (infiniteLoop) {
      const interval = setInterval(setInfiniteLoop, 3000);

      return () => clearInterval(interval);
    }

    return () => undefined;
  }, [infiniteLoop, setInfiniteLoop]);

  function handleCheck(name: string) {
    setChecked(name);
  }

  function createInputRadio(index: number) {
    const id = `_${index}`;

    return styled.input.attrs({
      name: "images",
      id,
      type: "radio",
    })`
      &:checked {
        ~ #__${index} {
          visibility: visible;
          animation: scroll 1s ease-in-out;
        }
      }
    `;
  }

  function renderInputRadio(index: number) {
    const id = `_${index}`;
    const InputRadio = createInputRadio(index);

    return (
      <InputRadio
        checked={checked === id}
        value={checked}
        onChange={() => handleCheck(id)}
      />
    );
  }

  function renderImage(value: ImageData, index: number) {
    const prevIndex = index === 0 ? `_${images.length - 1}` : `_${index - 1}`;
    const nextIndex = index === images.length - 1 ? `_${0}` : `_${index + 1}`;

    return (
      <div key={`__${index.toString()}`}>
        {renderInputRadio(index)}
        <ImageWrapper image={value} className="slide_img" id={`__${index}`}>
          {!infiniteLoop && (
            <>
              <Prev style={labelStyle} className="prev" htmlFor={prevIndex}>
                <div style={buttonContainerStyle}>
                  <span style={buttonLeftStyle} />
                </div>
              </Prev>
              <Next style={labelStyle} className="next" htmlFor={nextIndex}>
                <div style={buttonContainerStyle}>
                  <span style={buttonLeftStyle} />
                </div>
              </Next>
            </>
          )}
        </ImageWrapper>
      </div>
    );
  }

  return (
    <GalleryContainer>
      {images.map((value, index) => renderImage(value, index))}
    </GalleryContainer>
  );
}

export default Gallery;
