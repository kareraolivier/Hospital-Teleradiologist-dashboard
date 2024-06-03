import { useState, useEffect } from "react";
import { getAttempts } from "../components/api/getAttempts";
import AttemptsTable from "../components/attempts/attemptsTable";

const AttemptsPage = () => {
  const [attempts, setAttempts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchAttempts = () => {
    setIsLoading(true);
    getAttempts()
      .then((res: any) => {
        setAttempts(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAttempts();
  }, []);
  return (
    <div>{<AttemptsTable attempts={attempts} isLoading={isLoading} />}</div>
  );
};

export default AttemptsPage;
