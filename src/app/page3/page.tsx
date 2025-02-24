import { Suspense } from "react";
import { ArrayDisplay } from "../ArrayDisplay";

const Page = async () => {
  const arrayPromise = new Promise<number[]>(async (resolve) => {
    resolve(Array.from({ length: 100_000 }, (_, i) => i));
  });

  return (
    <div>
      Page3
      <Suspense fallback={<div>Loading...</div>}>
        <ArrayDisplay arrayPromise={arrayPromise} />
      </Suspense>
    </div>
  );
};

export default Page;
