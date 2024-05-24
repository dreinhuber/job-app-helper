import { DATA_STORE_NAME } from './envs';

export function storageAvailable(type) {
    let storage;
    try {
        storage = window['localStorage'];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        console.log('Able to write to localStorage!');
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === "QuotaExceededError" ||
            // Firefox
            e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

export function checkOrCreateDataStoreKey () {
    let storage;
    storage = window['localStorage'];
    if (!storage.getItem(DATA_STORE_NAME)) {
        console.log('Creating Applicant Info Storage Key!')
        storage.setItem(DATA_STORE_NAME, JSON.stringify({}));
    } else {
        console.log('Applicant Info Storage Key Found!');
    }
}

export function getDataStore () {
    const ds = window['localStorage'][DATA_STORE_NAME];
    return JSON.parse(ds);
}

export function readFromDataStore (key) {
    const ds = getDataStore();
    return ds[key];
}

export function writeToDataStore (key, value) {
    const storage = window['localStorage']
    const ds = getDataStore();
    ds[key] = value;
    storage.setItem(DATA_STORE_NAME, JSON.stringify(ds));
}

// export function checkOrCreateIndexedDb () {
//     let storage;
//     try {
//         storage = window['indexedDB'];
//         const conn = storage.open(DB_NAME);
//         conn.createObjectStore();
//         console.log(conn);
//     } catch (e) {
//         console.log(e);
//         return (
//             e instanceof DOMException &&
//             // everything except Firefox
//             (e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === "QuotaExceededError" ||
//             // Firefox
//             e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             storage &&
//             storage.length !== 0
//         );
//     }
// }