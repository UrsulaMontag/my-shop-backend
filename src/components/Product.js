import { useState } from "react";
import { mutate } from "swr";

export default function Product(props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setDeleteMode] = useState(false);
  const [isReallyDeleteMode, setRealyDeleteMode] = useState(false);

  function enableEditMode() {
    setIsEditMode(true);
  }

  function enableDeleteMode() {
    setDeleteMode(!isDeleteMode);
  }

  return (
    <div>
      {isDeleteMode ? (
        <ProductModeConfirmation
          {...props}
          onDisableDeleteMode={enableDeleteMode}
          isReallyDeleteMode={isReallyDeleteMode}
        />
      ) : (
        <ProductModeShow
          {...props}
          onEnableEditMode={enableEditMode}
          isDeleteMode={isDeleteMode}
          onDisableDeleteMode={enableDeleteMode}
        />
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
  onEnableEditMode,
  onDisableDeleteMode,
  isDeleteMode,
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
        {tags.map((tag, index) => {
          return (
            <div key={index}>
              <li>{tag}</li>
            </div>
          );
        })}
      </ul>
      <div>
        <button
          size="small"
          onClick={() => {
            onDisableDeleteMode();
            console.log(isDeleteMode);
          }}
        >
          Löschen
        </button>
        <button onClick={onEnableEditMode}>Editieren</button>
      </div>
    </div>
  );
}

function ProductModeConfirmation({
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
        {tags.map((tag, index) => {
          return (
            <div key={index}>
              <li>{tag}</li>
            </div>
          );
        })}
      </ul>
      <div>
        <button
          type="button"
          size="small"
          onClick={async () => {
            const response = await fetch("/api/product/" + id, {
              method: "DELETE",
            });
            console.log(await response.json());
            mutate("/api/products");
          }}
        >
          Wirklich löschen
        </button>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
      </div>
    </div>
  );
}
