CREATE DATABASE EAFSA_DB;
USE DATABASE EAFSA_DB;

CREATE TABLE usuario(
    usu_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_username VARCHAR(100) NOT NULL,
    usu_password VARCHAR(100) NOT NULL,
    usu_ap_paterno VARCHAR(50) NOT NULL,
    usu_ap_materno VARCHAR(50) NOT NULL,
    usu_activo TINYINT(1),
    usu_admin TINYINT(1)
);

CREATE TABLE empleado(
    emp_id INT AUTO_INCREMENT PRIMARY KEY ,
    emp_nombre VARCHAR(150) NOT NULL,
    emp_ap_paterno VARCHAR(150) NOT NULL,
    emp_ap_materno VARCHAR(150) NOT NULL,
    emp_dni VARCHAR(150) NOT NULL,
    emp_foto VARCHAR(200),
    emp_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articulo(
    art_id INT AUTO_INCREMENT PRIMARY KEY,
    art_nombre VARCHAR(150) NOT NULL,
    art_marca VARCHAR(50),
    art_modelo VARCHAR(50),
    art_color VARCHAR(50),
    art_ubicacion VARCHAR(50),
    art_tipo VARCHAR(40),
    art_unidad VARCHAR(30)
);



DESCRIBE empleado;

