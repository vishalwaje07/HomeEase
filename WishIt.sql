<<<<<<< HEAD
Create database micro;
use micro;

 CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `is_account_non_expired` bit(1) DEFAULT NULL,
  `is_account_non_locked` bit(1) NOT NULL,
  `is_credentials_non_expired` bit(1) NOT NULL,
  `is_enabled` bit(1) NOT NULL,
  `mobile` varchar(16) NOT NULL,
  `name` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` varchar(255) NOT NULL,
  `username` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`mobile`),
  UNIQUE KEY (`username`)
) ;

CREATE TABLE `verification_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `otp` int NOT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `customers` (
  `customerid` bigint NOT NULL AUTO_INCREMENT,
  `aadhaar` bigint DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `dob` datetime(6) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `userid` bigint DEFAULT NULL,
  PRIMARY KEY (`customerid`)
);


 CREATE TABLE `services` (
  `id` int NOT NULL,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY  (`name`)
);


CREATE TABLE `suppliers` (
  `supplierid` bigint NOT NULL AUTO_INCREMENT,
  `aadhaar` bigint NOT NULL,
  `address` varchar(255) NOT NULL,
  `charge` int NOT NULL,
  `dob` datetime(6) DEFAULT NULL,
  `pincode` int NOT NULL,
  `userid` bigint NOT NULL,
  `service_type_id` int DEFAULT NULL,
  PRIMARY KEY (`supplierid`),
  UNIQUE KEY `UK_s4abo6ux5cx4k8hssujcu0i5r` (`userid`),
 
  CONSTRAINT FOREIGN KEY (`service_type_id`) REFERENCES `services` (`id`)
);


 CREATE TABLE `orders` (
  `orderid` bigint NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `orderdate` datetime(6) DEFAULT NULL,
  `servicetypeid` int NOT NULL,
  `status` varchar(16) NOT NULL,
  `supplierid` bigint NOT NULL,
  `customerid_customerid` bigint DEFAULT NULL,
  `feedback` varchar(255) DEFAULT ' ',
  `rating` int DEFAULT '0',
  PRIMARY KEY (`orderid`),
  CONSTRAINT  FOREIGN KEY (`customerid_customerid`) REFERENCES `customers` (`customerid`)
)

=======
Create database micro;
use micro;

 CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `is_account_non_expired` bit(1) DEFAULT NULL,
  `is_account_non_locked` bit(1) NOT NULL,
  `is_credentials_non_expired` bit(1) NOT NULL,
  `is_enabled` bit(1) NOT NULL,
  `mobile` varchar(16) NOT NULL,
  `name` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` varchar(255) NOT NULL,
  `username` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`mobile`),
  UNIQUE KEY (`username`)
) ;

CREATE TABLE `verification_token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `otp` int NOT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `customers` (
  `customerid` bigint NOT NULL AUTO_INCREMENT,
  `aadhaar` bigint DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `dob` datetime(6) DEFAULT NULL,
  `pincode` int DEFAULT NULL,
  `userid` bigint DEFAULT NULL,
  PRIMARY KEY (`customerid`)
);


 CREATE TABLE `services` (
  `id` int NOT NULL,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY  (`name`)
);


CREATE TABLE `suppliers` (
  `supplierid` bigint NOT NULL AUTO_INCREMENT,
  `aadhaar` bigint NOT NULL,
  `address` varchar(255) NOT NULL,
  `charge` int NOT NULL,
  `dob` datetime(6) DEFAULT NULL,
  `pincode` int NOT NULL,
  `userid` bigint NOT NULL,
  `service_type_id` int DEFAULT NULL,
  PRIMARY KEY (`supplierid`),
  UNIQUE KEY `UK_s4abo6ux5cx4k8hssujcu0i5r` (`userid`),
 
  CONSTRAINT FOREIGN KEY (`service_type_id`) REFERENCES `services` (`id`)
);


 CREATE TABLE `orders` (
  `orderid` bigint NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `orderdate` datetime(6) DEFAULT NULL,
  `servicetypeid` int NOT NULL,
  `status` varchar(16) NOT NULL,
  `supplierid` bigint NOT NULL,
  `customerid_customerid` bigint DEFAULT NULL,
  `feedback` varchar(255) DEFAULT ' ',
  `rating` int DEFAULT '0',
  PRIMARY KEY (`orderid`),
  CONSTRAINT  FOREIGN KEY (`customerid_customerid`) REFERENCES `customers` (`customerid`)
)

>>>>>>> 0e32283c3acbc28cb9f861a8f900783845f912fc
