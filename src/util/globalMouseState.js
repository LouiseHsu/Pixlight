// var  globalMouseState = {
//     let mouseState = {
//         leftClick : true
//     };
//
//     getMouseSate () {
//         return this.mouseState;
//     }
//
//     setLeftClickTrue() {
//         this.mouseState.leftClick = true;
//     }
//
//     setLeftClickFalse() {
//         this.mouseState.leftClick = false;
//     }
// }
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

    setLeftClickFalse () {
        this.mouseState.leftClick = false;
    }

}

export default globalMouseState;