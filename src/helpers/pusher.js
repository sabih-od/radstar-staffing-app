// import { Pusher } from "@pusher/pusher-websocket-react-native";
import Pusher from 'pusher-js';

export async function connectPusher() {
    // const pusher = Pusher.getInstance();
    // await pusher.init({
    //     apiKey: 'caa19ca985e8b8b7997d',
    //     cluster: 'ap2'
    // });
    // const connect = await pusher.connect();
    // if (connect) console.log('Pusher Connected')

    // const channel = await pusher.subscribe({
    //     channelName: "new-notification",
    //     onEvent: (event) => {
    //         console.log(`onEvent: ${event}`);
    //     }
    // });

    // const pusher = new Pusher({
    //     appId: '1630913',
    //     key: 'caa19ca985e8b8b7997d',
    //     secret: '2b0c9e62575479fe038b',
    //     cluster: 'ap2',
    // });

    const pusher = new Pusher('1630913', {
        cluster: 'ap2',
        key: 'caa19ca985e8b8b7997d',
        secret: '2b0c9e62575479fe038b',
    });

    pusher.connection.bind('connected', () => {
        console.log('Connected to Pusher');
    });

    const channel = pusher.subscribe('my-channel');

    channel.bind('my-event', (data) => {
        console.log('Received push notification:', data);
        // Handle the notification here
    });
}
