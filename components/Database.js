import * as SQLite from 'expo-sqlite'

const openDatabase = async () => {
    try {
        return await SQLite.openDatabaseAsync('database')
    } catch (error) {
        console.log('open error')
    }
}

const clearTable = async (db) => {
    try {
        await db.execAsync(
            `DELETE FROM tasks;`
        )
    } catch (error) {
        console.log('clear error')
    }
}

const createTable = async (db) => {
    try {
        await db.execAsync(
        `PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT);`
        )
    } catch (error) {
        console.log('create error')
    }
}

const insertData = async (db, name) => {
    try {
        await db.runAsync(`INSERT INTO tasks (name) VALUES (?)`, [name]);
    } catch (error) {
        console.log('insert error')
    }
}

const deleteData = async (db, id) => {
    try {
        await db.runAsync(`DELETE FROM tasks WHERE id = (?)`, [id])
    } catch (error) {
        console.log('delete error')
    }
}

const getAllRows = async (db) => {
    try{
        const allRows = await db.getAllAsync('SELECT * FROM tasks');
        return allRows;
    } catch (error) {
        console.log('select error')
    }
}

export {
    openDatabase,
    clearTable,
    createTable,
    insertData,
    getAllRows,
    deleteData
}