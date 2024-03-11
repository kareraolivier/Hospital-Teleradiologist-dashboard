import { Link } from "react-router-dom";
import { patientDto } from "../../types/interface";
import { Role, Status } from "../../types/enum";
import { capitalizeSting } from "../../utils/helper";
import { useAuth } from "../../middleware/Contexts";
import { TableSkeleton } from "../tableSkeleton";

interface props {
    patients: patientDto[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    isLoading: boolean
}

export default function PatientTable({
    patients,
    currentPage,
    totalPages,
    onPageChange,
    isLoading
}: props) {


    const { authUser } = useAuth();
    let loggedInUserRole: Role;
    {
        authUser !== null && (loggedInUserRole = JSON.parse(authUser).role);
    }
    function getStatusColor(status: Status) {
        switch (status) {
            case Status.Completed:
                return "bg-[green]";
            case Status.Pending:
                return "bg-[black]";
            case Status.Inprogress:
                return "bg-[orange]";
            default:
                return "bg-gray";
        }
    }
    return isLoading ? <TableSkeleton /> : (
        <div className="container border">
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
                                        Description
                                    </th>
                                    <th
                                        scope="col"
                                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                                    >
                                        Comment
                                    </th>
                                    <th
                                        scope="col"
                                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                                    >
                                        Status
                                    </th>

                                    <th
                                        scope="col"
                                        className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                                    >
                                        Created_at
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
                                                        {patient.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-200 p-5 text-sm">
                                            <p className="whitespace-nowrap">{patient.comment}</p>
                                        </td>

                                        <td className="border-b border-gray-200 p-5 text-sm">
                                            <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                                                <span
                                                    aria-hidden="true"
                                                    className={`absolute inset-0 rounded-full opacity-50 ${getStatusColor(
                                                        patient.status
                                                    )}`}
                                                />
                                                <span className="relative pb-3 text-black">
                                                    {capitalizeSting(patient.status)}
                                                </span>
                                            </span>
                                        </td>
                                        <td className="border-b border-gray-200 p-5 text-sm">
                                            <p className="whitespace-nowrap">
                                                {patient.createdAt?.slice(0, 10)}
                                            </p>
                                        </td>
                                        <td className="flex gap-4 border-b border-gray-200 p-6 text-sm">
                                            <Link
                                                to={loggedInUserRole == Role.Admin || loggedInUserRole == Role.Specialist ? `/specialist/${patient._id}` : `/radiologist/${patient._id}`}
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
                                {/* Previous Page Button */}
                                <button
                                    type="button"
                                    onClick={() => onPageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="flex w-full items-center gap-2 rounded-l-xl border bg-white p-2 text-base text-gray-600 hover:bg-gray-100"
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
                                    Prev
                                </button>

                                {/* Page Numbers */}
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        type="button"
                                        onClick={() => onPageChange(index + 1)}
                                        className={`w-full border-y bg-white px-4 py-2 text-base ${currentPage === index + 1
                                            ? "font-bold text-green-600 hover:bg-gray-100"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}

                                {/* Next Page Button */}
                                <button
                                    type="button"
                                    onClick={() => onPageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="flex w-full items-center gap-2 rounded-r-xl border-y border-r bg-white p-2  text-base text-gray-600 hover:bg-gray-100"
                                >
                                    Next
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
