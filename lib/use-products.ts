"use client";

import { useCallback, useEffect, useState } from "react";
import { PRODUCTS, type Product, type ProductStatus } from "./products";

export interface ProductOverride {
  url?: string;
  status?: ProductStatus;
}

export type Overrides = Record<string, ProductOverride>;

const STORAGE_KEY = "grevya-product-overrides";

function readOverrides(): Overrides {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Overrides) : {};
  } catch {
    return {};
  }
}

function applyOverrides(overrides: Overrides): Product[] {
  return PRODUCTS.map((p) => {
    const o = overrides[p.id];
    if (!o) return p;
    return {
      ...p,
      url: o.url ?? p.url,
      status: o.status ?? p.status,
    };
  });
}

/**
 * Returns the live product list with admin overrides applied, plus helpers to
 * persist edits. Overrides sync across tabs via the `storage` event.
 */
export function useProducts() {
  const [overrides, setOverrides] = useState<Overrides>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setOverrides(readOverrides());
    setHydrated(true);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setOverrides(readOverrides());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const save = useCallback((next: Overrides) => {
    setOverrides(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore quota errors */
    }
  }, []);

  const update = useCallback(
    (id: string, patch: ProductOverride) => {
      setOverrides((prev) => {
        const next = { ...prev, [id]: { ...prev[id], ...patch } };
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    []
  );

  const reset = useCallback(() => {
    setOverrides({});
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return {
    products: applyOverrides(overrides),
    overrides,
    hydrated,
    save,
    update,
    reset,
  };
}
