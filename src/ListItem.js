import { forwardRef } from "react";
import withOusideClick from "./withOusideClick";

const ListItem = forwardRef(
  ({ toggleDropDown, setToggleDropDown, name, id }, ref) => {
    const handleActionClick = (e) => {
      console.log(`${id} : ${e.target.getAttribute("name")}`);
      setToggleDropDown(!toggleDropDown);
    };

    return (
      <li className="list-item">
        <div>{name}</div>
        <button onClick={() => setToggleDropDown(!toggleDropDown)}>
          :
          <div ref={ref}>
            {toggleDropDown && (
              <ul className="list-item-actions" onClick={handleActionClick}>
                <li name="edit">Edit</li>
                <li name="delete">Delete</li>
              </ul>
            )}
          </div>
        </button>
      </li>
    );
  }
);

export default withOusideClick(ListItem);
