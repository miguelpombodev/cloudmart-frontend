import { useState } from "react";

import { useDebounceCallback } from "./useDebounceCallback";

export function useDebounceSelection<T>(
  urlValue: T,
  commit: (value: T) => void,
  delay = 400,
) {
  const urlKey = JSON.stringify(urlValue);

  const [draft, setDraft] = useState(urlValue);
  const [syncedKey, setSyncedKey] = useState(urlKey);

  if (urlKey !== syncedKey) {
    setSyncedKey(urlKey);
    setDraft(urlValue);
  }

  const debouncedCommit = useDebounceCallback((next: T) => {
    if (JSON.stringify(next) !== urlKey) commit(next);
  }, delay);

  const select = (next: T) => {
    setDraft(next);
    debouncedCommit(next);
  };

  return [draft, select] as const;
}
