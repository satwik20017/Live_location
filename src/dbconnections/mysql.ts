import mongoose from 'mongoose';
import mysql2 from 'mysql2/promise';

export const url = "mongodb://127.0.0.1:27017/GEOFENCE";

export async function mongoConnection() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

export const dbconnection = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'liveloc'
});


export async function MYSQL() {
  try {
    const connection = await dbconnection.getConnection();
    console.log('Connected to MySQL as ID', connection.threadId);
    connection.release();
  } catch (err) {
    console.error('Error connecting to MySQL:', err);
  }
}