DROP TABLE subjects;

CREATE TABLE subjects (
  code varchar(50) NOT NULL,
  name varchar(50) DEFAULT NULL,
  credit int(11) DEFAULT NULL,
  teacher varchar(50) DEFAULT NULL,
  PRIMARY KEY (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO subjects
(code,name,credit,teacher)
VALUES
('BMEVIAUA300', 'Önálló laboratórium', 6, 'Gipsz Jakab'),
('BMEVIAUA350', 'Informatikai technológiák', 2, 'Tóth László'),
('BMEVIAUA360', 'Adatvezérelt alkalmazások', 4, 'Szabó Zoltán'),
('RXFVKBTA270', 'Bűbájtan', 2, 'Perseus Piton'),
('HRVBKRTA120', 'Történelem', 5, 'ifj. Henry Jones');
