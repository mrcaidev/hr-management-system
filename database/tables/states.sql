-- Create table.
DROP TABLE IF EXISTS states;

CREATE TABLE states (
  state_id CHAR(2),
  state_name VARCHAR2(40),
  area_id NUMBER
);

-- Insert values.
INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('AR', 'Argentina', 2);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('AU', 'Australia', 3);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('BE', 'Belgium', 1);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('BR', 'Brazil', 2);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('CA', 'Canada', 2);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('CH', 'Switzerland', 1);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('CN', 'China', 3);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('DE', 'Germany', 1);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('DK', 'Denmark', 1);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('EG', 'Egypt', 4);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('FR', 'France', 1);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('HK', 'HongKong', 3);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('IL', 'Israel', 4);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('IN', 'India', 3);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('IT', 'Italy', 1);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('JP', 'Japan', 3);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('KW', 'Kuwait', 4);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('MX', 'Mexico', 2);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('NG', 'Nigeria', 4);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('NL', 'Netherlands', 1);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('SG', 'Singapore', 3);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('UK', 'United Kingdom', 1);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('US', 'United States of America', 2);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('ZM', 'Zambia', 4);

INSERT INTO
  states (state_id, state_name, area_id)
VALUES
  ('ZW', 'Zimbabwe', 4);