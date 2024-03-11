import { useEffect, useState } from "react";
import { getRadiologyPatient } from "../components/api";
import ReportTable from "../components/patients/reportTable";
import { radiologyDto } from "../types/interface";
import { usePrint } from "../utils/print";

export default function ReportsPage() {
  const [patients, setPatients] = useState<radiologyDto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const getPatient = (keyword = "", page = 1) => {
    setIsLoading(true);
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

  //printing funtion
  const { componentRef, handlePrint } = usePrint();

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
        <button onClick={handlePrint} className="text-green-600">
          Print patient list!
        </button>

      </div>
      <div ref={componentRef}>
        <div className="w-full px-10 pb-10">

          <ReportTable
            patients={patients}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
