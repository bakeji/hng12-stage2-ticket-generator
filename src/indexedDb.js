import { useState, useEffect } from 'react';

const useEventDB = () => {
    const [db, setDb] = useState(null);
    const [error, setError] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const request = indexedDB.open('EventDatabase', 1);

        request.onerror = (event) => {
            setError(`Database error: ${event.target.error}`);
        };

        request.onsuccess = (event) => {
            setDb(event.target.result);
            setIsReady(true);  
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('eventData')) {
                db.createObjectStore('eventData', { keyPath: 'id' });
            }
        };

        return () => {
            if (db) db.close();
        };
    }, []);

    const saveEventData = async (data) => {
        return new Promise((resolve, reject) => {
            if (!isReady) {  
                return;
            }

            const transaction = db.transaction(['eventData'], 'readwrite');
            const store = transaction.objectStore('eventData');
            
            const request = store.put({
                id: 'currentEventData',
                ...data
            });

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    };

    const clearAllData = async () => {
        return new Promise((resolve, reject) => {
            if (!isReady) {
                return;
            }

            const transaction = db.transaction(['eventData'], 'readwrite');
            const store = transaction.objectStore('eventData');
            const request = store.clear(); 

            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    };

    const loadEventData = async () => {
        return new Promise((resolve, reject) => {
            if (!isReady) {  
                resolve(null); 
                return;
            }

            const transaction = db.transaction(['eventData'], 'readonly');
            const store = transaction.objectStore('eventData');
            const request = store.get('currentEventData');

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    };

    return {
        isReady, 
        error,
        saveEventData,
        loadEventData,
        clearAllData
    };
};

export default useEventDB;