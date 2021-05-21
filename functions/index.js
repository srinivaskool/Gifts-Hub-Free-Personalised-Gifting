const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.scheduledFunctionCrontab = functions.pubsub
  .schedule("* * * * *")
  .onRun(async (context) => {
    const giftsRef = db.collection("Livelinks");
    const snapshot = await giftsRef.get();
    snapshot.forEach(async (doc) => {
      if (Date.parse(doc.data().Bday_date) >= Date.now() - 19800000) {
        var diff = Math.ceil(
          (Date.parse(doc.data().Bday_date) - Date.now() - 19800000) / 86400000
        );
        var arr = doc.data().array_data;

        if (diff <= arr.length && arr[arr.length - diff].ismailsent == false) {
          db.collection("mail")
            .add({
              to: "srinivask.bits@gmail.com",
              message: {
                subject: `Hello from ${doc.data().From_name}!`,
                text: "This is the plaintext section of the email body.",
                html: `This is a gift to you from Gifts Hub. ${
                  arr[arr.length - diff].url
                }`,
              },
            })
            .then(() =>
              console.log(
                "from ",
                doc.data().From_name,
                "link",
                arr[arr.length - diff].url
              )
            );
          const newdata = arr;
          newdata[arr.length - diff].ismailsent = true;
          await db.collection("Livelinks").doc(doc.id).update(
            {
              array_data: newdata,
            },
            { merge: true }
          );
        }
      }
    });

    return null;
  });
