### SQL

- Create db
- Create Table
- Inserted data
- Update the col
- Fetch data of table

```
CREATE DATABASE mydb;
CREATE SCHEMA mydb;
DROP DATABASE mydb;
DROP SCHEMA mydb;

USE mydb;
CREATE TABLE student(SNO INT(2),SNAME VARCHAR(20),SMARK(2));
ALTER TABLE student ADD(SADDRESS VARCHAR(20))

INSERT INTO student VALUES (101,'Ruchi',98,'bkt')
INSERT INTO student VALUES (102,'SAS',98,NULL)

SELECT * FROM student;

```

- Select the particular col

```
SELECT SNO,SNAME FROM student;
```

- Update col name during execution
- Update the value of column section

```
SELECT SNO NO,SNAME NAME,SMARK MARK FROM student;
SELECT SNO NO,SNAME NAME,SMARK+10 MARK FROM student;
```

# SQL DATA TYPES

- Numeric
- Text
- Date/time
  - (Numeric Data Types)
    - INT,FLOAT,DOUBLE(,),DECIMAL(,),BIGINT,TINYINT,SMALLINT

  - (TEXT DATA Types)
    - CHAR,VHARCHAR,BLOB,MEDIUMTEXT,MEDIUMBLOB,LONGTEXT,LONGBLOB

  - (Date and Time)
    - DATE YYYT-MM-DD,
    - DATETIME YYY-MM-DD HH:MM:SS,
    - TIMESTAMP YYYYMMDDHHMMSS,
    - TIME HH:MM:SS

# SQL

- Where (Filtering records based on conditions)

```
use world;
select * from country;
select * from country where LifeExpectancy > 70;
select * from country where Capital < 100;
select * from country where GovernmentForm  = 'Republic';
select * from country where GNPOld is null;
select distinct Code  from country;
select distinct * from country;//all col with unique value
```

- Logical operator

```
use world;
select * from country where Capital>1000 and GNP >=3000;
select * from country where LifeExpectancy > 80 or Capital>4000;
select * from country where  not Continent ='Asia';
```

- Between operator

```
use world;
select * from country where Capital >= 100 and Capital<=200;
select * from country where Capital  between 100 and 200;
select * from country where Capital not between 100 and 200;
```

- IN operator

```
use world;
select * from country where capital =1 or capital =56 or capital =198;
select * from country where capital in (1,56,5);
select * from country where capital not in (1,56,5);
```

- Pattern Matching operators (while card characters)
  - % represent many ch
  - \_ represent single character

```

use world;
select * from country where Name like 'S%';//name start with s
select * from country where Name like '%r';//name end withr
select * from country where Name like 'S%a';//saart with s end with a

select * from country where Name like '%s%';//bich ma s hunu
select * from country where Name not like 'S%';// name not starting withs
select * from country where Name  like '%b_';//b paxi one char hunu

select * from country where Name like '____';// name with 4 char
```

# Important section

## DDL COMMANDS (Data definition language)

- CREATE
- ALTER
- DROP
- TRUNCATE
- RENAME

- CREATE is used to create db objects (Database,Table,views,synonymus etc...)

- ALTER
  - Works on defination level not data level
  - Adding new columns
  - Dropping the existing column
  - Modifying existing column(Inc/dec size of column and change data type of column)
  - Rename a cloumn

```
use db;

create table CEO (CID INT(3),CNAME VARCHAR(20),CAGE INT(2));
describe CEO;

insert into CEO values ('101','Ruchi Dumaru',20);
insert into CEO values ('102','Sush Sharma',25);
commit;

select * from CEO;

select CNAME Name from CEO;

alter table CEO add (CADDRESS VARCHAR (20), NETWORTH FLOAT(10));

alter table ceo modify column CNAME VARCHAR(25);//MODIFY COLUMN

update ceo
set CADDRESS ='BKT' ,NETWORTH = 100000000 where CID = 101;

update ceo
set CADDRESS ='KTM',NETWORTH = 1000000000 where CID= 102;
select * from CEO;

alter table  CEO drop column NETWORTH;//DELETE COLUMN

alter table CEO rename column CNAME to Name;//change name of column

```

- Drop
  - It delete whole complete thing(data,structure,table)

- Truncate
  - It only delete data ,data structures still be present .
  - It delete data permanently from the table ,data cannot be rollback

- Delete
  - It only delete data ,data structures still be present .
  - It delete data temporarly from the table ,data can be rollback.

- Note:
  - When ever we perform the truncate delete drop action it doesnot instantly
    reflect to db , we have to use the commit ; things so instead of that we do
    `set action =0 ` , this will help reflect the change done from (drop/truncate/delete)
    direct to database parmanently.

- Delete example

```
set autocommit=0;
set SQL_SAFE_UPDATES=0;
select * from employee;

delete  from employee;
rollback; //give back the data

```

- Truncate example

```
set autocommit=0;
set SQL_SAFE_UPDATES=0;
select * from employee;

insert into employee values(101,'Ani','Dev',20);
insert into employee values(102,'Isha','Dev',29);
insert into employee values(103,'Joli','Dev',25);
commit ;//make changes reflect to db

TRUNCATE table employee;

rollback;//donesnot give data back again;
```
- Rename
```
rename table ceo to ceos;
alter table ceo rename column CNAME to Name;
```


# MySQL functions
- string func: operates on string data types
- Numeric functions :operate on numeric data types
- Date functions : operate on data types
- Aggregate func: operate on all of the data types and produce a summerized result sets.


- String function
```
use world;
select * from country where Continent = 'Asia';
select * from country;
select Name from country;
select UPPER(Name)  from country;
select LOWER(Name) from country;


select length(Continent) from country;

select * from country where length(Continent)=6;

select TRIM('    namaste    ');
select TRIM('p' from 'ppppppbhhsnmpoo');//right and left string only grt trimmed

select INSTR ('NAMASTE','E');// return position of str in numeric val
select CONCAT ('MYSQL','LEARNING');//MYSQLLEARNING
select Name,Region from country;//CONCAT TWO COLUMN
select concat (Name,Region) NameRegion from country;
```

- Numaric function

```
select ABS (-40);//absolute val return garxa
select ABS (40);
select SQRT (25);
select MOD(14,4);
select POWER(2,4);

select TRUNCATE(40.1234,3);//give 3 dight after point 
select TRUNCATE(20.1234,2);//give 2 dight after point 

select TRUNCATE(1299,-1);//last digit 0
select TRUNCATE(1299,-2);//last two  digit 
select TRUNCATE(991299,-4);////last 4 digit 

select GREATEST(100,9000);
select LEAST(12,1,90);
```

- Date function

```
select CURRENTDATE();
select CURRENT_DATE();

select CURRENT_TIME();

select now();
select SYSDATE();

select MONTH("2026-6-04");
select DAY('2026-10-04');
select YEAR('2026-10-04');


select * from employee where YEAR(HIRE_DATE) ='1990' ;
select * from employee where month(HIRE_DATE)='6';
select * from employee where MONTHNAME(HIRE_DATE)='January';
```

# Aggregate functions 
- They are all about preforming calculation on multiple rows of single column of a table and returning a single value

```
select AVG(LifeExpectancy) from country;
select SUM(Capital) from country;
select MAX(LifeExpectancy)  from country;
select MIN(LifeExpectancy)  from country;
select COUNT(*) from country;//total row
```