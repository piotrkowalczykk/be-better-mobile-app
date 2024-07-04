import * as SQLite from 'expo-sqlite'

const openDatabase = async () => {
    try {
        return await SQLite.openDatabaseAsync('database')
    } catch (error) {
        console.log('open')
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
        console.log('create')
    }
}

const insertData = async (db, name) => {
    try {
        await db.runAsync(`INSERT INTO tasks (name) VALUES (?)`, [name]);
    } catch (error) {
        console.log('insert')
    }
}

const getAllRows = async (db) => {
    try{
        const allRows = await db.getAllAsync('SELECT * FROM tasks');
        for (const row of allRows){
            console.log(row.id, row.name)
        }
    } catch (error) {
        console.log('select')
    }
}

export {
    openDatabase,
    createTable,
    insertData,
    getAllRows
}