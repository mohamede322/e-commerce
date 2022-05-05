import Category from "./Category";

export default function Categories({ categories }) {
  return (
    <div className="bg-dark  text-light d-flex align-items-center">
      <div className="row  text-center p-3 p-md-0 container-md m-auto">
        {categories.map((category, i) => (
          <Category key={i} category={category} />
        ))}
      </div>
    </div>
  );
}
