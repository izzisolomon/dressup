import { platform, auth, firestore } from "./FirebaseSDK";

export default class Database {
    static getPlatform() {
        return platform;
    }

    static signIn(email, password) {
        return Database.authenticate(email, password, false);
    }

    static signUp(email, password) {
        return Database.authenticate(email, password, true);
    }

    static authenticate(email, password, createUser = false) {
        if (createUser) {
            return auth.createUserWithEmailAndPassword(email, password);
        } else {
            return auth.signInWithEmailAndPassword(email, password);
        }
    }

    static signOut() {
        return auth.signOut();
    }

    static onAuthStateChanged(handler) {
        auth.onAuthStateChanged(handler);
    }

    static getCurrentUser() {
        return auth.currentUser;
    }

    static getCollection(path) {
        return new Promise((resolve, reject) => {
            firestore
                .collection(path)
                .get()
                .then(querySnapshot => {
                    var collection = [];
                    querySnapshot.forEach(docSnapshot => {
                        var document = docSnapshot.data();
                        document.id = docSnapshot.id;
                        collection.push(document);
                    });
                    resolve(collection);
                });
        });
    }

    static getDocument(path) {
        return new Promise((resolve, reject) => {
            firestore
                .doc(path)
                .get()
                .then(docSnapshot => {
                    var document = docSnapshot.data();
                    document.id = docSnapshot.id;
                    resolve(document);
                });
        });
    }

    static getEvents() {
        return Database.getCollection("events");
    }

    static getSeminars(eventId) {
        return Database.getCollection(`events/${eventId}/seminars`);
    }

    static getSpeakers(eventId) {
        return Database.getCollection(`events/${eventId}/speakers`);
    }

    static getBooths(eventId) {
        return Database.getCollection(`events/${eventId}/booths`);
    }

    static getWhiskies() {
        return Database.getCollection("whiskies");
    }

    static getWhiskiesForBooth(booth) {
        let getDocument = Database.getDocument;
        return new Promise((resolve, reject) => {
            var promises = [];
            booth.whiskyIds.forEach(function(whiskyId) {
                let promise = getDocument(`whiskies/${whiskyId}`);
                promises.push(promise);
            });
            Promise.all(promises).then(whiskies => {
                console.log(whiskies);
                resolve(whiskies);
            });
        });
    }
}
