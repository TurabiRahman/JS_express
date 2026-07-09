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
21. where first_name like '%urab%'; = like 
22. there is another keyword ilike / ILIKE . these also works as same as 'like' but if we search for uppercase and  search for lowercase then 'like' will not work, in these cases 'ilike' works because it makes the search insensitive <>\
23. group by
24. group by having 
25. select max(price) from car;
26. select min(price) from car;
27. select avg(price) from car;
28. select round(avg(price), 2) from car;
29. select sum(price) from car;
30. select round(avg(price), 2) as average from car;
31. select coalesce(gender, 'not provided gender') from person;
32. select nullif(10, 1);
33. select now(); = to see the current time and date
34. select now() :: date; = see only date
35. select now() :: time; = see only time
36. select now() - interval '1 year'; = gives us time cutting down the interval
37. select now() + interval '10 year';
38. select (now() + interval '10 year') :: date;
39. select extract(year from now()); = by this we can extract any single item from now() year/date/day/dow - day of week/century 
40. select first_name, gender, age(now(), date_of_birth) as age from human; = to calculate the actual age now
41. Alter table human add constraint unique_email_address unique(email);
42. delete from person where id = 1004;
43. alter table human drop constraint unique_email_address;
44. alter table human add constraint gender_constraint check (gender ='Male' or gender = 'Female' );