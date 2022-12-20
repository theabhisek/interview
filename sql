database
Quer
SQL
Dynamic SQL
tables and fields 
Primary Key and Foreign Key, Superkey and candidate,composite
views
index
datatype postgresql support or not
json,array,enum
any,olm
array agrigate,json agrigate


######################database###################################33
A database can be defined as the structured form of data storage from which data can be retrieved and managed based on requirements.
 Basically, a database consists of tables where data is stored in an organized manner. 
 Each table consists of rows and columns to store data. Data can be stored, modified, updated, and accessed easily in a database.
 
 Syntax :
 		create, database ,databaseName;
 
###########################Quer###########################
A query is nothing but a request sent to a database to retrieve data or information. The required data can be retrieved from a table or many tables in the database.

Query languages use various types of queries to retrieve data from databases. SQL, Datalog, and sQL are a few examples of query languages; however, SQL is known to be the widely used query language. SQL returns data as columns and rows in a table, whereas other languages return data in other forms, like graphs, charts, etc.

################################Subquery######################################
It is a query that exists inside the statements such as SELECT, INSERT, UPDATE, and DELETE. It may exist inside a subquery too. A subquery is also known as an inner query or inner select. The statement with a subquery is an outer query or outer select.

Let’s see the example shown below in which the maximum unit price is the result that will be returned by the subquery using the SELECT statement. Also, orders is the value that will be returned by the outer query using the SELECT statement.
###############################SQL################################
SQL is known as the query programming language. 
It uses SQL queries to store, modify and retrieve data into and from databases. 
Briefly, SQL inserts, updates, and deletes data in databases; creates new databases and new tables;
 creates views and stored procedures; and sets permissions on the database objects.

######################################Dynamic SQL, ###################
Dynamic SQL is the programming method that allows building SQL statements during runtime. You can use dynamic SQL when you do not know the full text of the SQL statements used in the program until runtime. Moreover, dynamic SQL can execute SQL statements that are not supported by static SQL programs. So, Dynamic SQL helps to build more flexible applications.


###########################################Table And Fields#########################################
Tables are the database objects where data is stored logically. 
Like a spreadsheet, data is stored in the form of rows and columns in a database table.
A row in a table represents a record, and columns represent the different fields. 
Fields have the data types such as text, dates, numbers, and links.

##################################################Primary Key and Foreign Key, Superkey and candidate,composite###############################
Primary Key: A primary is a field or combination of many fields that help identify records in a table. 
Note that there can be only one primary key for a table. The table that has the primary key is known as the parent table.

Foreign Key: A foreign key is the field or combination of fields of a table that links the primary key of another table. A foreign key is used to create a connection between two tables. Unlike a primary key, a table can have one or many foreign keys. The table that has a foreign key is known as the child table.

For example, customer ID (1) is the primary key of the Customers table, and customer ID (2) in the orders table is identified as the foreign key to the customer's table. 

Superkey:A super key may be a single or a combination of keys that help to identify a record in a table. 
	Know that Super keys can have one or more attributes, even though all the attributes are not necessary to identify the records.

candidate:A candidate key is the subset of Superkey, which can have one or more than one attributes to identify records in a table.
		 Unlike Superkey, all the attributes of the candidate key must be helpful to identify the records.

Note that all the candidate keys can be Super keys, but all the super keys cannot be candidate keys.
composite:
	A composite key is the combination of two or more columns in a table used to identify a row in a table. Know that a combination of columns is essential in 		creating composite keys because a single column in a composite key cannot identify a row in a table. We can say that the composite key is the primary key with a 		few more attributes or columns. Also, a composite key can be a combination of candidate keys.
	
###################################################Join ##########################
PostgreSQL joins used to join data from multiple tables. We have used this. Whenever the need to retrieve data from one or more tables. In PostgreSQL, join data from different tables combined using common columns from different tables. Using this, we have the possibility to combine the select and join statement into one statement. We can join a single table with multiple names as an alias in PostgreSQL. It will retrieve data according to the condition. They are instrumental in PostgreSQL to retrieve data from multiple tables.
Following are the different types of logical operations:

INNER JOIN:: The INNER JOIN keyword selects all rows from both tables as long as there is a match between the columns. If there are records in the "Orders" table that do not have matches in "Customers", these orders will not be shown!



LEFT (OUTER) JOIN: The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 			records from the right side, if there is no match.
	SELECT column_name(s)
	FROM table1
	LEFT JOIN table2
	ON table1.column_name = table2.column_name;

RIGHT (OUTER) JOIN:  The RIGHT JOIN keyword returns all records from the right table (table2), and the matching records from the left table (table1). The result is 0 			records from the left side, if there is no match.
			SELECT column_name(s)
			FROM table1
			RIGHT JOIN table2
			ON table1.column_name = table2.column_name;
			
FULL (OUTER) JOIN :The FULL OUTER JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.


			SELECT column_name(s)
			FROM table1
			FULL OUTER JOIN table2
			ON table1.column_name = table2.column_name
			WHERE condition;

CROSS JOIN:In SQL, CROSS JOINs are used to combine each row of one table with each row of another table, and return the Cartesian product of the sets of rows from the tables that are joined.
The CROSS JOIN query in SQL is used to generate all combinations of records in two tables. For example, you have two columns: size and color, and you need a result set to display all the possible paired combinations of those—that's where the CROSS JOIN will come in handy.	
##########################################Self Join############################
In self-join operation, a table is joined with itself to retrieve the desired data. 
Every join operation needs two tables as a basic rule. Therefore, in self-join, a table is joined with an instance of the same table. 
By doing this, values of the two table columns are compared with each other, and the desired data is retrieved as the result set.

 ##################################Cross Join############################
 Cross Join is basically the Cartesian product type in which each row in a table is paired with all the rows of another table. So, the result set will be the paired combinations of the rows of two tables. Generally, cross join is not preferred by developers as it increases complexity in programs when there are many rows in tables. But, it can be used in queries if you identify normal join operation won’t be effective for your query.
 
 #######################################constraints#####################################
  SQL constraints specify conditions for a column or table to manage the data stored in tables effectively.

 The following are the commonly used SQL constraints.

NOT NULL - This condition ensures columns won’t accept a NULL value.
UNIQUE - It ensures that all the values in a column must be unique.
CHECK - It ensures that all the column fields obey a specific condition.
DEFAULT - It provides a default value for the fields of a column unless no value is specified for the fields
CREATE INDEX - It ensures creating an index for tables so that retrieving data from the tables becomes easier
PRIMARY KEY - It must identify every row of a table
FOREIGN KEY -  It must link tables based on common attributes
###########################################################index#############################
An index is used to retrieve data from a database quickly. Generally, indexes have keys taken from the columns of tables and views.
 We can say, SQL indexes are similar to the indexes in books that help to identify pages in the books quickly.

There are two types of indexes:

Clustered indexes:A Cluster index is used to sort table data rows according to their key values.
Non-clustered indexes
The following are the different types of indexes in SQL.

Single-column indexes
Unique indexes
Composite indexes
Implicit indexes

The main difference between clustered index and non clustered index in PostgreSQL is that the clustered index is an index type used to sort table data rows according to their key values. In RDBMS, a user can create a clustered index based on that column using the primary key. 
On the other hand, a non-clustered index is an index where the order of the rows does not match the physical order of the actual data. The non-clustered index is ordered by the columns that make up the index

###############################################################views#####################
Views are the virtual database tables created by selecting rows and columns from one or more tables in a database. They support developers in multiple ways, such as simplifying complex queries, restricting access to queries, and summarising data from many tables.

There are two types of views, as mentioned below:

System-defined views: They can be used for specific purposes and perform specific actions only. It provides all the information and properties of databases and tables.
User-defined views: They are created as per the requirements of users. They are routines that accept parameters, perform complex functions, and return a value.

#############################################################SQL Injection,##########################
SQL injection is a malicious attack sent targeting an SQL server instance. It is usually sent through strings of statements and passed into the SQL server for execution. To avoid SQL injection, all statements must be verified for malicious vulnerabilities before allowing for execution.

In addition to that, the following methods can be applied to avoid SQL injections. They are given as follows:

Using type-safe SQL parameters
Using parameterized input with stored procedures
Filtering inputs
Reviewing codes
Wrapping parameters

################################################# Alias ######################################
SQL aliases help to assign temporary names for a table or column. It is used to simplify table or column names. And aliases can exist only for that query period. It can be created using the ‘AS’ keyword. Know that creation of an alias is in no way affecting the column names in the database. It can be applied when more than one table is involved in a query.

############################################# Data Inconsistency ######################################
Data inconsistency occurs when the same data exists in many tables in different formats. In other words, the same information about an object or person may be spread across the database in various places creating duplication. It decreases the reliability of the data and decreases the query performance significantly. To overcome this drawback, we can use constraints on the database.


#################################Black Box Testing#######################
The internal structure of the program is hidden from testers.It is performed by software testers.
Testing is known as outer or external software testing.Functional testing, non-functional testing, 
and regression testing are the types of black-box testing. 

#############################White Box Testing############################
Testers know the internal structure of the program.It is performed by software developers.
Testing is known as inner or internal software testing.Programming knowledge is a must for testers.
Path testing, loop testing, and condition testing are types of white box testing.

######################################auto-increment###########################################
It is a unique number that will be generated when a new record is inserted into a table.
 Mainly, it acts as the primary key for a table


#############################################pgAdmin########################
The pgAdmin in PostgreSQL is a data administration tool.
It serves the purpose of retrieving, developing, testing, and maintaining databases.

##########################################sql command ############	
DDL - Data Definition Languages    CREATE, DROP, ALTER, TRUNCATE, ADD COLUMN, and DROP COLUMN
DML - Data Manipulation Languages	INSERT, DELETE, and UPDATE
DCL - Data Control Language         	GRANT and REVOKE
TCL - Transaction Control Language      COMMIT, ROLLBACK, SAVEPOINT, and SET TRANSACTION
DQL - Data Query Language           	SELECT


ALTER	This command allows changing the structure of a table
CREATE	It allows the creation of database objects such as tables, views, and indexes.
DROP	This command allows removing database objects from a database
TRUNCATE	This command helps to delete all the rows of a table permanently.


INSERT	This command allows inserting a data into a table of a database
DELETE	This command allows deleting specific rows from a table
UPDATE	This command allows modifying a data in a table


GRANT	This command can be used to share a database with other users. All the database objects can be granted access with certain rights to users.
REVOKE	This command can be applied if you want to restrict the access of database objects by other users.

COMMIT	This command allows for saving the transactions made in a database.
ROLLBACK	This command helps undo the transactions made in a database with the condition that the transactions shouldn't be saved yet.
SAVEPOINT	This command helps to roll the transactions up to a certain point but not the entire transaction.

########################################Grant#############################
This statement grants permissions for users to perform operations such as SELECT, UPDATE, INSERT, DELETE, or any other operations on tables and views.

For example, if you would like to provide access to a user for updating tables, then the following statement must be used. In addition, the user too can grant permissions to other users.

GRANT UPDATE ON table_name TO user_name WITH GRANT OPTION
#################################################case####################
The CASE expression goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause.

If there is no ELSE part and no conditions are true, it returns NULL.
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;































