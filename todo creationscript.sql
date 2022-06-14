-- DROP SCHEMA todo;

CREATE SCHEMA todo AUTHORIZATION postgres;

-- DROP SEQUENCE todo.todo_id_seq;

CREATE SEQUENCE todo.todo_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;

-- Permissions

ALTER SEQUENCE todo.todo_id_seq OWNER TO postgres;
GRANT ALL ON SEQUENCE todo.todo_id_seq TO postgres;
-- todo.todo definition

-- Drop table

-- DROP TABLE todo.todo;

CREATE TABLE todo.todo (
	id serial4 NOT NULL,
	"name" text NULL,
	active bool NULL,
	deleted_flag bool NULL,
	created_by varchar(100) NULL,
	created_date date NULL,
	last_upd_by varchar(100) NULL,
	last_upd_date date NULL
);
CREATE INDEX todo_id_idx ON todo.todo USING btree (id);

-- Permissions

ALTER TABLE todo.todo OWNER TO postgres;
GRANT ALL ON TABLE todo.todo TO postgres;




-- Permissions

GRANT ALL ON SCHEMA todo TO postgres;
