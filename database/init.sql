-- Create user.
CREATE USER caiyuwang PASSWORD 'caiyuwang@15432';

-- Create tablespace.
CREATE TABLESPACE human_resource_space RELATIVE LOCATION 'tablespace/human_resource_space';

GRANT CREATE ON TABLESPACE human_resource_space TO caiyuwang;

-- Create database.
CREATE DATABASE human_resource WITH TABLESPACE = human_resource_space OWNER caiyuwang;

-- -- Create schema.
-- CREATE SCHEMA caiyuwang AUTHORIZATION caiyuwang;
-- -- Set search path.
-- SET SEARCH_PATH TO caiyuwang,
--   public;