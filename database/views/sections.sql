CREATE OR REPLACE VIEW sections_view AS (
SELECT
  sc.section_id,
  sc.section_name,
  sc.manager_id,
  CONCAT(st.first_name, ' ', st.last_name) manager_name,
  sc.place_id,
  sal.max_salary,
  sal.min_salary,
  sal.avg_salary
FROM
  sections sc
  LEFT OUTER JOIN staffs st ON sc.manager_id = st.staff_id
  LEFT OUTER JOIN (
    SELECT
      section_id,
      MAX(salary) max_salary,
      MIN(salary) min_salary,
      ROUND(AVG(salary), 2) avg_salary
    FROM
      staffs
    GROUP BY
      section_id
  ) sal ON sc.section_id = sal.section_id
);