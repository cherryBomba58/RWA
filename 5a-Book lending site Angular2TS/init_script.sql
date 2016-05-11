DROP TABLE users;
DROP TABLE books;
DROP TABLE offers;

CREATE TABLE users (
  username varchar(50) NOT NULL,
  email varchar(50) DEFAULT NULL,
  place varchar(50) DEFAULT NULL,
  password varchar(50) DEFAULT NULL,
  guid varchar(50) DEFAULT NULL,
  point int(11) DEFAULT NULL,
  PRIMARY KEY (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE books (
  ISBN varchar(50) NOT NULL,
  writer varchar(50) DEFAULT NULL,
  title varchar(50) DEFAULT NULL,
  year int(11) DEFAULT NULL,
  publisher varchar(50) DEFAULT NULL,
  p_year int(11) DEFAULT NULL,
  PRIMARY KEY (ISBN)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE offers (
  offerid int(11) NOT NULL AUTO_INCREMENT,
  lender varchar(50) NOT NULL,
  borrower varchar(50) DEFAULT NULL,
  bookid varchar(50) NOT NULL,
  PRIMARY KEY (offerid),
  FOREIGN KEY(lender) REFERENCES users(username),
  FOREIGN KEY(borrower) REFERENCES users(username),
  FOREIGN KEY(bookid) REFERENCES books(ISBN)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users
(username,email,place,password,guid,point)
VALUES
('valaki', 'valaki@valaki.hu', 'valahol', 'probajelszo', 'proba1', 0),
('masvalaki', 'masvalaki@masvalaki.hu', 'mashol', 'masikproba', 'proba2', 0),
('bonbon', 'bonbon@bonbonetti.hu', 'mittudomenhol', 'megegyproba', 'proba3', 0);

INSERT INTO books
(ISBN,writer,title,year,publisher,p_year)
VALUES
('1234', 'George Orwell', '1984', 1948, 'Európa Könyvkiadó', 1989),
('2345', 'Petõfi Sándor', 'Összes költeményei', 1986, 'Szépirodalmi Könyvkiadó', 1986),
('3456', 'Mikszáth Kálmán', 'Beszterce ostroma', 1896, 'Szépirodalmi Könyvkiadó', 1988);

INSERT INTO offers
(lender,borrower,bookid)
VALUES
('masvalaki', 'valaki', '1234'),
('valaki', 'masvalaki', '2345'),
('bonbon', null, '3456');