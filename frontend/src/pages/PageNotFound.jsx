import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-white border border-gray-100 rounded-md p-12 flex-1 max-w-3xl text-center">
        <Heading as="h1" className="mb-8">
          The page you are looking for could not be found 😢
        </Heading>
        <button
          onClick={moveBack}
          className="text-lg bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
