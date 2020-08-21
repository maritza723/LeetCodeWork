/**
 * BUilding a binary tree structure
 */



class BTS {
    BTS(num){
        this.left = null;
        this.right = null;
        this.val = num;
    }
}


const myBTS = new BTS(200);
myBTS.left = new BTS(100);
myBTS.right = new BTS(300);
//   200
// 100  300

myBTS.left.left = new BTS(50);