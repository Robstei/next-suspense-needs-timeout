import { use } from "react";

export const ArrayDisplay = ({
  arrayPromise,
}: {
  arrayPromise: Promise<Array<number>>;
}) => {
  const array = use(arrayPromise);

  return (
    <div className="flex flex-col">
      {array.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};
