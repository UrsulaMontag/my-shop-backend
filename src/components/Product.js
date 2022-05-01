import { useState } from "react";
import { useSWRConfig } from "swr";

export default function Product(props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableEditMode() {
    setIsEditMode(true);
  }

  function enableDeleteMode() {
    setDeleteMode(false);
  }

  return (
    <div>
      {isDeleteMode ? (
        <ProductModeEdit {...props} onDisableDeleteMode={enableDeleteMode} />
      ) : (
        <ProductModeShow {...props} onEnableEditMode={enableEditMode} />
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
            <>
              <li key={index}>{tag}</li>
            </>
          );
        })}
      </ul>
      <div>
        <button
          size="small"
          onClick={async () => {
            const response = await fetch("/api/card/" + id, {
              method: "DELETE",
            });
            console.log(await response.json());
            mutate("/api/cards");
          }}
        >
          Delete
        </button>
        <button onClick={onEnableEditMode}>Edit</button>
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
  const [nameValue, setNameValue] = useState(name);
  const [contentValue, setContentValue] = useState(content);
  const { mutate } = useSWRConfig();

  async function submit(event) {
    event.preventDefault();

    const response = await fetch("/api/card/" + id, {
      method: "PUT",
      // body object zu JSON String machen
      body: JSON.stringify({
        content: contentValue,
        name: nameValue,
      }),
    });
    console.log(await response.json());
    mutate("/api/cards");

    onDisableDeleteMode();
  }

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
