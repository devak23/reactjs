import { observable, action, computed } from "mobx";

class BirdStore {
  @observable birds = [];

  @action addBird = (bird) => {
    if (bird) {
      this.birds.push(bird);
    }
  };

  @computed get birdCount() {
    return this.birds.length;
  }
}

// export single instance of the BirdStore
const store = new BirdStore();
export default store;