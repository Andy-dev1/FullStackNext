import React from "react";

const MealsPageSlug = ({ params }: any) => {
  return (
    <div>
      <h1>Meals slug: {params.mealSlug}</h1>
    </div>
  );
};

export default MealsPageSlug;
