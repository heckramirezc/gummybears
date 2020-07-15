import { observable, action } from 'mobx';

class ModalStore {
    @observable flag = false;
    @observable PPopup = null;
    @observable popupList = {
      cart: true,
    }

    @action updateHeaderImage = () => console.log('image updated');

    @action openPopup = (type) => {
      this.PPopup = this.popupList[type];
    }

    @action closePopup = () => {
      this.PPopup = null;
    }
}

export default new ModalStore();

