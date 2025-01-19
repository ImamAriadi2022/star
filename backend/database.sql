CREATE DATABASE starpowers;

USE starpowers;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    birth_date DATE,
    gender VARCHAR(10),
    influencer_category VARCHAR(255),
    phone_number VARCHAR(20),
    referral_code VARCHAR(50),
    ktp_number VARCHAR(50),
    npwp_number VARCHAR(50),
    instagram_link VARCHAR(255),
    followers_count INT
);

CREATE TABLE brands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    brand_name VARCHAR(255),
    pic_name VARCHAR(255),
    pic_phone VARCHAR(20),
    province VARCHAR(255),
    city VARCHAR(255),
    referral_code VARCHAR(50)
);

CREATE TABLE campaigns (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    category VARCHAR(255),
    start_date DATE,
    end_date DATE,
    proposal_deadline DATE,
    brief TEXT,
    brand_id INT,
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);

CREATE TABLE influencers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    platform VARCHAR(255),
    followers VARCHAR(50),
    image VARCHAR(255),
    price DECIMAL(10, 2),
    account_number VARCHAR(50)
);

CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    influencer_id INT,
    status ENUM('accepted', 'rejected', 'pending'),
    FOREIGN KEY (influencer_id) REFERENCES influencers(id)
);

CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255) NOT NULL
);