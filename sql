DROP TABLE IF EXISTS `trainee`.`ishabugdata`;
CREATE TABLE  `trainee`.`ishabugdata` (
  `id` int(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `time` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  `assignee` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;








DROP TABLE IF EXISTS `trainee`.`ishabugformdata`;
CREATE TABLE  `trainee`.`ishabugformdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `assignee` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=latin1;




DROP TABLE IF EXISTS `trainee`.`ishacategory`;
CREATE TABLE  `trainee`.`ishacategory` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `child_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS `trainee`.`ishaemployee_hr`;
CREATE TABLE  `trainee`.`ishaemployee_hr` (
  `eid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `contactnumber` decimal(12,0) NOT NULL,
  `homeaddress` varchar(255) NOT NULL,
  `worklocation` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `eidcommon` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS `trainee`.`ishahrtable_hr`;
CREATE TABLE  `trainee`.`ishahrtable_hr` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `employeepayroal` int(11) DEFAULT NULL,
  `socialsecurityno` varchar(45) NOT NULL,
  `id` varchar(45) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `eidcommon` varchar(50) DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT '1',
  PRIMARY KEY (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS `trainee`.`ishalocation_hr`;
CREATE TABLE  `trainee`.`ishalocation_hr` (
  `buildingid` varchar(20) NOT NULL,
  `companylocation` varchar(45) NOT NULL,
  `address` varchar(255) NOT NULL,
  `zipcode` int(10) unsigned NOT NULL,
  `manager` varchar(45) NOT NULL,
  PRIMARY KEY (`buildingid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;





DROP TABLE IF EXISTS `trainee`.`ishausertable`;
CREATE TABLE  `trainee`.`ishausertable` (
  `recid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` char(6) CHARACTER SET ucs2 NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` char(1) NOT NULL,
  `hobbies` varchar(255) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `country` varchar(30) NOT NULL,
  `status` char(1) NOT NULL,
  `dateadded` datetime NOT NULL,
  `dateupdated` datetime NOT NULL,
  `endeffdt` datetime NOT NULL,
  `dispstatus` char(20) DEFAULT 'Active',
  PRIMARY KEY (`recid`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `trainee`.`ishausertable2`;
CREATE TABLE  `trainee`.`ishausertable2` (
  `recid` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` char(6) CHARACTER SET ucs2 NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `gender` char(1) NOT NULL,
  `hobbies` varchar(255) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `country` varchar(30) NOT NULL,
  `status` char(1) NOT NULL,
  `dateadded` datetime NOT NULL,
  `dateupdated` datetime NOT NULL,
  `endeffdt` datetime NOT NULL,
  `dispstatus` char(20) DEFAULT 'Active',
  PRIMARY KEY (`recid`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;



DROP TABLE IF EXISTS `trainee`.`ishausernext`;
CREATE TABLE  `trainee`.`ishausernext` (
  `recid` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` char(6) CHARACTER SET ucs2 DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `hobbies` varchar(255) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `status` char(1) DEFAULT 'A',
  `dateadded` datetime DEFAULT NULL,
  `dateupdated` datetime DEFAULT NULL,
  `endeffdt` datetime DEFAULT NULL,
  `stt` char(1) NOT NULL DEFAULT 'A',
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;
