import profileReducer from "./Reducer/ProfieArrayReducer";
import messegesReducer from "./Reducer/MessegesArrayReducer";
import friendsReducer from "./Reducer/FriendsDataReducer";

let store = {
    _state: {                                                                   // Данние для роботы
        ProfieArray: {
            MessegesData: [                                                    // Масив для наших коментариев
                {messeges: "hellow how are you?", id: 1, likeCount: 15 },
                {messeges: "Hellow i am fine. How are you?", id: 2, likeCount: 10 }
            ],
            PostTextarea: ""                                                   // Масив для изменения символов и добавления в масив MessegesData
        },
        MessegesArray: {
            UserData: [                                                        // Масив для наших юзеров также для компактности и правельности кода 
                {name: 'Halk', id: 1},
                {name: 'Tor', id: 2},
                {name: 'Spidermen', id: 3},
                {name: 'Ironmen', id: 4},
                {name: 'Supermen', id: 5},
                {name: 'Betmen', id: 6},
                {name: 'Tanos', id: 7},
            ],
            DialogsData: [                                                     // Масив для диалогов с нашими юзерами 
                {dialogs: 'hellow', id: 1},
                {dialogs: 'hellow', id: 2},
                {dialogs: 'How are yor', id: 3},
                {dialogs: 'I am fine how are you', id: 4}
            ],
            MessegesTextarea: ''                                               // Масив для изменения символов в диалогах и добавления в сами DialogsData
        },
        FriendsData: [
            {id: 1, name: "Tor"},
            {id: 1, name: "Tanos"},
            {id: 1, name: "Supermen"},
        ]
    },
    _renderEntireTree() {                                                   // метод для перерисовки
    },
    getState() {                                                            // метод для доступа к _state из вне
        return this._state;
    },
    subscrid(observer) {                                                    // для перерисовки UI
        this._renderEntireTree = observer;
    }, 
    dispatch(action) {
        this._state.ProfieArray = profileReducer(this._state.ProfieArray, action);
        this._state.MessegesArray = messegesReducer(this._state.MessegesArray, action);
        this._state.FriendsData = friendsReducer(this._state.FriendsData, action);
        this._renderEntireTree(this._state);  
    }
};

window.store = store;

export default store;