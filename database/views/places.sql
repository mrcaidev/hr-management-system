CREATE OR REPLACE VIEW places_view AS (
SELECT
  pc.place_id,
  pc.street_address,
  pc.postal_code,
  pc.city,
  pc.state_province,
  pc.state_id,
  st.state_name,
  st.area_id,
  ar.area_name
FROM
  places pc
  LEFT OUTER JOIN states st ON pc.state_id = st.state_id
  LEFT OUTER JOIN areas ar ON st.area_id = ar.area_id
);