-- Create table.
DROP TABLE IF EXISTS places;

CREATE TABLE places (
  place_id NUMBER,
  street_address VARCHAR2(40),
  postal_code VARCHAR2(12),
  city VARCHAR2(30),
  state_province VARCHAR2(25),
  state_id CHAR(10)
);

-- Insert values.
INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1000,
    '1297 Via Cola di Rie',
    '00989',
    'Roma',
    '',
    'IT'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1100,
    '93091 Calle della Testa',
    '10934',
    'Venice',
    '',
    'IT'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1200,
    '2017 Shinjuku-ku',
    '1689',
    'Tokyo',
    'Tokyo Prefecture',
    'JP'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1300,
    '9450 Kamiya-cho',
    '6823',
    'Hiroshima',
    '',
    'JP'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1400,
    '2014 Jabberwocky Rd',
    '26192',
    'Southlake',
    'Texas',
    'US'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1500,
    '2011 Interiors Blvd',
    '99236',
    'South San Francisco',
    'California',
    'US'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1600,
    '2007 Zagora St',
    '50090',
    'South Brunswick',
    'New Jersey',
    'US'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1700,
    '2004 Charade Rd',
    '98199',
    'Seattle',
    'Washington',
    'US'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1800,
    '147 Spadina Ave',
    'M5V 2L7',
    'Toronto',
    'Ontario',
    'CA'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    1900,
    '6092 Boxwood St',
    'YSW 9T2',
    'Whitehorse',
    'Yukon',
    'CA'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2000,
    '40-5-12 Laogianggen',
    '190518',
    'Beijing',
    '',
    'CN'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2100,
    '1298 Vileparle (E)',
    '490231',
    'Bombay',
    'Maharashtra',
    'IN'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2200,
    '12-98 Victoria Street',
    '2901',
    'Sydney',
    'New South Wales',
    'AU'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2300,
    '198 Clementi North',
    '540198',
    'Singapore',
    '',
    'SG'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (2400, '8204 Arthur St', '', 'London', '', 'UK');

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2500,
    'Magdalen Centre, The Oxford Science Park',
    'OX9 9ZB',
    'Oxford',
    'Oxford',
    'UK'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2600,
    '9702 Chester Road',
    '09629850293',
    'Stretford',
    'Manchester',
    'UK'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2700,
    'Schwanthalerstr. 7031',
    '80925',
    'Munich',
    'Bavaria',
    'DE'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2800,
    'Rua Frei Caneca 1360 ',
    '01307-002',
    'Sao Paulo',
    'Sao Paulo',
    'BR'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    2900,
    '20 Rue des Corps-Saints',
    '1730',
    'Geneva',
    'Geneve',
    'CH'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    3000,
    'Murtenstrasse 921',
    '3095',
    'Bern',
    'BE',
    'CH'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    3100,
    'Pieter Breughelstraat 837',
    '3029SK',
    'Utrecht',
    'Utrecht',
    'NL'
  );

INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  (
    3200,
    'Mariano Escobedo 9991',
    '11932',
    'Mexico City',
    'Distrito Federal',
    'MX'
  );