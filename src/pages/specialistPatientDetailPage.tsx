import PatientDetail from "../components/patients/patientDetail";
import { getPatient } from "../components/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpecialistForm from "../components/forms/specialistForm";
import { patientDto } from "../types/interface";
import ImageModel from "../components/patients/imageModel.jsx";
import { usePrint } from "../utils/print";
import { BackIcon } from "../utils/Icons/BackIcon.tsx";

const title = "Specialist";

const SpecialistPatientDetailPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const param = useParams();
  const { id } = param;
  const [patient, setPatient] = useState<patientDto>();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  //open and close comment model
  const toggleModel = () => setIsOpen((prev) => !prev);

  const isOnViewImage = (image?: string) => {
    if (image) setImage(image);
    setShowModal(true);
  };

  const updatePatientDetail = () => {
    if (id)
      getPatient(id).then((res) => {
        setPatient(res);
      });
  };

  useEffect(() => {
    updatePatientDetail();
  });

  //printing funtion
  const { componentRef, handlePrint } = usePrint();

  return (
    <div>
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <div className="flex items-center text-2xl">
          <span className="cursor-pointer">
            <BackIcon onClick={goBack} />
          </span>
          <p>{title}</p>
        </div>
        <button onClick={handlePrint} className="text-green-600">
          Print patient information!
        </button>
        <button
          onClick={toggleModel}
          className="rounded-md bg-gray-200 p-3 text-black/90 hover:shadow-md"
        >
          {isOpen ? "Close form" : "+Comment"}
        </button>
      </div>
      <div className="flex flex-wrap">
        <div
          className={`flex p-10 ${isOpen ? "w-3/5" : "w-full"}`}
          ref={componentRef}
        >
          <PatientDetail patient={patient} isOnViewImage={isOnViewImage} />
        </div>
        {isOpen && (
          <div className="flex w-2/5 justify-center pt-10">
            <SpecialistForm
              id={id}
              onUpdatePatient={updatePatientDetail}
              patient={patient}
              setIsOpen={setIsOpen}
            />
          </div>
        )}
        {showModal ? (
          <ImageModel setShowModal={setShowModal} image={image} />
        ) : null}
      </div>
    </div>
  );
};

export default SpecialistPatientDetailPage;
