const Main = ({ id }: { id: number }) => {
  return (
    <div className="w-52 h-64 bg-grey rounded flex flex-col items-center">
      <div className="h-4/5 w-full flex items-center justify-center">
        <div className="h-4/5 w-11/12 bg-light border border-light rounded overflow-hidden">
          Image
        </div>
      </div>
      <div className="h-1/5 w-full flex items-center justify-evenly">
        <p className="font-bold">The Car</p>
        <a href={`/car/${id}`}>
          <button className="bg-primary rounded p-1 px-2.5">About</button>
        </a>
      </div>
    </div>
  );
};

export default Main;
