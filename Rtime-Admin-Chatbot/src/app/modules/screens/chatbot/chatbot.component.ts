import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import Swal from 'sweetalert2';
import axios from 'axios';
// import { webkitSpeechRecognition } from 'webkitSpeechRecognition';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: [ './chatbot.component.scss' ],
})
export class ChatbotComponent {
@Input() showPopUp :boolean = false;
@Output() popUp = new EventEmitter();
messages: any = []; // Array to store messages
newMessage: string = ''; // Variable to store the new message input
private chatbotUrl: any = 'https://20a0-203-100-78-18.ngrok-free.app/ask-question?question='; // Replace with your API endpoint URL
// Define a class property to track whether the message has been sent
messageSent: boolean = false;
chatContainer: HTMLElement | null = null; // Initialize with null

constructor (private http: HttpClient) {
  // generating messages from two users alternating
  this.messages.push({ sender: 'user1',
    content: 'Welcome to CatBot, I am here to assist you over timesheet data. ' });
  this.messages.push({ sender: 'user1', content: 'let me know how I can help you today.' });
  // Add more messages as needed




}
onScroll () {
// Add an event listener to the window's scroll event
  // window.onscroll = () => {
  //   // Calculate the position where you want to trigger sending the message
  //   // const triggerPosition = 500; // Example: Trigger message when scrolled 500 pixels from the top

  //   // // Get the current scroll position
  //   // const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  //   // // Check if the scroll position is greater than or equal to the trigger position and the message has not been sent yet
  //   // if (scrollPosition >= triggerPosition && !this.messageSent) {
  //   //   // Call the sendMessage function
  //   //   this.sendMessage();
  //   //   // Set messageSent to true to prevent sending the message multiple times
  //   //   this.messageSent = true;
  //   // }


  // };

}

// ngOnChanges () {
//   if (this.showPopUp) {
//     Swal.fire({
//       title: 'ChatBot Working',
//       icon: 'info',
//       text: 'Started',
//       confirmButtonColor: '#5371FF',

//       customClass: {
//         title: 'custom-title-class',
//         htmlContainer: 'swal2-content',
//       },
//     }).then((result) => {
//       if (result.isDismissed === true) {
//         this.popUp.emit();
//         console.log('e');
//       }
//     })
//       .catch((err) => {
//         console.log(err);
//       });

//   }
// }

sendMessage () {
  // Add the new message to the messages array with sender 'user1'
  if (this.newMessage.trim() !== '') {
    this.messages.push({ sender: 'user2', content: this.newMessage });
    this.onScroll();
    console.log('Enter In Function');
    // this.newMessage = 'egtgtgrf';
    console.log(this.newMessage);// Clear the input field after sending the message
    this.makeGetRequest();
    this.newMessage = '';

  }


  // Simulate a response from 'user2' after a delay
  // setTimeout(() => {
  //   //  response message from user2
  //   const responseMessage = 'I received your message!';
  //   this.messages.push({ sender: 'user2', content: responseMessage });
  // }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
}

closeChatbot () {
  this.showPopUp = false; // Close the chatbot UI
}

makeGetRequest () {
  // Construct the complete URL by appending the newMessage as a query parameter
  const url = `${ this.chatbotUrl }${ encodeURIComponent(this.newMessage) }`;

  // Make the GET request to the constructed URL
  //  this.http.get<any>(url).subscribe(   (response:any) => {
  //     console.log(response)
  //      // Process the response and update UI if needed
  //    },
  //    (error) => {
  //      console.error('Error making GET request:', error);
  //      // Handle errors appropriately
  //    }
  //  );


  // Set and send an ngrok-skip-browser-warning request header with any value.
  // Or, set and send a custom/non-standard browser User-Agent request header.
  // Or, please upgrade to any paid ngrok account.
  axios.post(url).then((result) => {
    console.log(result.data);
    // this.newMessage= result.data;
    this.messages.push({ sender: 'user1', content: result.data });

  })
    .catch(console.log);

}
}
