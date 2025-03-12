import { useState, useEffect } from "react";
import jobsData from "../../assets/data.json";

interface Job {
  id: number;
  company: string;
  position: string;
  role: string;
  level: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const useFetchJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setJobs(jobsData);
    } catch (error) {
      setError("Failed to load jobs data");
    }
  }, []);

  return { jobs, error };
};

export default useFetchJobs;
