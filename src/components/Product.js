import { useState } from "react";

export default function Product(props) {
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableDeleteMode() {
    setIsEditMode(true);
  }

  function disableDeleteMode() {
    setDeleteMode(false);
  }

  return (
    <div>
      {isDeleteMode ? (
        <ProductModeEdit {...props} onDisableDeleteMode={disableDeleteMode} />
      ) : (
        <ProductModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </div>
  );
}

function ProductModeShow({
  id,
  name,
  description,
  tags,
  price,
  category,
  onEnableDeleteMode,
}) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
        <button
          onClick={() => {
            console.log("Delete product", id, name);
          }}
        >
          Delete
        </button>
        <button onClick={onEnableDeleteMode}>Edit</button>
      </div>
    </div>
  );
}

function ProductModeEdit({
  id,
  name,
  description,
  tags,
  price,
  category,
  onDisableDeleteMode,
}) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
        <button
          onClick={() => {
            console.log("Delete product", id, name);
          }}
        >
          Abbrechen
        </button>
        <button onClick={onDisableDeleteMode}>Wirklich löschen</button>
      </div>
    </div>
  );
}
