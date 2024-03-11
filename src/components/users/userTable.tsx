import { userDto } from "../../types/interface";
import { capitalizeSting } from "../../utils/helper";
import { TableSkeleton } from "../tableSkeleton";

interface props {
  users: userDto[];
  getUserId: (id?: string) => void;
  isLoading: boolean
}

export default function UserTable({
  users,
  getUserId,
  isLoading
}: props) {

  function getPatientCountColor(count: number) {
    if (count > 0) {
      return "text-green-700";
    } else {
      return "text-red-700";
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
                    Role
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Patients
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
                {users.map((user) => (
                  <tr key={user._id} className="cursor-pointer">
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="whitespace-nowrap">
                            {`${user.firstName} ${user.lastName}`}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">{user.email}</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">
                        {capitalizeSting(user?.role)}
                      </p>
                    </td>

                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className={`w-auto px-2 font-semibold ${getPatientCountColor(user.patientCount)}`}>
                        {user.patientCount}
                      </p>
                    </td>

                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">
                        {user.createdAt?.slice(0, 10)}
                      </p>
                    </td>

                    <td className="flex gap-4 border-b border-gray-200 p-6 text-sm">
                      <button
                        onClick={() => getUserId(user._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        {user.isActive === true ? "Desactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
