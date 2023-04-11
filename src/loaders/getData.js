import { getStoredCart } from "../utils/fakeDb";

export const getData = async () => {
  const jobsData = await fetch("/job-data.json");
  const jobData = await jobsData.json();

  let applyJob = [];
  const savedApplyJob = getStoredCart();
  for (const id in savedApplyJob) {
    const foundJob = jobData.find((job) => job.id === parseInt(id));

    if (foundJob) {
      applyJob.push(foundJob);
    }
  }
  return { applyJob };
};
