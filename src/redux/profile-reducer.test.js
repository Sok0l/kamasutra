import profileReduser, { addPostActionCreator } from "./profile-reducer";

it("new post shold be added", () => {
  let action = addPostActionCreator("Lev Sokolov");

  let state = {
    postData: [
      { id: 1, messege: "Hi, how are you?", count: 15 },
      { id: 2, messege: "It's my first post", count: 30 },
    ],
  };

  let newState = profileReduser(state, action);

  expect(newState.posts.length).tobe(5);
});
