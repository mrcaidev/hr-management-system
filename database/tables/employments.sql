-- Create table.
DROP TABLE IF EXISTS employments;

CREATE TABLE employments (
  employment_id VARCHAR2(10),
  employment_title VARCHAR2(35),
  min_salary NUMBER,
  max_salary NUMBER
);

-- Insert values.
INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('AD_PRES', 'President', 20000, 40000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  (
    'AD_VP',
    'Administration Vice President',
    15000,
    30000
  );

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  (
    'AD_ASST',
    'Administration Assistant',
    3000,
    6000
  );

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('FI_MGR', 'Finance Manager', 8200, 16000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('FI_ACCOUNT', 'Accountant', 4200, 9000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('AC_MGR', 'Accounting Manager', 8200, 16000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('AC_ACCOUNT', 'Public Accountant', 4200, 9000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('SA_MAN', 'Sales Manager', 10000, 20000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('SA_REP', 'Sales Representative', 6000, 12000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('PU_MAN', 'Purchasing Manager', 8000, 15000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('PU_CLERK', 'Purchasing Clerk', 2500, 5500);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('ST_MAN', 'Stock Manager', 5500, 8500);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('ST_CLERK', 'Stock Clerk', 2000, 5000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('SH_CLERK', 'Shipping Clerk', 2500, 5500);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('IT_PROG', 'Programmer', 4000, 10000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('MK_MAN', 'Marketing Manager', 9000, 15000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  ('MK_REP', 'Marketing Representative', 4000, 9000);

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  (
    'HR_REP',
    'Human Resources Representative',
    4000,
    9000
  );

INSERT INTO
  employments (
    employment_id,
    employment_title,
    min_salary,
    max_salary
  )
VALUES
  (
    'PR_REP',
    'Public Relations Representative',
    4500,
    10500
  );