import homeData from "../utils/homeData.json";
import {
  // CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { getPatientCount } from "../components/api/getPatientCount";
import { patientCount } from "../types/interface";
import ProgressBar from "../components/progress/progress";

const HomePage = () => {
  const [count, setCount] = useState<patientCount>();

  const fetchPatientCount = () => {
    getPatientCount().then((res) => {
      setCount(res);
    });
  };
  useEffect(() => {
    fetchPatientCount();
  }, []);

  const totalCount = count?.all;
  homeData.forEach((item) => {
    const statusCount = count && count[item.title];
    if (statusCount && totalCount)
      item.percentage = Math.round((statusCount / totalCount) * 100);
  });
  const keys: string[] = Object.keys(count || []);
  const listStyle = "whitespace-nowrap px-6 py-4";
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {homeData.map((data) => (
          <div key={data.key}>
            <div className="cursor-pointer rounded-md bg-white p-4 shadow-md hover:bg-gray-100">
              <h2 className="mb-2 text-xl font-bold">{data?.title}</h2>
              <CircularProgressbarWithChildren
                value={data.percentage}
                styles={buildStyles({
                  rotation: 1 / 2 + 1 / 8,
                  strokeLinecap: "butt",
                  trailColor: "#eee",
                })}
              >
                <div className="mt-2 flex flex-col items-center text-lg">
                  <p className="text-5xl font-semibold">{`${data.percentage}%`}</p>
                  <p>patients</p>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        ))}
        <div className="m-auto">
          {count && (
            <ul className="flex items-center">
              <li className={listStyle}>
                <ProgressBar
                  progress={(count.pending / count.all) * 100}
                  patient={count.pending}
                  status={keys[1]}
                />
              </li>
              <li className={listStyle}>
                <ProgressBar
                  progress={(count.progress / count.all) * 100}
                  patient={count.progress}
                  status={keys[2]}
                />
              </li>
              <li className={listStyle}>
                <ProgressBar
                  progress={(count.completed / count.all) * 100}
                  patient={count.completed}
                  status={keys[3]}
                />
              </li>
              <li className={listStyle}>
                <ProgressBar
                  progress={(count.all / count.all) * 100}
                  patient={count.all}
                  status={`Total`}
                />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
