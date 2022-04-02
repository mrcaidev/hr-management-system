-- Create table.
DROP TABLE IF EXISTS areas;

CREATE TABLE areas (area_id NUMBER, area_name VARCHAR2(25));

-- Insert values.
INSERT INTO
  areas (area_id, area_name)
VALUES
  (1, 'Europe');

INSERT INTO
  areas (area_id, area_name)
VALUES
  (2, 'Americas');

INSERT INTO
  areas (area_id, area_name)
VALUES
  (3, 'Asia');

INSERT INTO
  areas (area_id, area_name)
VALUES
  (4, 'Middle East and Africa');