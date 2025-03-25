import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch Man"]);
  console.log(categories);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>
      {/* INMPUT */}

      {/* 
  Componente AddCategory:
  - Se encarga de agregar nuevas categorías, evitando duplicados.
  - Recibe dos props:
    1. onNewCategory: Función para comunicar nuevas categorías al componente padre
    2. currentCategories: Listado actual de categorías (para validación de duplicados)
*/}
      <AddCategory
        onNewCategory={onAddCategory}
        currentCategories={categories}
      />
      {/* LISTADO DE GIF */}

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};
