import { useEffect, useState } from "react";
import { getRadiologyPatient } from "../components/api";
import ReportTable from "../components/patients/reportTable";
import { patientDto } from "../types/interface";
import { capitalizeSting } from "../utils/helper";
import { usePrint } from "../utils/print";

export default function ReportsPage() {
  const [patients, setPatients] = useState<patientDto[]>([]);
  const [selectedValue, setSelectedValue] = useState("");
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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const selectedPatient = patients.filter((patient) =>
    selectedValue === "" ? patient : patient?.status === selectedValue
  );

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
        <select
          name="status"
          value={selectedValue}
          onChange={handleSelectChange}
          className="my-1 rounded-sm border border-gray-200 px-2 py-3 outline-gray-400 placeholder:text-slate-600"
        >
          <option value="">select status</option>
          <option value="pending">Pending</option>
          <option value="inprogress">Inprogress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div ref={componentRef}>
        <div className="w-full px-10 pb-10">
          <p className="py-6 text-center text-lg font-semibold">
            {selectedValue == ""
              ? "All Patients"
              : `${capitalizeSting(selectedValue)} Patients`}
          </p>
          <ReportTable
            patients={selectedPatient}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
