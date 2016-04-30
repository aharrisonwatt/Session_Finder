# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
happening_id| string    | not null, foreign key (references happenings), indexed
body        | text      | not null

## happenings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
date        | datetime  | not null
lat         | float     | not null
lng         | float     | not null
title       | string    | not null
body        | text      | not null
game        | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
happening_id| integer   | not null, foreign key (references happening), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
happening_id| integer   | not null, foreign key (references happening), indexed, unique [tag_id]
image_url   | string    | not null, indexed
