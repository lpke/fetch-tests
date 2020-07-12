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
            <p>{open ? 'v' : '>'}</p>
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
        }

        .dd-header:hover {
          box-shadow:
            0px 0px 8px 0px rgba(0, 0, 0, 0.04),
            0px 0px 3px 0px rgba(0, 0, 0, 0.07);
        }

        .dd-header p {
          margin: 0;
          user-select: none;
        }

        .dd-header__title {
          margin-right: 10px;
        }

        .dd-header__title--faded {
          color: #717171;
        }

        .dd-list {
          position: absolute;
          list-style: none;
          background: var(--shaded);
          border: 1px solid var(--shaded-border);
          border-radius: 5px;
          padding: 4px 12px;
        }

        .dd-list__item {
          
        }

        .dd-list__item button {
          padding: 5px 0;
          background: unset;
          border: unset;
          border-radius: unset;
        }
      `}</style>
    </>
  );
}

export default Dropdown;