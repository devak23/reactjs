import React from "react";

export const getLayouts = () => {
  return [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: false },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
}


