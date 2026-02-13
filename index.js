// Synchronous: A linear flow where the system waits for the current task to finish before starting the next.
// Asynchronous execution: Tasks are initiated without waiting for previous operations to complete, allowing multiple processes to run concurrently.

setTimeout(() => {
  console.log("This line will run after 0 seconds");
}, 0);

console.log("This line will run instantly!!!");
console.log("than this");

//JavaScript is single threaded non-blocking synchronous/asynchronous language?

//Single Threaded: JavaScript has only one call stack so it can execute only one line of code or one task at a time it's like a queue (first in first out);

//Non-blocking: eventhough JavaScript has only one call stack it does not block the next task or line of code from executing it hands over the time consuming task to the Web API and starts working on next line of code. Like fetching data takes time but it does not block the whole browswer while fetching data. It hands over the task to the Browser API and says let me know when you are done and moves on to the next line.

//Synchronous/Asynchronous: JavaScript reads your code line by line (synchronously) but it has the ability to handle asynchronous task. A synchronous language would be blocking. (it would wait for the time/setTimeout/data fetch to finish). But JavaScript uses eventloop to handle tasks asynchronously, so it's asynchronous language.

//Finaly: JavaScript is a single threaded language that achieves non blocking, asynchronous behaviour using an event loop.
