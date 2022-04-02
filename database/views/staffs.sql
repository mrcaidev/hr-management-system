CREATE OR REPLACE VIEW staffs_view AS (
SELECT
  a.staff_id,
  CONCAT(a.first_name, ' ', a.last_name) full_name,
  a.email,
  a.phone_number,
  a.section_id,
  sc.section_name,
  emp.employment_title,
  CAST(a.hire_date AS TEXT) hire_date,
  a.salary,
  a.manager_id,
  CONCAT(b.first_name, ' ', b.last_name) manager_name,
  a.role,
  a.password
FROM
  staffs a
  LEFT OUTER JOIN staffs b ON a.manager_id = b.staff_id
  LEFT OUTER JOIN sections sc ON a.section_id = sc.section_id
  LEFT OUTER JOIN employments emp ON a.employment_id = emp.employment_id
ORDER BY
  a.staff_id
);
