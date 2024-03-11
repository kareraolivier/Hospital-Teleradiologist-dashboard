import { useEffect, useState } from "react";
import { radiologyDto } from "../types/interface";
import RadiologyTable from "../components/patients/radiologyTable";
import RadiologyForm from "../components/forms/radiologyForm";
import { getRadiologyPatient } from "../components/api";

export default function RadiologistPage() {
  const [patients, setPatients] = useState<radiologyDto[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //open and close comment model
  const toggleModel = () => setIsOpen((prev) => !prev);

  const getPatient = (keyword = "", page = 1) => {
    setIsLoading(true)
    getRadiologyPatient(keyword, page).then((res) => {
      setPatients(res.data);
      setTotalPages(res.totalPages);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getPatient(search, currentPage);
  }, [search, currentPage]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="mt-4">
      <div className="mb-5 flex items-center justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl">Patients</p>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="search patient ..."
          className="my-1 w-1/2 rounded-lg border border-gray-200 px-2 py-3 font-normal outline-gray-400 placeholder:font-normal placeholder:text-slate-600"
        />
        <button
          onClick={toggleModel}
          className="rounded-md bg-gray-200 p-2 text-black/90 hover:shadow-md"
        >
          {isOpen ? "Close form" : "Add patient"}
        </button>
      </div>
      <div className="flex">
        <div className={`flex ${isOpen ? "w-3/5" : "w-full"}`}>
          <RadiologyTable
            patients={patients}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        </div>
        {isOpen && (
          <div className="flex w-2/5 justify-center pt-10">
            <RadiologyForm
              onGetPatient={() => getPatient("", currentPage)}
              setIsOpen={setIsOpen}
            />
          </div>
        )}
      </div>
    </div>
  );
}
