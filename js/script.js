const {createApp} = Vue;

createApp({
    data() {
        return{
            contactIndex: 0,
            inputText: "",
            fromTimeWindow: "Scrivi un messaggio",
            activeMenu: null,
            newMessageElement: null,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    methods: {
        // Function to open the chat of the selected contact
        openNewChat(chatIndex){
            this.contactIndex = chatIndex;
            this.activeMenu = null;
        },

        // Function to add the new message entered in the input by the user resulting in an automatic reply with time out
        addNewUserMessage(content){
            if(content != null && content != " "){
                this.contacts[this.contactIndex].messages.push({
                    date: `${this.newMessageDate()}`, message : content, status : "sent"
                });
                setTimeout(() => {
                    this.contacts[this.contactIndex].messages.push({
                        date: `${this.newMessageDate()}`, message : "ok", status : "received"
                    })
                }, 1000);
            };
            this.clearInput();
        },

        // Function to empty the input after sending the message
        clearInput(){
            this.newMessageElement = "";
        },

        // Function to search for a contact from the list based on the letter that coincides with one of the contacts in the array
        nameContactResearch(inputText){
            this.contacts.forEach(contact => {
                if(contact.name.toLowerCase().includes(inputText)){
                    contact.visible = true;
                    console.log(`true`);
                } else {
                    contact.visible = false;
                    console.log(`false`);
                };
            });
        },

        // Function to show the dropdown menu of any message on click of chevron-down
        showDropdownMenu(index){
            if(!this.activeMenu){
                this.activeMenu = index;
            } else {
                this.activeMenu = null;
            };
        },

        // Fuction to delete the message selected with the dropdown menu element
        removeMessage(index){
            if(this.contacts[this.contactIndex].messages.length != 1){
                this.contacts[this.contactIndex].messages.splice(index, 1);
                this.activeMenu = null;
            } else if(this.contacts[this.contactIndex].messages.length = 1) {
                this.contacts[this.contactIndex].messages.splice(index, 1);
                this.contacts[this.contactIndex].messages.push({
                    date: "", message : "Nessun messaggio presente nella chat", status: "last-message"
                })
                this.activeMenu = null;
            }
        },

        // Function to show the current date and time of sent and received messages
        newMessageDate(){
            const date = luxon.DateTime.now().toLocaleString();
            const hourTime = luxon.DateTime.now().hour.toLocaleString();
            const minutesTime = luxon.DateTime.now().minute.toLocaleString();
            const secondsTime = luxon.DateTime.now().second.toLocaleString();
            const dateTime = `${date}  ${hourTime}:${minutesTime}:${secondsTime} `;
            console.log(dateTime);
            return dateTime;
        },

        // Function to show the latest chat message, whether sent or received, in each contact's inbox
        theLastOfMessages(element){
            const lastElement = element.messages.slice(-1)[0];
            const lastMessage = `${lastElement.message}`;
            return lastMessage;
        },

        // Function to show in each contact's inbox the date and time of the last chat message, whether sent or received
        theLastOfMessagesTime(element){
            const lastElement = element.messages.slice(-1)[0];
            const lastTime = `${lastElement.date}`;
            return lastTime;
        }
    }
}).mount(`#app`)
