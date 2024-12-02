import mysql from 'mysql2/promise'
export const conexion = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password: "",
    database: "pw2024",
    port: 3306,
    multipleStatements: false
})