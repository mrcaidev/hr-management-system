-- Add password column.
ALTER TABLE
  staffs
ADD
  COLUMN password VARCHAR2(20);

-- Set default password to staff id.
UPDATE staffs SET password = staff_id;

-- Add role column.
ALTER TABLE staffs ADD COLUMN role VARCHAR2(10);

-- Set role of each staff.
UPDATE staffs SET role = 'manager' WHERE staff_id IN (
  SELECT DISTINCT manager_id FROM staffs WHERE manager_id IS NOT NULL
);
UPDATE staffs SET role = 'staff' WHERE role IS NULL;