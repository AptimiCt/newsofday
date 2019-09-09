CREATE TABLE public.listnews
(
    id SERIAL NOT NULL,
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    bodytext text COLLATE pg_catalog."default",
    path_to_image character varying(255) COLLATE pg_catalog."default",
    "timestamp" timestamp without time zone NOT NULL DEFAULT now(),
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.listnews
    OWNER to postgres;