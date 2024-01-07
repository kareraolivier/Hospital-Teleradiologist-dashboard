import { useNavigate } from "react-router-dom";
import ErrorImage from "../utils/Icons/errorImage";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <ErrorImage />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <button
          onClick={() => navigate(-1)}
          className="my-3 rounded-md bg-gray-200 p-3 text-lg text-black/90 hover:bg-black/90 hover:text-gray-200 hover:shadow-md"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
