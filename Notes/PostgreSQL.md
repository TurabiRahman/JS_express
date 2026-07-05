1. How we will enter into postgres ?
= psql -U postgres
2. How we will inter into database without entering postgres first ?
= psql -U postgres database_ name 
3. How we will inter into database when we are into postgres ?
= \c database_name
4. /l = List of databasesx
5. psql --help = for all the help
6. Creating table 
= create table table_name (
column name   data type   constrains if any ,
column name   data type   constrains if any ,
column name   data type   constrains if any 
)

ex - 

project01_test=# create table person (
project01_test(# id int ,
project01_test(# first_name varchar (50),
project01_test(# last_name varchar (52),
project01_test(# gender varchar(7),
project01_test(# date_of_birth date );


7. \d = to see all the relations 
ex - 

project01_test=# \d
         List of relations
 Schema |  Name  | Type  |  Owner
--------+--------+-------+----------
 public | person | table | postgres
(1 row)

8. \d table_name = to enter into a table and see the rows and coloums 
ex - 

project01_test=# \d person
                                                     Table "public.person"
    Column     |         Type          | Collation | Nullable | Default
---------------+-----------------------+-----------+----------+---------
 id                    | integer                       |                 |                |
 first_name      | character varying(50) |                 |                |
 last_name       | character varying(52) |                 |                |
 gender            | character varying(7)  |                 |                |
 date_of_birth  | date                            |                 |               |

9. Creating table with constrains 
= create table table_name (
column name   data type   constrains if any  
)

constrain = not null / null / primary key 



