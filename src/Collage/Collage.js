import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

export default function Collage({
  fbimg1,
  fbimg2,
  fbimg3,
  fbimg4,
  fbimg5,
  fbimg6,
  fbimg7,
  fbimg8,
  fbimg9,
}) {
  const [photos, setPhotos] = useState([
    {
      src: fbimg1,
      width: 4,
      height: 3,
    },
    {
      src: fbimg2,
      width: 1,
      height: 1,
    },
    {
      src: fbimg3,
      width: 3,
      height: 4,
    },
    {
      src: fbimg4,
      width: 3,
      height: 4,
    },
    {
      src: fbimg5,
      width: 3,
      height: 4,
    },
    {
      src: fbimg6,
      width: 4,
      height: 3,
    },
    {
      src: fbimg7,
      width: 3,
      height: 4,
    },
    {
      src: fbimg8,
      width: 4,
      height: 3,
    },
    {
      src: fbimg9,
      width: 4,
      height: 3,
    },
  ]);
  const [items, setItems] = useState(photos);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  useEffect(() => {
    setItems([
      {
        src: fbimg1,
        width: 4,
        height: 3,
      },
      {
        src: fbimg2,
        width: 1,
        height: 1,
      },
      {
        src: fbimg3,
        width: 3,
        height: 4,
      },
      {
        src: fbimg4,
        width: 3,
        height: 4,
      },
      {
        src: fbimg5,
        width: 3,
        height: 4,
      },
      {
        src: fbimg6,
        width: 4,
        height: 3,
      },
      {
        src: fbimg7,
        width: 3,
        height: 4,
      },
      {
        src: fbimg8,
        width: 4,
        height: 3,
      },
      {
        src: fbimg9,
        width: 4,
        height: 3,
      },
    ]);
  }, [fbimg1, fbimg2, fbimg3, fbimg4, fbimg5, fbimg6, fbimg7, fbimg8, fbimg9]);

  return (
    <div>
      <center>
        <h3>Drag photo to rearrange</h3>
      </center>
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
    </div>
  );
}
