
import React, { useEffect, useState } from "react";
export function FormSubmit() {
  const inputRef = React.createRef();

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <input type="text" name="" id="" ref={inputRef} />
    </div>
  );
}
