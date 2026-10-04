# Group 

- group by 
- having
- where
- order

- sequence
    -  where(condition) then group by then having(condition) then order by

```
using world;
select * from country;
select Continent,SUM(SurfaceArea)  from country group by Continent;
select Continent,AVG(LifeExpectancy)  from country group by Continent;

select Continent,MAX(LifeExpectancy),MIN(LifeExpectancy) from country group by Continent;


select Continent,COUNT(Name) from country group by Continent ;

select Region,Name CountryName,COUNT(*) from country group by Region,Name;
select Region,count(Name) from country group by Region;

select Region,count(Name) as COUNTRY from country group by Region having count(Name)>10;
select Name,SurfaceArea from country group by Name,SurfaceArea having SurfaceArea <200  ;

select Continent,LifeExpectancy from country group by Continent,LifeExpectancy having AVG(LifeExpectancy)>70;

select LifeExpectancy,Name from country where LifeExpectancy >50 group  by LifeExpectancy ,Name; 

select * from country order by SurfaceArea ;
select * from country order by SurfaceArea desc  ;

select Name,SurfaceArea from country group by Name,SurfaceArea having SurfaceArea <200 order by SurfaceArea desc ;


select Continent, Name as CountryName,Population from country  where Population<10000 group by Continent,Name,Population order by Population desc;
select Name,LifeExpectancy, Population from country where LifeExpectancy >70 group by Name ,LifeExpectancy ,Population having Population<10000 order by LifeExpectancy;


```


# SET operators
- UNION
- UNION ALL
- INTERSECT
- MINUS

- Union : 
  - table 1 with id :1 2 3  ,table 2 with id : 2 3 5
  -  result : table with id :1 2 3 5
  - remove duplicacy


- Union ALL: 
  - table 1 with id :1 2 3  ,table 2 with id : 2 3 5
  - result : table with id :1 2 3  2 3 5
  -  have duplicacy

# UNION AND UNION ALL
- The union operator is used to combine the result-set of two  or more select statements.
- Each select statement within UNION must have the same number of columns
- The columns must also have similar data types
- The columns in each SELECT statement must also be in same order

```
using db;
create table student (ID INT(3),Name VARCHAR(20));
insert into student values(101,'Racho');
insert into student values(102,'Hki');
insert into student values(103,'Bvi');
insert into student values(104,'Trik');
insert into student values(105,'Yik');
select * from student;

create table mark (ID INT(3),Grade VARCHAR(2));
insert into mark values(101,'A');
insert into mark values(102,'B');
insert into mark values(103,'C');
select * from mark;

select ID from student ;
select ID from mark;

//number same,order same, datatype same
select ID,ID2 from student union  select ID,ID2 from mark;//no duplicate
select ID from student union all select ID from mark;// duplicate 
```

# SQL Joins
- Joins help retrieving data from two or more database tables.
- The tables are manually related using primary and foregin keys.
- Types of Joins
  - Equi Join/Inner Join/Simple Join
  - Right Join
  - Left Join
  - Full Join
  - Self Join

- Inner join  
  - Matched Records

- Left Join
  - Matched records + Un matched records from left table

- Right Join
  - Matched records + Un matched records from Right table

- full join
  - matched record + Un matched records from left table +  Un matched records from Right table

- self join
  - Join with a table with the same table 

```
select * from student inner join mark
on 
student.ID=mark.ID;

select * from student left join mark
on 
student.ID=mark.ID;

select * from student right join mark
on 
student.ID=mark.ID;


INSERT INTO employees
(EMPLOYEE_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER,
 HIRE_DATE, JOB_ID, SALARY, COMMISSION_PCT, MANAGER_ID, DEPARTMENT_ID)
VALUES

(1021, 'Aarav', 'Shrestha', 'AARAV.SHRESTHA', '9841000021',
 '2024-01-15', 'IT_PROG', 65000.00, 0.00, 1006, NULL);


select * from employees ;
select * from departments ;

select * from employees inner join departments 
on employees.DEPARTMENT_ID = departments.DEPARTMENT_ID ; 

select * from employees right join departments 
on employees.DEPARTMENT_ID = departments.DEPARTMENT_ID ; 

select * from employees left join departments 
on employees.DEPARTMENT_ID = departments.DEPARTMENT_ID ; 

select  EMPLOYEE_ID,EMAIL,PHONE_NUMBER,departments.DEPARTMENT_ID,DEPARTMENT_NAME,LOCATION_ID from employees inner join departments
on employees.DEPARTMENT_ID = departments.DEPARTMENT_ID;

```

- self join

```
select e.EMPLOYEE_ID,m.MANAGER_ID,e.EMAIL,e.HIRE_DATE from employees e,employees m where e.EMPLOYEE_ID>m.MANAGER_ID;
```

# Sub Queries
- Sub Query is a query within a query
- Sub Query contains 2 parts.
  - Outer query.
  - Inner query.
- There are 2 types of sub queries:
  - Single row sub query ,<=,>=,!=
  - Multi row sub query,IN,ANY,ALL  

- outer query <(inner query)  
- Single row sub query
```
// employee whose salary is less than 'Nisha' salary
select salary from employees where FIRST_NAME='Nisha';

select EMPLOYEE_ID,FIRST_NAME as nam,LAST_NAME as thar ,SALARY from employees where SALARY< (select salary from employees where FIRST_NAME='Nisha') group by EMPLOYEE_ID,FIRST_NAME,LAST_NAME,SALARY
order by SALARY asc;

//highest salary
select FIRST_NAME ,LAST_NAME ,SALARY from employees where salary=(select MAX(SALARY) from employees);

```
- Multi row sub query

```
select * from employees where SALARY IN (select SALARY from employees where DEPARTMENT_ID= 30);
select * from employees where SALARY <ALL (select SALARY from employees where DEPARTMENT_ID= 30);
select * from employees where SALARY >ALL (select SALARY from employees where DEPARTMENT_ID= 30);
```

- Query to get department name of the employee

```
select * from employees;
select * from departments;
select DEPARTMENT_NAME from departments where employees.DEPARTMENT_ID=departments.DEPARTMENT_ID;

select LOCATION_ID from departments where employees.DEPARTMENT_ID=departments.DEPARTMENT_ID;

select FIRST_NAME,EMAIL,SALARY,(select LOCATION_ID from departments where employees.DEPARTMENT_ID=departments.DEPARTMENT_ID) LOCATION_ID from employees ; 
```

- List out the employees who are having salary less than maximum salary and 
  also hire date greater than hire date of an employee who has maximium salary 

```
select MAX(SALARY) from employees;
select * from employees where SALARY <(select MAX(SALARY) from employees);

select HIRE_DATE from employees where SALARY = (select MAX(SALARY) from employees);
select * from employees where HIRE_DATE>(select HIRE_DATE from employees where SALARY = (select MAX(SALARY) from employees));


select * from employees where  SALARY <(select MAX(SALARY) from employees) and HIRE_DATE>(select HIRE_DATE from employees where SALARY = (select MAX(SALARY) from employees));
```