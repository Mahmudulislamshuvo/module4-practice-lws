import { forwardRef, useImperativeHandle, useRef } from "react";

const AnotherInput = function (props, ref) {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));
  return (
    <>
      <input {...props} ref={realInputRef} />
    </>
  );
};

const forwordedInput = forwardRef(AnotherInput);

export default forwordedInput;
