export const TableSkeleton = () => (
    <div className="container border">
        <div className="py-8">
            <div className="py-4">
                <div className="max-w-full overflow-x-auto rounded-lg">
                    <table className="w-full leading-normal text-black">
                        <thead>
                            <tr>
                                <th className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase">
                                    <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-400"></p>
                                </th>

                                <th className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase">
                                    <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-400"></p>
                                </th>

                                <th className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase">
                                    <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-400"></p>
                                </th>

                                <th className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase">
                                    <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-400"></p>
                                </th>

                                <th className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase">
                                    <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-400"></p>
                                </th>
                                <th className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase">
                                    <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-400"></p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(6)].map((_, index) => (
                                <tr key={index} className="cursor-pointer">
                                    <td className="animate-pulse border-b border-gray-200 p-5 text-sm">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-200"></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="animate-pulse border-b border-gray-200 p-5 text-sm">
                                        <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-200"></p>
                                    </td>
                                    <td className="animate-pulse border-b border-gray-200 p-5 text-sm">
                                        <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-200"></p>
                                    </td>
                                    <td className="animate-pulse border-b border-gray-200 p-5 text-sm">
                                        <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-200"></p>
                                    </td>
                                    <td className="animate-pulse border-b border-gray-200 p-5 text-sm">
                                        <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-200"></p>
                                    </td>
                                    <td className="animate-pulse border-b border-gray-200 p-5 text-sm">
                                        <p className="h-4 w-20 whitespace-nowrap rounded-lg bg-gray-200"></p>
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
