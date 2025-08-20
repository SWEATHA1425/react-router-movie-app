import { createServer, Model } from "miragejs";

createServer({
    models : {movies : Model},


    seeds(server) {
        server.create("movie", {
            id: "1",
            name: "Laugh Out Loud",
            description: "A light-hearted comedy about three friends who try to open the world’s worst restaurant and somehow become famous.",
            imageUrl: "https://media.senscritique.com/media/000004686017/source_big/LOL_Laughing_Out_Loud.jpg",
            type: "comedy",
            price: 30,
            hostId:123
        });

        server.create("movie", {
            id: "2",
            name: "The Hidden Door",
            description: "A mysterious thriller where a detective finds a secret door that leads to events from his own past.",
            imageUrl: "https://prodimage.images-bn.com/pimages/9780359040568_p0_v3_s550x406.jpg",
            type: "thriller",
            price: 25,
            hostId:234
        });

        server.create("movie", {
            id: "3",
            name: "Night of Shadows",
            description: "A horror film about a small village haunted by a shadow creature that only appears during thunderstorms.",
            imageUrl: "https://th.bing.com/th/id/OIP.NZG9bIUZmGJw3dnr4GZOnQHaNK?w=187&h=333&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
            type: "horror",
            price:30,
            hostId:345
        });

        server.create("movie", {
            id: "4",
            name: "Vacation Troubles",
            description: "Two best friends go on vacation to relax—but everything keeps going hilariously wrong.",
            imageUrl: "https://m.media-amazon.com/images/I/91VhiIddWXL._SL1500_.jpg",
            type: "comedy",
            price:35,
            hostId:456
        });

        server.create("movie", {
            id: "5",
            name: "Final Clue",
            description: "A thriller where a journalist receives anonymous clues that help her solve an old criminal case.",
            imageUrl: "https://yt3.googleusercontent.com/aX73xAhUlrpCCONR4P97tQfAI2wIxkEMkzzbo_dEbzcG0Fh2ldfLGuT21tmcF2dl8dnM0eXkCQ=s900-c-k-c0x00ffffff-no-rj",
            type: "thriller",
            price:39,
            hostId:567
        });

        server.create("movie", {
            id: "6",
            name: "The Manor",
            description: "A haunted-house horror movie about a family that moves into a large manor without knowing its dark history.",
            imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lfmqX7Z2O0QGjjEmnZjSXG3X91z.jpg",
            type: "horror",
            price: 45,
            hostId:678
        });    
    },

    routes(){
        this.namespace = "api"
        this.logging = false
        this.get("/movies", (schema, request) => {
            return schema.movies.all();
        })


        this.get("/movies/:id", (schema, request) =>{
            const id = request.params.id;
            return schema.movies.find(id);
        })

        this.get("/host/movies", (schema, request) => {
            return schema.movies.all()
        })

        this.get("/host/movies/:id", (schema, request) => {
            const id = request.params.id
            return schema.movies.find(id)
        })
    }
})