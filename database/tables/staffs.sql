-- Create table.
DROP TABLE IF EXISTS staffs;

CREATE TABLE staffs (
  staff_id NUMBER,
  first_name VARCHAR2(40),
  last_name VARCHAR2(12),
  email VARCHAR2(30),
  phone_number VARCHAR2(25),
  hire_date DATE,
  employment_id VARCHAR2(10),
  salary NUMBER,
  commission_pct NUMBER,
  manager_id NUMBER,
  section_id NUMBER
);

-- Insert values.
INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    198,
    'Donald',
    'OConnell',
    'DOCONNEL',
    '650.507.9833',
    to_date('21-06-1999', 'dd-mm-yyyy'),
    'SH_CLERK',
    2600.00,
    null,
    124,
    50
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    199,
    'Douglas',
    'Grant',
    'DGRANT',
    '650.507.9844',
    to_date('13-01-2000', 'dd-mm-yyyy'),
    'SH_CLERK',
    2600.00,
    null,
    124,
    50
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    200,
    'Jennifer',
    'Whalen',
    'JWHALEN',
    '515.123.4444',
    to_date('17-09-1987', 'dd-mm-yyyy'),
    'AD_ASST',
    4400.00,
    null,
    101,
    10
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    201,
    'Michael',
    'Hartstein',
    'MHARTSTE',
    '515.123.5555',
    to_date('17-02-1996', 'dd-mm-yyyy'),
    'MK_MAN',
    13000.00,
    null,
    100,
    20
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    202,
    'Pat',
    'Fay',
    'PFAY',
    '603.123.6666',
    to_date('17-08-1997', 'dd-mm-yyyy'),
    'MK_REP',
    6000.00,
    null,
    201,
    20
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    203,
    'Susan',
    'Mavris',
    'SMAVRIS',
    '515.123.7777',
    to_date('07-06-1994', 'dd-mm-yyyy'),
    'HR_REP',
    6500.00,
    null,
    101,
    40
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    204,
    'Hermann',
    'Baer',
    'HBAER',
    '515.123.8888',
    to_date('07-06-1994', 'dd-mm-yyyy'),
    'PR_REP',
    10000.00,
    null,
    101,
    70
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    205,
    'Shelley',
    'Higgins',
    'SHIGGINS',
    '515.123.8080',
    to_date('07-06-1994', 'dd-mm-yyyy'),
    'AC_MGR',
    12000.00,
    null,
    101,
    110
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    206,
    'William',
    'Gietz',
    'WGIETZ',
    '515.123.8181',
    to_date('07-06-1994', 'dd-mm-yyyy'),
    'AC_ACCOUNT',
    8300.00,
    null,
    205,
    110
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    100,
    'Steven',
    'King',
    'SKING',
    '515.123.4567',
    to_date('17-06-1987', 'dd-mm-yyyy'),
    'AD_PRES',
    24000.00,
    null,
    null,
    90
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    101,
    'Neena',
    'Kochhar',
    'NKOCHHAR',
    '515.123.4568',
    to_date('21-09-1989', 'dd-mm-yyyy'),
    'AD_VP',
    17000.00,
    null,
    100,
    90
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    102,
    'Lex',
    'De Haan',
    'LDEHAAN',
    '515.123.4569',
    to_date('13-01-1993', 'dd-mm-yyyy'),
    'AD_VP',
    17000.00,
    null,
    100,
    90
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    103,
    'Alexander',
    'Hunold',
    'AHUNOLD',
    '590.423.4567',
    to_date('03-01-1990', 'dd-mm-yyyy'),
    'IT_PROG',
    9000.00,
    null,
    102,
    60
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    104,
    'Bruce',
    'Ernst',
    'BERNST',
    '590.423.4568',
    to_date('21-05-1991', 'dd-mm-yyyy'),
    'IT_PROG',
    6000.00,
    null,
    103,
    60
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    105,
    'David',
    'Austin',
    'DAUSTIN',
    '590.423.4569',
    to_date('25-06-1997', 'dd-mm-yyyy'),
    'IT_PROG',
    4800.00,
    null,
    103,
    60
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    106,
    'Valli',
    'Pataballa',
    'VPATABAL',
    '590.423.4560',
    to_date('05-02-1998', 'dd-mm-yyyy'),
    'IT_PROG',
    4800.00,
    null,
    103,
    60
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    107,
    'Diana',
    'Lorentz',
    'DLORENTZ',
    '590.423.5567',
    to_date('07-02-1999', 'dd-mm-yyyy'),
    'IT_PROG',
    4200.00,
    null,
    103,
    60
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    108,
    'Nancy',
    'Greenberg',
    'NGREENBE',
    '515.124.4569',
    to_date('17-08-1994', 'dd-mm-yyyy'),
    'FI_MGR',
    12000.00,
    null,
    101,
    100
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    109,
    'Daniel',
    'Faviet',
    'DFAVIET',
    '515.124.4169',
    to_date('16-08-1994', 'dd-mm-yyyy'),
    'FI_ACCOUNT',
    9000.00,
    null,
    108,
    100
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    110,
    'John',
    'Chen',
    'JCHEN',
    '515.124.4269',
    to_date('28-09-1997', 'dd-mm-yyyy'),
    'FI_ACCOUNT',
    8200.00,
    null,
    108,
    100
  );

INSERT INTO
  staffs (
    staff_id,
    first_name,
    last_name,
    email,
    phone_number,
    hire_date,
    employment_id,
    salary,
    commission_pct,
    manager_id,
    section_id
  )
VALUES
  (
    999,
    'Yuwang',
    'Cai',
    'YUWANG',
    '18962388966',
    to_date('28-03-2022', 'dd-mm-yyyy'),
    'HR_REP',
    10000.00,
    null,
    101,
    40
  );

