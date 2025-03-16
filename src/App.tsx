import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/LoadingSpinner";
import Button from "./ui-shared/Button";

const getToDos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  return result.json();
};

export default function App() {
  // isLoading - when executing for the very first time
  // isFetching - when query function is running at all
  // isPending - when there is no cache data.
  const { data, isLoading, isPending, isFetching, refetch, error } = useQuery({
    queryKey: [],
    queryFn: getToDos,
  });

  return (
    <div className="bg-slate-200 w-full p-4 min-h-screen h-full flex flex-col gap-4 justify-center items-start">
      <div className="flex gap-4">
        <span className="bg-slate-400 p-1 rounded-md ">Demo TODO Data</span>
        <Button
          txt="Refetch"
          onClick={() => refetch()}
          style="bg-slate-400 p-1 rounded-md"
        />
      </div>
      <div className="min-h-[400px] w-full overflow-y-auto">
        {isFetching ? (
          <LoadingSpinner />
        ) : (
          <ul>
            {data.slice(0, 10).map((item: any, ind: number) => (
              <li key={ind}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
