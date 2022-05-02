import { useState } from "react";
import { mutate, useSWRConfig } from "swr";
import { useRouter } from "next/router";

export default function Category(props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableEditMode() {
    setIsEditMode(true);
  }

  function enableDeleteMode() {
    setDeleteMode(!isDeleteMode);
  }

  return (
    <div>
      {isDeleteMode ? (
        <CategoryModeConfirmation
          {...props}
          onDisableDeleteMode={enableDeleteMode}
        />
      ) : (
        <CategoryModeShow
          {...props}
          onEnableEditMode={enableEditMode}
          isDeleteMode={isDeleteMode}
          onDisableDeleteMode={enableDeleteMode}
        />
      )}
    </div>
  );
}

function CategoryModeShow({
  id,
  name,
  description,
  onDisableDeleteMode,
  isDeleteMode,
}) {
  const router = useRouter();
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{description}</h5>
      </div>

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
        <button
          onClick={() => {
            router.push({
              pathname: "/edit-category",
              query: {
                nameValue: name,
                descriptionValue: description,
              },
            });
          }}
        >
          Editieren
        </button>
      </div>
    </div>
  );
}

function CategoryModeConfirmation({
  id,
  name,
  description,
  onDisableDeleteMode,
}) {
  const { mutate } = useSWRConfig();

  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{description}</h5>
      </div>

      <div>
        <button
          type="button"
          size="small"
          onClick={async () => {
            const response = await fetch("/api/category/" + id, {
              method: "DELETE",
            });
            console.log(await response.json());
            mutate("/api/categories");
          }}
        >
          Wirklich löschen
        </button>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
      </div>
    </div>
  );
}
