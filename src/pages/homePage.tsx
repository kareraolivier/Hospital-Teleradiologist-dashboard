import homeData from "../utils/homeData.json";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { getPatientCount } from "../components/api/getPatientCount";
import { patientCount } from "../types/interface";

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
                <img
                  style={{ width: 40, marginTop: -5 }}
                  src="https://i.imgur.com/YNjf5w4.jpeg"
                  alt="doge"
                />
                <div className="mt-2 flex flex-col items-center text-lg">
                  <p>{`${data.percentage}%`}</p>
                  <p>patients</p>
                </div>
              </CircularProgressbarWithChildren>

              <CircularProgressbar
                value={data.percentage}
                text={`${data.percentage}%`}
                strokeWidth={50}
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textColor: "white",
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
