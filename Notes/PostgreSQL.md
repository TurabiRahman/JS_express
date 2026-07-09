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

8. drop table table_name = to drop the table 
9. SELECT * FROM table_name = to see all the values in the table
10. insert into human (first_name, last_name, gender, date_of_birth, email) = inserting values into tables
11. to insert large data into a table - we go to mockaroo and generate a data file
    ![[Pasted image 20260708235819.png]]
like this 

12. to insert the data table into our own psql, we have to use command 
    --> project01_test=# \i 'C:/Users/USERAS/Downloads/human.sql'
13. select * from human order by date_of_birth asc/desc;
14. select distinct * / first_name from human;
15. select * from human where first_name = 'Turabi';
16. select * from human where first_name = 'Turabi' and gender = 'male';
17. select * from human limit 10;
18. select * from human offset 5 limit 10; = clears out first 5 rows by offset keyword
19. select * from human offset 5 fetch first 10 row only; 
= this "fetch first 10 row only" is like limit 10
20. between , in
21. 