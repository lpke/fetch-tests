import { useState, useEffect } from 'react';

function Dropdown({ title, items=[], multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  
  const toggle = (bool) => setOpen(bool);

  function handleOnClick(item) {}
 
  return (
    <>
      <div className="dd-wrapper">

        <div
          className="dd-header"
          role="button"
          tabIndex={0}
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <div className="dd-header__title">
            <p className="dd-header__title--faded">{title}</p>
          </div>

          <div className="dd-header__action">
            {open ? (
              // icon-chevron-down
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-cheveron-down"><path className="secondary" fill-rule="evenodd" d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" /></svg>
            ) : (
              // icon-chevron-selection
              <svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 24 24" className="w-8 mr-4 icon-cheveron-selection"><path className="secondary" fill-rule="evenodd" d="M8.7 9.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L12 6.42l-3.3 3.3zm6.6 4.6a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" /></svg>
            )}
          </div>
        </div>

        {open && (
          <ul className="dd-list">
            {items.map(item => (
              <li className="dd-list__item" key={item.id}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  <span>{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

      </div>

      <style jsx>{`
        .dd-wrapper {
          display: inline-block;
          font-size: 14px;
        }

        .dd-header {
          width: 100%;
          height: 100%;
          height: 35px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          background: var(--shaded);
          border: 1px solid var(--shaded-border);
          border-radius: 5px;
          padding: 4px 12px;
          cursor: pointer;
          transition:
            box-shadow 0.2s ease-in-out,
            border-color 0.2s ease-in-out;

          :hover {
            box-shadow:
              0px 0px 8px 0px rgba(0, 0, 0, 0.04),
              0px 0px 3px 0px rgba(0, 0, 0, 0.07);
          }

          p {
            margin: 0;
            user-select: none;
          }

          &__title {
            margin-right: 10px;

            &--faded {
              color: #717171;
            }
          }
        }

        .dd-list {
          position: absolute;
          list-style: none;
          background: var(--shaded);
          border: 1px solid var(--shaded-border);
          border-radius: 5px;
          padding: 4px 12px;

          &__item {
            //...

            button {
              padding: 5px 0;
              background: unset;
              border: unset;
              border-radius: unset;
            }
          }
        }
      `}</style>
    </>
  );
}

export default Dropdown;