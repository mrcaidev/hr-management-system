-- Create table.
DROP TABLE IF EXISTS sections;

CREATE TABLE sections (
  section_id NUMBER,
  section_name VARCHAR2(30),
  manager_id NUMBER,
  place_id NUMBER
);

-- Insert values.
INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(10, 'Administration', 200, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(20, 'Marketing', 201, 1800);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(30, 'Purchasing', 114, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(40, 'Human Resources', 203, 2400);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(50, 'Shipping', 121, 1500);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(60, 'IT', 103, 1400);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(70, 'Public Relations', 204, 2700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(80, 'Sales', 145, 2500);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(90, 'Executive', 100, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(100, 'Finance', 108, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(110, 'Accounting', 205, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(120, 'Treasury', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(130, 'Corporate Tax', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(140, 'Control And Credit', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(150, 'Shareholder Services', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(160, 'Benefits', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(170, 'Manufacturing', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(180, 'Consruction', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(190, 'Contracting', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(200, 'Operations', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(210, 'IT Support', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(220, 'NOC', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(230, 'IT Helpdesk', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(240, 'Government Sales', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(250, 'Retail Sales', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(260, 'Recruiting', null, 1700);

INSERT INTO
  sections(section_id, section_name, manager_id, place_id)
VALUES
(270, 'Payroll', null, 1700);