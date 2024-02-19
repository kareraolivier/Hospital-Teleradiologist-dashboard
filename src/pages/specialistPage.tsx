import { useEffect, useState } from "react";
import SpecialistTable from "../components/patients/specialistTable";
import { getRadiologyPatient } from "../components/api";

const title = "Specialist";

export default function SpecialistPage() {
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const getPatient = (keyword = "", page = 1) => {
    getRadiologyPatient(keyword, page).then((res) => {
      setPatients(res.data);
      setTotalPages(res.totalPages);
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
      <div className="mb-5 flex items-center gap-2 font-medium text-gray-700 md:gap-4 md:pr-20">
        <p className="text-2xl">{title}</p>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="search patient ..."
          className="my-1 w-1/2 rounded-lg border border-gray-200 px-2 py-3 font-normal outline-gray-400 placeholder:font-normal placeholder:text-slate-600"
        />
      </div>
      <div className="flex flex-wrap">
        <SpecialistTable
          patients={patients}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
