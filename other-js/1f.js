

try {
 console.log("Start");
 throw new Error("Error occurred");
} catch (err) {
 console.log(err.message);
} finally {
 console.log("End");
}
