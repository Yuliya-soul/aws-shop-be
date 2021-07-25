create table products(
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
title text not null,
description text,
price integer,
years text,
author text,
picture text
);

create table stocks(
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
product_id  uuid,
count integer,
foreign key ("product_id") references "products" ("id")
);

create extension if not exists "uuid-ossp"
--drop table products 