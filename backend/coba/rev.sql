CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'brand', 'influencer') NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    pic_name VARCHAR(255),
    city VARCHAR(255)
);

CREATE TABLE campaigns_rev (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    brand_id INT,
    influencer_id INT,
    brief TEXT,
    start_date DATE,
    end_date DATE,
    proposal_deadline DATE,
    status ENUM('pending', 'approved', 'ongoing', 'completed') DEFAULT 'pending',
    FOREIGN KEY (brand_id) REFERENCES users(id),
    FOREIGN KEY (influencer_id) REFERENCES users(id)
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    campaign_id INT,
    amount DECIMAL(10, 2),
    commission DECIMAL(10, 2),
    status ENUM('pending', 'completed') DEFAULT 'pending',
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id)
);

CREATE TABLE services_rev (
    id INT AUTO_INCREMENT PRIMARY KEY,
    influencer_id INT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    description TEXT,
    FOREIGN KEY (influencer_id) REFERENCES users(id)
);

CREATE TABLE bank_accounts_rev (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    bank_type VARCHAR(255),
    account_number VARCHAR(255),
    account_holder VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);