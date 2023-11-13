import { useEffect, useState } from "react";
import SpecialistTable from "../components/patients/specialistTable";
import SpecialistForm from "../components/forms/specialistForm";
import { getRadiologyPatient } from "../components/api";

export default function SpecialistPage() {
  const [patients, setPatients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getRadiologyPatient().then((res) => {
      setPatients(res.reverse());
    });
  }, []);
  return (
    <div className="mt-4">
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl">Specialist</p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md bg-gray-200 p-3 text-black/90 hover:shadow-md"
        >
          {isOpen ? "Close form" : "Add patient"}
        </button>
      </div>
      <div className="flex">
        <div className={`flex ${isOpen ? "w-3/5" : "w-full"}`}>
          <SpecialistTable patients={patients} />
        </div>
        {isOpen && (
          <div className="flex w-2/5 justify-center pt-10">
            <SpecialistForm />
          </div>
        )}
      </div>
    </div>
  );
}
