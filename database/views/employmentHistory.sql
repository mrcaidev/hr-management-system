CREATE OR REPLACE VIEW employment_history_view AS (
SELECT
  eh.staff_id,
  CONCAT(st.first_name, ' ', st.last_name) full_name,
  CAST(eh.start_date AS TEXT) start_date,
  CAST(eh.end_date AS TEXT) end_date,
  eh.employment_id,
  emp.employment_title,
  eh.section_id,
  sc.section_name
FROM
  employment_history eh
  LEFT OUTER JOIN staffs st ON eh.staff_id = st.staff_id
  LEFT OUTER JOIN employments emp ON eh.employment_id = emp.employment_id
  LEFT OUTER JOIN sections sc ON eh.section_id = sc.section_id
);