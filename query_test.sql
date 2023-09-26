/*Basic Table Query*/
CREATE TABLE data_diri (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  parent_id INT
);

INSERT INTO data_diri (id, name, parent_id) VALUES
  (1, 'Zaki', 2),
  (2, 'Ilham', NULL),
  (3, 'Irwan', 2),
  (4, 'Arka', 3);
  
/*DROP TABLE data_diri;*/

SELECT * FROM data_diri;

/* Result Query */
SELECT 
	t1.id, 
    t1.name, 
    t2.name AS parent_name 
FROM 
	data_diri t1 
LEFT JOIN 
	data_diri t2 
    ON 
    t1.parent_id = t2.id;