import { patientDto, radiologyDto } from "../../types/interface";

const PatientDetail = ({
  patient,
  isOnViewImage,
}: {
  patient?: { patient: patientDto, radiology: radiologyDto };
  isOnViewImage: (image?: string) => void;

}) => {

  return (
    <div className=" w-full">
      <div className="min-h-[15rem] w-full border border-gray-200 p-4">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-28 font-semibold">First name: </p>
              <p>{patient?.radiology.firstName}</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-28 font-semibold">Last name: </p>
              <p>{patient?.radiology.lastName}</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-28 font-semibold">Email:</p>{" "}
              <p>{patient?.radiology.email}</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-28 font-semibold">Age: </p>
              <p>{patient?.radiology.age}</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-28 font-semibold">Requested by: </p>
              <p>{patient?.patient.userName}</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-28 font-semibold">Checked by: </p>
              <p>{patient?.patient.specialistName}</p>
            </div>
          </div>
          <div className="h-[12rem]">
            <img
              className="h-full cursor-pointer"
              onClick={() => isOnViewImage(patient?.patient.image)}
              src={patient?.patient.image}
              alt="patient"
            ></img>
          </div>
        </div>
      </div>

      <p className="py-2 text-lg font-semibold">patient explanatiom</p>
      <p className="my-2 min-h-[20rem] w-full border border-gray-200 p-4">
        {patient?.patient.desc}
      </p>
      <p className="py-2 text-lg font-semibold">Specialist explanatiom</p>
      <p className="min-h-[20rem] w-full border border-gray-200 p-4">
        {patient?.patient.comment}
      </p>
    </div>
  );
};

export default PatientDetail;
