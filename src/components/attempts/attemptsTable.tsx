import { TableSkeleton } from "../tableSkeleton";

const AttemptsTable = ({ attempts, isLoading }: any) => {
  return isLoading ? (
    <TableSkeleton />
  ) : (
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
                    Ip Address
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Successful
                  </th>

                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Created_at
                  </th>
                </tr>
              </thead>
              <tbody className="text-black">
                {attempts.map((attempt: any) => (
                  <tr key={attempt._id} className="cursor-pointer">
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="whitespace-nowrap">
                            {`${attempt.user} ${attempt.user}`}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">{attempt.ipAddress}</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p
                        className={`whitespace-nowrap rounded-lg text-center font-bold ${
                          attempt.successful
                            ? "bg-green-200 text-green-700"
                            : "bg-red-200 text-red-700"
                        }`}
                      >
                        {attempt.successful ? "success" : "fail"}
                      </p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">
                        {attempt.createdAt?.slice(0, 10)}
                      </p>
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
};

export default AttemptsTable;
