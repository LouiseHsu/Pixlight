let instance = null;
class globalMouseState {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.mouseState = {
            leftClick: false
        };

        return instance;
    }

    toggleLeftClick () {
        this.mouseState.leftClick = !this.mouseState.leftClick;
    }
}

export default globalMouseState;