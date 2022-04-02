import { Staff } from "interfaces/staff";

export const calcSalaryStatisticsHelper = (branches: Staff[]) => {
  const salaryList = branches.map(branch => Number(branch.salary));
  return {
    maxSalary: Math.max(...salaryList),
    minSalary: Math.min(...salaryList),
    averageSalary:
      salaryList.reduce((prev, cur) => prev + cur) / salaryList.length,
  };
};
