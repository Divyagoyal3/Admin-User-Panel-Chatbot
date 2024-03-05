import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import axios from 'axios';
// import * as RecordRTC from 'recordrtc';




// import { webkitSpeechRecognition } from 'webkitSpeechRecognition';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: [ './chatbot.component.scss' ],
})
export class ChatbotComponent implements OnChanges {
  @Input() showPopUp: boolean = false;
  @Output() popUp = new EventEmitter();
  showModal: boolean = false;
  messages: any = []; // Array to store messages
  newMessage: string = ''; // Variable to store the new message input
  voiceMessage: string = '';
  showEmojiPicker: boolean = false;
  storedMessage:boolean = false;
  // public recognition: any;
  private chatbotUrl: any = 'https://8ff6-203-100-78-18.ngrok-free.app/transcribe/?timesheet=';
  mediaRecorder: MediaRecorder | undefined;
  chunks: Blob[] = [];
  blob:any;
  audioUrl: string | undefined;
  isRecording:boolean =false;

  constructor (private http: HttpClient) {
    // generating messages from two users alternating
    this.messages.push({ sender: 'user2', content: 'Hello, how are you?' });
    this.messages.push({ sender: 'user1', content: 'I am doing well, thank you!' });
    // Add more messages as needed
  }
  ngOnChanges(changes: SimpleChanges): void {
  //   if (this.storedMessage) {
  //     Swal.fire({
  //       title: 'Stored Message',
  //       text: 'Stored Message of Audio',
  //       icon: 'info',
  //       showCancelButton: true,
  //       confirmButtonText: 'Stop Recording',
  //      cancelButtonText: 'Discard',
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         // OK button clicked
  //        //  this.stopRecording();
  //         // Add your logic here for when the user clicks OK
  //      } else if (result.dismiss === Swal.DismissReason.cancel) {
  //         // Cancel button clicked or clicked outside the dialog
  //        // Add your logic here for when the user clicks Cancel or clicks outside the dialog
  //      }
  //    });
  //  }
  }
  openModal (): void {
    this.showModal = true;
  }

  closeModal (): void {
    this.showModal = false;
  }
  
  async startRecording () {
    try {
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.addEventListener('dataavailable', (event) => {
        console.log("data collecting: ", event.data);
        if (event.data.size > 0) {
          this.chunks.push(event.data);
        }
      });
      this.mediaRecorder.start();
   
      alert("Voice has been Recording Now");
      console.log(this.chunks);
        // Display SweetAlert popup indicating that recording has started
        Swal.fire({
          title: 'Recording Started',
          text: 'Audio is being recorded',
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: 'Stop',
          cancelButtonText: 'Discard',
          timer: 100000, // Set to a large value to prevent auto-closing
        }).then((result) => {
          if (result.isConfirmed) {
            // OK button clicked
            alert("Voice has been Recorded");
            this.stopRecording();
            this.isRecording = true;
            // Handle OK button logic
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Discard button clicked or clicked outside the modal
            // Handle Discard button logic
          alert("Try again To record the Audio");
          }
        });

    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  }

 
 stopRecording () {
  alert("Your Audio is recorded");
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
      this.saveRecording();
      console.log('while stoping', this.chunks);
    }
  }

  saveRecording() {
    const blobs = new Blob(this.chunks, { type: 'audio/mp3' });
    const form = new FormData();
    form.append('audioFile', blobs, 'audio.mp3'); // Specify the file name as 'audio.mp3' and content type as 'audio/mp3'
  
    this.http.post('http://192.168.1.32:8000/media/v2/uploads', form, {
      headers: { 'audioFile': 'audio/mp3' } // Set the content type of the request explicitly
    }).subscribe(
      (response) => {
        console.log('Recording saved successfully:', response);
        // Implement any further logic, e.g., displaying success message
      },
      (error) => {
        console.error('Error saving recording:', error);
        // Implement error handling, e.g., displaying error message to user
      },
    );
  }
  
  sendMessage () {
    // Add the new message to the messages array with sender 'user1'
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'user2', content: this.newMessage });
      this.makeGetRequest();
      this.newMessage = ''; // Clear the input field after sending the message
    }

    // Simulate a response from 'user2' after a delay
    setTimeout(() => {
      //  response message from user2
      const responseMessage = 'I received your message!';
      this.messages.push({ sender: 'user1', content: responseMessage });
    }, 1000); // Simulate a delay of 1 second (1000 milliseconds)
  }

  closeChatbot () {
    this.showPopUp = false; // Close the chatbot UI
  }

  toggleEmojiPicker () {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji (event: any) {

    this.newMessage += event;
    this.showEmojiPicker = false;
  }


  // startVoiceListening () {
  //   if ('webkitSpeechRecognition' in window) {
  //     this.recognition = new (window as any).webkitSpeechRecognition();
  //     this.recognition.lang = 'en-US';
  //     alert('Voice Recording has been Started');
  //     this.recognition.start();

  //     this.recognition.onresult = (event: any) => {
  //       const { transcript } = event.results[0][0];
  //       this.voiceMessage += transcript;
  //       console.log(this.voiceMessage);
  //       // Storing the newMessage variable in local storage
  //       localStorage.setItem('newMessage', this.voiceMessage);

  //       // Retrieving the newMessage variable from local storage
  //       const storedMessage = localStorage.getItem('newMessage');

  //       if (storedMessage) {
  //         Swal.fire({
  //           title: 'Stored Message',
  //           text: storedMessage,
  //           icon: 'info',
  //           showCancelButton: true,
  //           confirmButtonText: 'OK',
  //           cancelButtonText: 'Cancel',
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             // OK button clicked
  //             this.makeGetRequest();
  //             // Add your logic here for when the user clicks OK
  //           } else if (result.dismiss === Swal.DismissReason.cancel) {
  //             // Cancel button clicked or clicked outside the dialog
  //             // Add your logic here for when the user clicks Cancel or clicks outside the dialog
  //           }
  //         });
  //       }
  //     };


  //   } else {
  //     alert('Speech recognition not supported in this browser.');
  //   }
  // }

  // stopVoiceListening () {
  //   if (this.recognition) {
  //     this.recognition.stop();
  //     console.log('Recognition stopped');
  //     alert('Voice recognition stopped');
  //   }
  // }



   makeGetRequest () {
     // Construct the complete URL by appending the newMessage as a query parameter
     const url = `${ this.chatbotUrl }${ encodeURIComponent(this.newMessage) }`;

  //   // Make the GET request to the constructed URL
  //      this.http.get<any>(url).subscribe(   (response:any) => {
  //         console.log(response)
  //       // Process the response and update UI if needed
  //    },
  //     (error) => {
  //    console.error('Error making GET request:', error);
  //     // Handle errors appropriately
  //    }
  //  );


    // Set and send an ngrok-skip-browser-warning request header with any value.
     // Or, set and send a custom/non-standard browser User-Agent request header.
    // Or, please upgrade to any paid ngrok account.
     axios.post(url).then((result) => {
      console.log(result.data);
       this.newMessage= result.data;
      this.messages.push({ sender: 'user1', content: result.data });

     })
       .catch(console.log);
  }
}
