import { Link } from "react-router-dom";
import { patientDto } from "../../types/interface";
import { Status } from "../../types/enum";

export default function RadiologyTable({
  patients,
}: {
  patients: patientDto[];
}) {
  function getStatusColor(status: Status) {
    switch (status) {
      case Status.Completed:
        return "green";
      case Status.Pending:
        return "black";
      case Status.Inprogress:
        return "orange";
      default:
        return "gray";
    }
  }
  return (
    <div className="container mt-10 border">
      <div className="py-8">
        <div className="py-4">
          <div className="max-w-full overflow-x-auto rounded-lg">
            <table className="w-full leading-normal text-black">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Age
                  </th>

                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Created_at
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase text-green-900"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-black">
                {patients.map((patient: patientDto) => (
                  <tr key={patient._id} className="cursor-pointer">
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="whitespace-nowrap">
                            {`${patient.firstName} ${patient.lastName}`}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">{patient.email}</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">{patient.age}</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">12 dec 2018</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full opacity-50"
                          style={{
                            backgroundColor: getStatusColor(patient.status),
                          }}
                        />
                        <span className="relative pb-3 text-gray-100">
                          {patient.status}
                        </span>
                      </span>
                    </td>
                    <td className="flex gap-4 border-b border-gray-200 p-6 text-sm">
                      <Link
                        to={`${patient._id}`}
                        className="text-green-600 hover:text-green-900"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="xs:flex-row xs:justify-between flex flex-col items-center p-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full border-y bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100"
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full border-y bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full rounded-r-xl border-y border-r bg-white p-4  text-base text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
