const Firestore = require('@google-cloud/firestore');

const path = require('path');


class FirestoreClient {
  constructor() {
    this.firestore = new Firestore({
      projectId: '[PROJECT ID]',
      keyFilename: path.join(__dirname, '../../[SERVICE ACCOUNT FILE NAME].json')
    })
  }

  async save(collection, data) {
    const docRef = this.firestore.collection(collection).doc(data.docId);
    await docRef.set(data)
  }

  async read(collection, docId) {
    if (docId) {
      const docRef = this.firestore.collection(collection).doc(docId);
      const doc = await docRef.get();
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        return doc.data();
      }
    } else {
      const snapshot = await this.firestore.collection(collection).get();
      return snapshot.docs.map(doc => doc.data());
    }
  }

  async update(collection, docId, data) {
    const docRef = this.firestore.collection(collection).doc(docId);
    await docRef.update(data);
  }

  async delete(collection, docId) {
    await this.firestore.collection(collection).doc(docId).delete();
  }

}

module.exports = new FirestoreClient();