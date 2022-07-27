import { useState, useRef, useEffect } from "react";

export default function withOutsideClick(WrappedComponent) {
  const Component = (props) => {
    const [toggle, toggleOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref.current.contains(event.target)) {
          toggleOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
      <WrappedComponent
        toggleDropDown={toggle}
        setToggleDropDown={toggleOpen}
        ref={ref}
        {...props}
      />
    );
  };
  return Component;
}
