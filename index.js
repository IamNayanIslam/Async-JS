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

setTimeout(() => {
  console.log("This line will run after 0 seconds");
}, 0); //This task will be sent to the task queue

console.log("This line will run instantly!!!"); //this task will be sent to the call stack
console.log("than this"); // this task also will be sent to the call stack
//this two task will create a queue in the call stack the first task on line 26 will be executed first then the task on line 27 after that the call stack will be empty

//after that the event loop will be notified that the call stack is empty then it will send the task from task queue to the call stack and the task inside setTimeout will be executed

//callback functions:A callback function is a function passed as an argument of another function, to be called back, later in time. like we can see in the setTimeout() function above there is two argument a function (which is callback function) and a number (of milliseconds). The callback function will be called after the specified time (milliseconds)

let ans = new Promise((res, rej) => {
  let num = Math.floor(Math.random() * 10 + 1);

  if (num >= 5) {
    return res(num); // Pass the number to the 'then'
  }

  rej(num); // Pass the number to the 'catch'
});

ans
  .then((number) => {
    console.log(`Success! The number ${number} is >= 5`);
  })
  .catch((number) => {
    console.log(`Failed! The number ${number} is < 5`);
  });

console.log("1. Script Start");

// 1. Initiate the fetch (This returns a Promise)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    // Check if the HTTP request actually worked (e.g., 404 or 500 errors)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // .json() also returns a Promise!
  })
  .then((data) => {
    // 2. Handle the final data
    console.log("3. Success! Here is the data:", data);
  })
  .catch((error) => {
    // 3. Handle any errors (Network down, invalid URL, etc.)
    console.log("Error caught:", error.message);
  })
  .finally(() => {
    // 4. This runs no matter what (Success or Failure)
    console.log("4. Fetch attempt finished.");
  });

console.log("2. Script End");

//let me try again
/* 
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(`Success! Here is the data: ${data.body}`);
  })
  .catch((error) => {
    console.log("error caught:", error.message);
  })
  .finally(() => {
    console.log("The fetch attempt finished.");
  });
 */

//What is happening here: fetching data from that url then checking if the response is not ok the code will through an error if it is okay then it will return the json data from the response then we will use the response data if there was an error cought then we will show the error message finally we will declare that the fetch attempt was completed maybe failed or succeded.

async function getData() {
  try {
    // 1. Try to fetch
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    // 2. Check the "Envelope" (Status)
    if (!response.ok) {
      throw new Error("Server said no!");
    }

    // 3. Try to parse the "Letter" (JSON)
    const data = await response.json();
    console.log("Success:", data.title);
  } catch (error) {
    // 4. If Step 1, 2, or 3 fails, the code JUMPS here immediately
    console.log("Something went wrong:", error.message);
  } finally {
    // 5. This always runs
    console.log("Attempt complete.");
  }
}

//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.

//let me try again

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    if (!response.ok) {
      throw new Error("The fetch request was rejected");
    }
    const data = await response.json();
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Attempt complete!!!");
  }
};
