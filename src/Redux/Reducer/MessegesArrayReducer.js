
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <const>
const add_Dialogs = "messegesReducer/ADD-DIALOGS";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <const>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <initialState>
let initialState = {
    UserData: [                                                        // Масив для наших юзеров также для компактности и правельности кода 
        {name: 'Halk', id: 1, src: 'https://cdn4.iconfinder.com/data/icons/superheroes/512/hulk-512.png'},
        {name: 'Tor', id: 2, src: 'https://avatarko.ru/img/kartinka/21/film_muzhchina_Thor_20544.jpg'},
        {name: 'Spidermen', id: 3, src: 'https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_spiderman_marvel_spider_man-512.png'},
        {name: 'Ironmen', id: 4, src: 'https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_iron_man_marvel_hero-512.png'},
        {name: 'Supermen', id: 5, src: 'https://i7.pngguru.com/preview/789/709/264/superman-avatar-icon-superhero-phone-icon.jpg'},
        {name: 'Betmen', id: 6, src: 'https://c7.hotpng.com/preview/110/494/413/batman-computer-icons-bane-avatar-batman.jpg'},
        {name: 'Tanos', id: 7, src: 'https://versiya.info/uploads/posts/2018-05/1526814472_tanos.jpg'},
    ],
    DialogsData: [                                                     // Масив для диалогов с нашими юзерами 
        {dialogs: 'hellow', id: 1},
        {dialogs: 'hellow', id: 2},
        {dialogs: 'How are yor', id: 3},
        {dialogs: 'I am fine how are you', id: 4}
    ],
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  </initialState>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <messegesReducer>
const messegesReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case add_Dialogs: 
            let newMesseges = action.MessegesTextarea
            return {
                ...state,
                DialogsData: [...state.DialogsData, {dialogs: newMesseges}],
            };
        default:
            return state; 
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  </messegesReducer>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  <ActionCreator>
export const addDialogssActionCreator = (MessegesTextarea) => ({ type: add_Dialogs, MessegesTextarea});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  </ActionCreator>

export default messegesReducer;