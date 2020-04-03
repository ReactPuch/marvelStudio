import profileReducer, { addCommentsActionCreator, deleteCommentAC } from "../ProfieArrayReducer";

let state = {
    MessegesData: [                                                             
        {messeges: "hellow how are you?", id: 1, likeCount: 15 },
        {messeges: "Hellow i am fine. How are you?", id: 2, likeCount: 10 }
    ],
};

// it('length of posts should be incremented', () => {
//     // 1
//     let action = addCommentsActionCreator("Adamovich");
//     // 2
//     let newProfileReducer = profileReducer(state, action);
//     // 3
//     expect(newProfileReducer.MessegesData.length).toBe(3);
// });

// it('messeges of new post should be Adamovich ', () => {
//     // 1
//     let action = addCommentsActionCreator("Adamovich");
//     // 2
//     let newProfileReducer = profileReducer(state, action);
//     // 3
//     expect(newProfileReducer.MessegesData[2].messeges).toBe("Adamovich");
// });

it('after deleting length of messeges shoult be decrement', () => {
    let action = deleteCommentAC(1);
    let newProfileReducer = profileReducer(state, action);
    expect(newProfileReducer.MessegesData.length).toBe(1);
});

