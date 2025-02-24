const Page = async () => {
  const array = Array.from({ length: 100_000 }, (_, i) => i);
  return (
    <>
      <div>Page2</div>
      <div className="flex flex-col">
        {array.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </>
  );
};

export default Page;
