import React from "react";

export default function Filler() {
  return (
    <div>
      <form action="/uploadImages" method="post" enctype="multipart/form-data">
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
    </div>
  );
}
