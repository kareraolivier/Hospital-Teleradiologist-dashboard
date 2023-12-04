import PatientDetail from "../components/patients/patientDetail";
import { getPatient } from "../components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { patientDto } from "../types/interface";
import ImageModel from "../components/patients/imageModel";
import { usePrint } from "../utils/print";

const title = "Radiology";

const RadiologyPatientDetailPage = () => {
  const param = useParams();
  const { id } = param;

  const [patient, setPatient] = useState<patientDto>();
  const [image, setImage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const isOnViewImage = (image?: string) => {
    if (image) setImage(image);
    setShowModal(true);
  };

  useEffect(() => {
    if (id)
      getPatient(id).then((res) => {
        setPatient(res);
      });
  }, [id]);

  //printing funtion
  const { componentRef, handlePrint } = usePrint();

  return (
    <div>
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl md:pl-10">{title}</p>
        <button onClick={handlePrint} className="text-green-600">
          Print patient information!
        </button>
      </div>
      <div className="flex flex-wrap p-10" ref={componentRef}>
        <PatientDetail patient={patient} isOnViewImage={isOnViewImage} />
      </div>
      {showModal ? (
        <ImageModel setShowModal={setShowModal} image={image} />
      ) : null}
    </div>
  );
};

export default RadiologyPatientDetailPage;
